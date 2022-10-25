import { ethers } from 'ethers'
import {
  formatEthAddress,
  formatBalance,
  isValidURL,
  isValidRpcURL,
  numberToChainID
} from './utils'

describe('formatEthAddress', () => {
  test('returns address with three dot in the middle', () => {
    let address = '0x77D89FF4b6bc52057d6116F4928072018Ee6f36E'
    expect(formatEthAddress(address)).toEqual('0x77...f36E')
  })
})

describe('formatBalance', () => {
  test('returns specified length', () => {
    expect(formatBalance(ethers.BigNumber.from('120000000000000000'))).toEqual(
      '0.12'
    )
    expect(
      formatBalance(ethers.BigNumber.from('124560000000000000'), 6)
    ).toEqual('0.12456')
    expect(
      formatBalance(ethers.BigNumber.from('124560000000000000'), 5)
    ).toEqual('0.12456')
    expect(
      formatBalance(ethers.BigNumber.from('124560000000000000'), 4)
    ).toEqual('0.1245')
    expect(
      formatBalance(ethers.BigNumber.from('124560000000000000'), 2)
    ).toEqual('0.12')
  })
})

describe('isValidURL', () => {
  test('check a string is url or not', () => {
    expect(isValidURL('/abc')).toBeFalsy()
    expect(isValidURL('abc.com')).toBeFalsy()
    expect(isValidURL('abc.com', [])).toBeFalsy()
    expect(isValidURL('tcp://abc.com')).toBeTruthy()
    expect(isValidURL('tcp://abc.com', 'tcp')).toBeTruthy()
    expect(isValidURL('tcp://abc.com', 'http')).toBeFalsy()
    expect(isValidURL('tcp://abc.com', 'https')).toBeFalsy()
    expect(isValidURL('http://www.abc.com', 'http')).toBeTruthy()
    expect(isValidURL('http://www.abc.com/page/faq', 'http')).toBeTruthy()
    expect(isValidURL('http://www.abc.com/page/faq.html', 'http')).toBeTruthy()
    expect(isValidURL('http://www.abc.com/page/faq.html', 'https')).toBeFalsy()
    expect(
      isValidURL('https://www.abc.com/page/faq.html', 'https')
    ).toBeTruthy()
    expect(
      isValidURL('https://www.abc.com/page/faq.html', ['https'])
    ).toBeTruthy()
    expect(
      isValidURL('https://www.abc.com/page/faq.html', ['tcp', 'https'])
    ).toBeTruthy()
    expect(
      isValidURL('https://www.abc.com/page/faq.html', ['http'])
    ).toBeFalsy()
  })
})

describe('isValidRpcURL', () => {
  test('accept url with http and https protocol', () => {
    expect(isValidRpcURL('tcp://abc.com/rpc')).toBeFalsy()
    expect(isValidRpcURL('http://abc.com/rpc')).toBeTruthy()
    expect(isValidRpcURL('https://abc.com/page/faq')).toBeTruthy()
  })
})

describe('numberToChainID', () => {
  test('convert a number to accepteable chain ID by wallet_addEthereumChain', () => {
    expect(numberToChainID(5)).toEqual('0x5')
    expect(numberToChainID(15)).toEqual('0xf')
    expect(numberToChainID(20)).toEqual('0x14')
  })
})
