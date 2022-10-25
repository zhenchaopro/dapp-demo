import React, { useState, useEffect } from 'react'
import { Snippet, Button } from '@geist-ui/react'
import { InjectedConnector } from '@web3-react/injected-connector'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import toast, { Toaster } from 'react-hot-toast'
import { useLocalStorageState } from '../hooks'

const injected = new InjectedConnector({})

const Connector: React.FC<unknown> = () => {
  const { activate, active, account, deactivate } = useWeb3React<Web3Provider>()
  const [isConnected, setIsConncted] = useLocalStorageState<boolean>("isconnected", false)

  useEffect(() => {
    injected.isAuthorized().then(authorized => {
      setIsConncted(true);
      activate(injected).then(_ => {
        toast("Connected!")
      }).catch((walletError) => {
        toast.error(`Failed to connect: ${walletError.message}`)
      })
    })
  }, [])

  const connectWallet = async () => {
    try {
      if (active) return toast('Already connected')
      await activate(injected, walletError => {
        if (walletError.message.includes('user_canceled')) {
          return toast.error('Operation canceled, please refresh and try to reauthorize.')
        }
        toast.error(`Failed to connect: ${walletError.message}`)
      })
      setIsConncted(true);
    } catch (err) {
      setIsConncted(true);
      console.log(err)
      toast.error('Failed to connect Wallet.')
    }
  }

  const disconnect = () => {
    setIsConncted(false)
    deactivate()
  }

  return (
    <div className='header flex items-center'>
      <Toaster />
      {isConnected && !!account ? (
        <div className='flex items-center'>
          <Snippet type='success' key={account} style={{ margin: '0 12px' }} symbol='♦' >
            <span>{account.slice(0, 4)}</span>
            <span className='hidden'>{account.slice(4, -4)}</span>
            <span className='inline-flex mx-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </span>
            <span>{account.slice(-4)}</span>
          </Snippet>
          <Button auto onClick={disconnect}>
            Disconnect
          </Button>
        </div>
      ) : (
        <Button type='secondary-light' auto onClick={connectWallet}>
          Connect wallet
        </Button>
      )}
      <style jsx>
        {`
          .header {
            padding: 16px;
            justify-content: flex-end;
          }
        `}
      </style>
    </div>
  )
}

export default Connector
