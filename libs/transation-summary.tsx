import React from "react";
import { Grid } from '@geist-ui/react'
import { PendingTransaction } from '../constants'
import { formatEthAddress, formatBalance } from '../utils'

interface TransactionSummaryProps {
  tx:  PendingTransaction
}

const TransactionSummary = ({ tx }: TransactionSummaryProps) => (
  <div className='tx-summary'>
    <div className='tx-summary__prop nonce'>
      <div>Nonce</div>
      <div>{tx.nonce}</div>
    </div>
    <div className='tx-summary__prop'>
      <div>To</div>
      <div>{formatEthAddress(tx.to!)}</div>
    </div>
    <div className='tx-summary__prop'>
      <div>Amount</div>
      <div>{formatBalance(tx.value)}</div>
    </div>
    <div className='tx-summary__prop'>
      <div>Gas Limit(Units)</div>
      <div>{tx.gasLimit.toNumber()}</div>
    </div>
    <div className='tx-summary__prop'>
      <div>Hash</div>
      <div>{formatEthAddress(tx.hash)}</div>
    </div>
    <style jsx>{`
        .tx-summary {
          margin: 12px 0;
          padding: 8px 0;
          border-radius: 4px;
        }

        .tx-summary:hover {
          background: #EAEAEA;
        }

        .tx-summary__prop {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8em;
        }

        .tx-summary__prop > div:first-child {
          font-weight: bold;
        }

        .nonce {
          font-size: 1em;
          font-weight: bold;
          color: #F5A623;
        }
      `}</style>
  </div>
)

export default TransactionSummary;