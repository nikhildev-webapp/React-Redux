import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    
    const decrement = () => {
        setCount(count-1)
    }

    const reset = () => {
        setCount(0)
    }
  return (
      <>
          <div className="text-white p-4 m-3 ">
              <h3>Counter</h3>
              <p>CountValue:{count}</p>
              <p>Click the button to change the value of count</p>
              <button className='border rounded-xl p-3 cursor-pointer m-1 ' onClick={increment}>+</button>
              <button className='border rounded-xl p-3 cursor-pointer m-1 ' onClick={decrement}>-</button>
              <button className='border rounded-xl p-3 cursor-pointer m-1 ' onClick={reset}>Reset</button>
            </div>
      </>
  )
}

export default Counter