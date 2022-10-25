import { ethers } from 'ethers'
import isArray from 'lodash/isArray'

export const formatEthAddress = (address: string) => {
  return address.slice(0, 4) + '...' + address.slice(-4)
}

export const formatBalance = (balance: ethers.BigNumber, digits: number = 4) => {
  return ethers.utils.formatEther(balance).slice(0, digits + 2)
}

export const isValidURL = (s: string, protocols: string | string[] = []) => {
  if (!s.length) {
    return false
  }

  let url
  try {
    url = new URL(s)
  } catch (e) {
    return false
  }

  const protocol = url.protocol.slice(0, -1)
  if (isArray(protocols)) {
    if (!protocols.length) {
      return true
    } else {
      return protocols.includes(protocol)
    }
  }

  return protocol === protocols
}

export const isValidRpcURL = (s: string) => {
  return isValidURL(s, ['http', 'https'])
}

export const numberToChainID = (n: number): string => {
  return `0x${Number(n).toString(16)}`
}
