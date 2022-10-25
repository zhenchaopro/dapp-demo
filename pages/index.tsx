import React from 'react'
import Connector from '../libs/connector'
import Transfer from 'libs/transfer'

const Index: React.FC<unknown> = () => {
  return (
    <div className=''>
      <Connector />
      <Transfer />
      <style jsx>{`
        :global(.home main) {
          padding-top: 0;
        }

        :global(.flex) {
          display: flex;
        }

        :global(.justify-between) {
          justify-content: space-between;
        }

        :global(.items-center) {
          align-items: item-center;
        }

        :global(.gap-2) {
          gap: 8px;
        }
      `}</style>
    </div>
  )
}

export default Index
