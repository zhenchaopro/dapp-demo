import { BigNumber } from "ethers"
import { TransactionResponse } from '@ethersproject/abstract-provider'

export interface NativeCurrency {
  name?: string
  symbol: string
  decimals?: number
}

export interface Network {
  chainId: number
  chainName: string
  nativeCurrency: NativeCurrency
  rpcUrls: string[]
  blockExplorerUrls: string[]
}

export interface Networks {
  [key: number]: any
}

export interface ChainInfo {
  chainId: string,
  chainName: string
  nativeCurrency: NativeCurrency
  rpcUrls: string[]
  blockExplorerUrls: string[]
}

export type ImTokenTransactionPayload = {
  from: string,
  to: string,
  value: BigNumber,
  nonce: string,
  maxFeePerGas: BigNumber,
  maxPriorityFeePerGas: BigNumber,
  gasLimit: BigNumber,
  hash?: string,
}


export type PendingTransaction = TransactionResponse | ImTokenTransactionPayload

export const BUILTIN_NETWORKS = [
  {
    chainId: 1,
    chainName: 'Ethereum main network',
    nativeCurrency: {
      symbol: 'ETH',
      decimals: 8,
    },
    rpcUrls: ['https://mainnet.infura.io/v3/c4075c0c4d044d7ab858b17f97c6b209'],
    blockExplorerUrls: ['https://etherscan.io'],
  },
  {
    chainId: 5,
    chainName: 'Goerli test network',
    nativeCurrency: {
      symbol: 'GeerliETH',
      decimals: 18,
    },
    rpcUrls: ['https://goerli.infura.io/v3/c4075c0c4d044d7ab858b17f97c6b209'],
    blockExplorerUrls: ['https://goerli.etherscan.io'],
  },
  {
    chainId: 56,
    chainName: 'Binance Smart Chain',
    nativeCurrency: {
      symbol: 'BNB',
      decimals: 8,
    },
    rpcUrls: ['https://goerli.infura.io/v3/c4075c0c4d044d7ab858b17f97c6b209'],
    blockExplorerUrls: ['https://goerli.etherscan.io'],
  },
  {
    chainId: 57,
    chainName: 'BSCCOPY',
    nativeCurrency: {
      symbol: 'BNB',
      decimals: 8,
    },
    rpcUrls: ['https://goerli.infura.io/v3/c4075c0c4d044d7ab858b17f97c6b209'],
    blockExplorerUrls: ['https://goerli.etherscan.io'],
  },
  {
    chainId: 10,
    chainName: 'Optimism',
    nativeCurrency: {
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://mainnet.optimism.io/'],
    blockExplorerUrls: ['https://optimistic.etherscan.io'],
  },
  {
    chainId: 10899999,
    chainName: 'NonExist Network',
    nativeCurrency: {
      symbol: 'NonExistNetwork',
      decimals: 18,
    },
    rpcUrls: ['https://mainnet.infura.io/v3/c4075c0c4d044d7ab858b17f97c6b209'],
    blockExplorerUrls: ['https://etherscan.io/'],
  },
]

// TODO: get the exact definition of the chain ID
// ??? https://github.com/ethereum/EIPs/issues/2294
export const CHAIN_ID_MAX = 18446744073709551616; // 2^64
