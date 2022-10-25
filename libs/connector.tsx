import React, { useState, useEffect, useMemo } from 'react'
import { Snippet, Grid, Button, Description, Spacer, Text } from '@geist-ui/react'
import { InjectedConnector } from '@web3-react/injected-connector'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { formatBalance, formatEthAddress } from '../utils'
import { BigNumber } from 'ethers'
import { disconnect } from 'process'

const injected = new InjectedConnector()

const BIG_NUBMER_ZERO = BigNumber.from(0)

const Connector: React.FC<unknown> = () => {
  const { activate, active, account, library, deactivate } = useWeb3React<Web3Provider>()
  const [isConnected, setIsConncted] = useState<boolean>(false)
  const [balance, setBalance] = useState<BigNumber>(BIG_NUBMER_ZERO)

  useEffect(() => {
    setIsConncted(active && !!account)
  }, [active, account])

  useEffect(() => {
    if (account) {
      library.getSigner().getBalance().then(b => setBalance(_ => b))
    }
  }, [account, library])

  const connectWallet = async () => {
    try {
      if (active) return alert('Already linked')
      await activate(injected, walletError => {
        if (walletError.message.includes('user_canceled')) {
          return alert('Operation canceled, please refresh and try to reauthorize.')
        }
        alert(`Failed to connect: ${walletError.message}`)
      })
    } catch (err) {
      console.log(err)
      alert('Failed to connect Wallet.')
    }
  }

  const disconnect = () => {
    setIsConncted(false);
    deactivate()
  }

  return (
    <div className='header flex items-center'>
      {isConnected ? (
        <div className='flex items-center'>
          <div className='balance'>{formatBalance(balance)}</div>
          <Snippet type="success" style={{ margin: '0 12px' }} symbol="♦">{formatEthAddress(account)}</Snippet>
          <Button auto onClick={disconnect}>
            Disconnect
          </Button>
        </div>
      ) : (
        <Button type="secondary-light" auto onClick={connectWallet}>
          Connect wallet
        </Button>
      )}
      <style jsx>{`
      .header {
      padding: 16px;
      justify-content: flex-end;
      }

      .balance {
        display: inline-flex;
        align-items: center;
      }
      `}
      </style>
    </div>
  )
}

export default Connector
