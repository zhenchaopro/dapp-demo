import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { isValidRpcURL, isValidURL, numberToChainID } from '../utils'
import { CHAIN_ID_MAX, ChainInfo } from '../constants'
import toast from 'react-hot-toast'

export type NewNetworkPayload = {
  name: string
  rpcUrl: string
  chainId: number
  currencySymbol: string
  currencyDecimals: string
  blockExploreUrl?: string
}

interface NewNetworkProps {
  onCancel: () => void
  onSubmit: (payload: NewNetworkPayload) => Promise<any>
}

const CURRENCY_SYMBOL_MESSAGE =
  'Currency symbol should be a string of 2 to 6 chars'

export const payloadToChainInfo = (payload: NewNetworkPayload): ChainInfo => {
  return {
    chainId: numberToChainID(payload.chainId),
    chainName: payload.name,
    nativeCurrency: {
      symbol: payload.currencySymbol,
      decimals: parseInt(payload.currencyDecimals),
    },
    rpcUrls: [payload.rpcUrl],
    blockExplorerUrls: payload.blockExploreUrl ? [payload.blockExploreUrl] : [],
  }
}

export default function AddNetwork(props: NewNetworkProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewNetworkPayload>({
    mode: 'all',
  })

  const saveNetwork: SubmitHandler<NewNetworkPayload> = (payload) => {
    return props.onSubmit(payload).then((_) => {
      props.onCancel()
      // 切换网络之后刷新页面
      window.location.reload()
    })
  }

  return (
    <div className='add-network-container text-sm'>
      <h1 className='text-xl'>Add a network manually</h1>
      <form onSubmit={handleSubmit(saveNetwork)}>
        <div className='form-item'>
          <div className='form-item__label'>
            <label htmlFor='name'>Network name</label>
          </div>
          <input
            id='name'
            type='text'
            {...register('name', {
              required: 'Please enter network name',
              minLength: {
                value: 1,
                message: 'At lease one character.',
              },
              maxLength: {
                value: 30,
                message: 'Should be less than 30 characters.',
              },
            })}
          />
          {errors.name && (
            <div className='form-item__error'>{errors.name.message}</div>
          )}
        </div>
        <div className='form-item'>
          <div className='form-item__label'>
            <label htmlFor='rpcUrl'>RPC URL</label>
          </div>
          <input
            id='rpcUrl'
            type='text'
            {...register('rpcUrl', {
              required: 'Please enter RPC URL',
              validate: {
                isValidRpcURL: (s) =>
                  isValidRpcURL(s) || 'Please enter a valid RPC URL.',
              },
            })}
          />
          {errors.rpcUrl && (
            <div className='form-item__error'>{errors.rpcUrl.message}</div>
          )}
        </div>
        <div className='form-item'>
          <div className='form-item__label'>
            <label htmlFor='chainId'>Chain ID</label>
          </div>
          <input
            id='chainId'
            type='number'
            {...register('chainId', {
              required: 'Please enter Chain ID',
              min: {
                value: 0,
                message: 'Chain ID should be greater than zero.',
              },
              max: {
                value: CHAIN_ID_MAX,
                message: 'Chain ID is too large.',
              },
            })}
          />
          {errors.chainId && (
            <div className='form-item__error'>{errors.chainId.message}</div>
          )}
        </div>
        <div className='form-item'>
          <div className='form-item__label'>
            <label htmlFor='currencySymbol'>Currency symbol</label>
          </div>
          <input
            id='currencySymbol'
            type='text'
            {...register('currencySymbol', {
              required: 'Please enter currency symbol',
              minLength: {
                value: 2,
                message: CURRENCY_SYMBOL_MESSAGE,
              },
              maxLength: {
                value: 6,
                message: CURRENCY_SYMBOL_MESSAGE,
              },
            })}
          />
          {errors.currencySymbol && (
            <div className='form-item__error'>
              {errors.currencySymbol.message}
            </div>
          )}
        </div>
        <div className='form-item'>
          <div className='form-item__label'>
            <label htmlFor='currencyDecimals'>Currency decimals</label>
          </div>
          <input
            id='currencySymbol'
            type='number'
            {...register('currencyDecimals', {
              required: 'Please enter currency decimals',
              min: {
                value: 1,
                message: 'Should be greater than 1',
              },
              max: {
                value: 100,
                message: 'Should be less than 100',
              },
            })}
          />
          {errors.currencyDecimals && (
            <div className='form-item__error'>
              {errors.currencyDecimals.message}
            </div>
          )}
        </div>
        <div className='form-item'>
          <div className='form-item__label'>
            <label htmlFor='blockExploreUrl'>
              Block explorer URL
              <span className='font-normal text-gray-700 ml-1'>(Optional)</span>
            </label>
          </div>
          <input
            id='blockExploreUrl'
            type='text'
            {...register('blockExploreUrl', {
              validate: {
                isValidURL: (s) =>
                  (s && isValidURL(s)) ||
                  'Plase enter a valid block explorer URL.',
              },
            })}
          />
          {errors.blockExploreUrl && (
            <div className='form-item__error'>
              {errors.blockExploreUrl.message}
            </div>
          )}
        </div>
        <div className='form-item flex justify-between gap-2'>
          <button
            type='button'
            className='flex-1 border rounded-lg border-blue-600 text-blue-600 px-4 py-2 hover:bg-blue-200'
            onClick={props.onCancel}
          >
            Cancel
          </button>
          <button
            className='flex-1 border rounded-lg bg-blue-600 text-white px-4 py-2 hover:bg-blue-800'
            type='submit'
          >
            Save network
          </button>
        </div>
      </form>
    </div>
  )
}

