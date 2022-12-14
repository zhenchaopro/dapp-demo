import React, { useEffect, useMemo, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { TransactionResponse } from '@ethersproject/abstract-provider'
import { Web3Provider } from '@ethersproject/providers'
import { BigNumber, ethers } from 'ethers'
import toast, { Toaster } from 'react-hot-toast'
import { Text, Spacer, Badge, useModal, Modal } from '@geist-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import TransactionSummary from './transation-summary'
import { BUILTIN_NETWORKS, Network, PendingTransaction } from '../constants'
import { formatBalance, formatEthAddress } from '../utils'
import NewNetworkForm, { NewNetworkPayload, payloadToChainInfo } from './new-network-form'
import { useLocalStorageState } from '../hooks'

export type TransferPayload = {
  network: string
  to: string
  amount: string
  nonce: string
}

export interface FeeData {
  maxFeePerGas: BigNumber
  maxPriorityFeePerGas: BigNumber
  gasPrice: BigNumber
}

interface TransferProps { }

type SwitchNetworkResult = {
  chainId: number
}

const DEFAULT_GAS_LIMIT = 21000
const BIGNUMBER_ZERO = BigNumber.from('0')
const ADDRESS_FORMAT_ERROR_MSG =
  "The recipient's address format is wrong. Please check the address length and character content and try again"

const Transfer = () => {
  const { active, account, library, chainId } = useWeb3React<Web3Provider>()
  const [balance, setBalance] = useState<BigNumber>(BIGNUMBER_ZERO)
  const [nonce, setNonce] = useState<number>(0)
  const [isSending, setIsSending] = useState<boolean>(false)
  const [pendingTxs, setPendingTxs] = useState<PendingTransaction[]>([])
  const { setVisible, bindings } = useModal()
  const [networks, setNetworks] = useLocalStorageState<Network[]>('networks', BUILTIN_NETWORKS)
  const [connected, setConnected] = useLocalStorageState<boolean>('connected', false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TransferPayload>({
    mode: 'all',
  })

  useEffect(() => {
    if (active && !!account) {
      const signer = library.getSigner()
      signer.getBalance().then(value => {
        setBalance(value)
      })
      signer.getTransactionCount().then(value => {
        setNonce(value)
      })
      setConnected(true)
    }
  }, [active, account])

  useEffect(() => {
    reset(formValues => ({
      ...formValues,
      nonce: nonce.toString(),
    }))
  }, [nonce])

  useEffect(() => {
    if (!active) {
      // reset address and amount when account is disconnected
      reset(formValues => ({
        ...formValues,
        to: "",
        amount: ""
      }))
      setConnected(false);
    }
  }, [active])

  useEffect(() => {
    if (chainId) {
      reset(formValues => ({
        ...formValues,
        network: chainId.toString(),
      }))
    }
  }, [chainId])

  if (!connected) {
    return (
      <div className='w-80 md:w-96 mx-auto rounded-lg border shadow-lg p-4 box-border m-4 bg-white'>
        <div className='font-bold text-lg'>??? DApp ????????????????????????????????? nonce???</div>
        <Spacer />
        <div>
          ???????????????????????? imToken ???????????????, MetaMask ????????????????????? DApp ?????????
          nonce??????????????????OK???
        </div>
        <Spacer />
        <div>
          ??? imToken ??????????????????????????????????????????????????????????????? ?????????????????? MetaMask
          ????????????????????????????????????MetaMask ???????????????????????? nonce???
        </div>
        <Spacer />
        <div className='text-sm text-gray-700'>
          Enkrypted ??? Coinbase Wallet Extension ??????????????????
        </div>
      </div>
    )
  }

  const subscribeTranscationMinedEvent = (txhash: string, amount: string) => {
    library?.once(txhash, t => {
      toast.success(`Transaction ${formatEthAddress(txhash)} has been mined`)

      // ?????? nonce++ ????????????, ??????????????????
      // 1. ??????????????????????????????????????????????????????
      // 2. ?????????????????????????????? nonce, ????????????????????? nonce
      // setNonce(n => n+1)
      const signer = library.getSigner()
      signer.getTransactionCount().then(count => setNonce(_ => count))
      // ?????????????????????????????????????????????????????? getBalance ???????????????
      signer.getBalance().then(b => setBalance(_ => b))

      // remove mined transaction from pending transactions
      setPendingTxs(txs => {
        const index = txs.findIndex(t => t.hash === txhash)
        if (index !== -1) {
          return [...txs.slice(0, index), ...txs.slice(index + 1)]
        }
        return txs
      })
    })
  }

  const sendTransaction: SubmitHandler<TransferPayload> = async payload => {
    setIsSending(true)
    const signer = library.getSigner()
    let feeData: FeeData
    try {
      feeData = await library.getFeeData()
    } catch (error) {
      toast.error('????????????????????????????????????')
      return
    }

    if ((window as any).ethereum.isImToken) {
      // ??????????????? imToken ????????? signer.sendTransaction ??????????????????????????? ethereium.request ????????????

      // ???????????? transaction
      // maxFeePerGas ??? maxPriorityFeePerGas ?????????????????? ethers ??? Signer ??? populuateTransaction ?????????
      const tx = {
        from: account,
        to: payload.to,
        value: ethers.utils.parseEther(payload.amount).toHexString(),
        nonce: ethers.BigNumber.from(payload.nonce).toHexString(),
        maxFeePerGas: feeData.maxFeePerGas.toHexString(),
        maxPriorityFeePerGas: feeData.maxPriorityFeePerGas.toHexString(),
        gasLimit: ethers.BigNumber.from(DEFAULT_GAS_LIMIT).toHexString(),
      }

      // ????????????
      return (window as any).ethereum
        .request({
          method: 'eth_sendTransaction',
          params: [tx],
        })
        .then((txhash: string) => {
          reset(formValues => ({
            ...formValues,
            to: '',
            amount: '',
          }))
          setIsSending(false)
          library.getTransaction(txhash).then((t: TransactionResponse | null) => {
            // ???????????????????????? nonce ????????????????????? queued ??????, ????????? t ????????????
            // ??????????????? payload ?????????????????? pending transaction
            if (!t) {
              const imtokenTxPayload = {
                from: account,
                to: payload.to,
                value: ethers.utils.parseEther(payload.amount),
                nonce: ethers.BigNumber.from(payload.nonce).toNumber().toString(),
                maxFeePerGas: feeData.maxFeePerGas,
                maxPriorityFeePerGas: feeData.maxPriorityFeePerGas,
                gasLimit: ethers.BigNumber.from(DEFAULT_GAS_LIMIT),
                hash: txhash,
              }
              setPendingTxs(txs => [imtokenTxPayload, ...txs])
            } else {
              setPendingTxs(txs => [t, ...txs])
            }
          })
          subscribeTranscationMinedEvent(txhash, payload.amount)
          toast.success('Transaction sent.')
        })
        .catch((error: any) => {
          setIsSending(false)
          console.log(error)
          toast.error('Failed to send transaction!')
        })
    } else {
      // MetaMask ?????? signer.sendTransaction????????? nonce ???????????????
      // ?????? https://github.com/MetaMask/metamask-extension/issues/3475
      const tx = {
        to: payload.to,
        value: ethers.utils.parseEther(payload.amount),
        nonce: parseInt(payload.nonce),
        type: 2, // set to EIP-1559 explicitly
      }
      return signer
        .sendTransaction(tx)
        .then((t: TransactionResponse) => {
          setPendingTxs(txs => [t, ...txs])
          reset(formValues => ({
            ...formValues,
            to: '',
            amount: '',
          }))
          setIsSending(false)
          subscribeTranscationMinedEvent(t.hash, payload.amount)
          return tx
        })
        .catch(error => {
          setIsSending(false)
          console.log(error)
          // TODO: ???????????????????????????
          if (
            (typeof error.message === 'string' && error.message.match(/user (rejected|denied)/i)) ||
            (typeof error === 'string' && error.match(/user (rejected|denied)/i))
          ) {
            toast.error('User rejected transaction!')
          } else if (typeof error === "string") {
            toast.error(error.split("(")[0])
          } else if (error.toString() !== "Error") {
            toast.error(error.toString().split("(")[0])
          } else {
            toast.error("Send failed")
          }
        })
    }
  }

  const requestAddNetwork = (chainId: string) => {
    return () => {
      const chainInfo = networks.find(n => n.chainId.toString() === chainId)
      return (window as any).ethereum
        .request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              ...chainInfo,
              chainId: `0x${Number(chainId).toString(16)}`,
            },
          ],
        })
        .then((ret: any) => {
          toast.success(`Add network ${chainInfo?.chainName} successfully`)
          window.location.reload()
        })
        .catch((error: any) => {
          toast.error(error.message, {
            style: {
              wordBreak: 'break-word',
            },
          })
        })
    }
  }

  const addNetworkManually: SubmitHandler<NewNetworkPayload> = payload => {
    const chainInfo = payloadToChainInfo(payload)
    return (window as any).ethereum
      .request({
        method: 'wallet_addEthereumChain',
        params: [chainInfo],
      })
      .then((ret: any) => {
        toast.success(`Add network ${payload.name} successfully`)
        setVisible(false)
        setNetworks(prevNetworks => [
          ...prevNetworks,
          {
            ...chainInfo,
            chainId: parseInt(payload.chainId),
          },
        ])
        return ret
      })
      .catch((error: any) => {
        toast.error(error.message || 'Faild to add network!')
      })
  }

  const switchNetwork = (e: React.ChangeEvent<HTMLInputElement>) => {
    const chainId = e.target.value
    return (window as any).ethereum
      .request({
        method: 'wallet_switchEthereumChain',
        params: [
          {
            chainId: `0x${Number(chainId).toString(16)}`,
          },
        ],
      })
      .then((ret: SwitchNetworkResult) => {
        toast.success('Switch network successfully')
        // ??????????????????????????????
        window.location.reload()
      })
      .catch((error: any) => {
        if (typeof error.message === 'string') {
          if (error.message.match(/Unrecognized chain/i)) {
            toast.error(
              t => (
                <span>
                  Unrecognized network. Try adding the network first.
                  <button
                    className='border rounded-lg px-3 py-1 bg-blue-500 text-white ml-2'
                    onClick={requestAddNetwork(chainId)}
                  >
                    Add network
                  </button>
                </span>
              ),
              {
                duration: 2000,
              },
            )
          } else if (error.message.match(/user (rejected|denied)/i)) {
            toast.error('User rejected operation.')
          }
        } else {
          toast.error('Switch network failed with unknown error')
        }
      })
  }

  return (
    <div className='transfer-container md:w-96 mx-4 md:mx-auto border rounded-lg p-4 shadow-lg box-border bg-white'>
      <div className='font-bold text-3xl'>Send</div>
      <form onSubmit={handleSubmit(sendTransaction)}>
        <div className='form-item'>
          <div className='form-item__label'>
            <label htmlFor='network'>Network</label>
            <div
              className='font-normal text-sm cursor-pointer hover:text-blue-600'
              onClick={() => setVisible(true)}
            >
              Add network
            </div>
          </div>
          <select
            id='network'
            placeholder='Select network'
            {...register('network', {
              required: 'Network is required',
              onChange: switchNetwork,
            })}
          >
            {networks.map(network => (
              <option key={network.chainId} value={network.chainId.toString()}>
                {network.chainName}
              </option>
            ))}
          </select>
        </div>
        <div className='form-item'>
          <div className='form-item__label'>
            <label htmlFor='to'>Address</label>
          </div>
          <input
            id='to'
            type='text'
            placeholder='Enter address'
            {...register('to', {
              required: "Please enter recipient's address",
              validate: {
                isEthAddress: value => ethers.utils.isAddress(value) || ADDRESS_FORMAT_ERROR_MSG,
              },
            })}
          />
          {errors.to && <div className='form-item__error'>{errors.to.message}</div>}
        </div>
        <div className='form-item'>
          <div className='form-item__label'>
            <label htmlFor='amount'>Amount</label>
            <div className='text-sm font-normal'>Balance: {formatBalance(balance)}</div>
          </div>
          <input
            id='amount'
            type='number'
            step='any'
            placeholder='amount'
            {...register('amount', { required: 'Amount is required' })}
          />
          {errors.amount && <div className='form-item__error'>{errors.amount.message}</div>}
        </div>
        <div className='form-item'>
          <div className='form-item__label'>
            <label htmlFor='nonce'>Nonce</label>
          </div>
          <input
            id='nonce'
            type='number'
            {...register('nonce', { required: 'Nonce is required' })}
          />
          {errors.nonce && <div className='form-item__error'>{errors.nonce.message}</div>}
        </div>
        <div className='form-item'>
          {isSending ? (
            <button
              className='block border rounded-lg bg-blue-600 text-white w-full py-2 cursor-not-allowed'
              type='submit'
              disabled
            >
              Sending
            </button>
          ) : (
            <button
              className='block border rounded-lg bg-blue-600 text-white w-full py-2'
              type='submit'
            >
              Confirm
            </button>
          )}
        </div>
      </form>
      {pendingTxs.length > 0 && (
        <>
          <Spacer />
          <div>
            <div className='flex items-center'>
              <div className='font-bold text-xl mr-2'>Pending transactions</div>
              <Badge scale={0.8} type='warning'>
                {pendingTxs.length}
              </Badge>
            </div>
            {pendingTxs.map(t => (
              <TransactionSummary key={t.hash} tx={t} />
            ))}
          </div>
        </>
      )}
      <Toaster />
      <Modal {...bindings}>
        <Modal.Content>
          <NewNetworkForm onCancel={() => setVisible(false)} onSubmit={addNetworkManually} />
        </Modal.Content>
      </Modal>
    </div>
  )
}

export default Transfer
