import React, { useState } from 'react'

const UseState = () => {
    const [count,setCount]=useState(0)
  return (
      <>
          <div className='border border-white rounded-xs p-4 m-4 w-xl text-white'>
              <p><strong>State:</strong>It is Built in object used for  store components specific memory</p>
              <p>For Managing state in react we used <strong>useState hook</strong></p>
              <p>Create a Counter using <strong>useState</strong></p>
              <p>Counter value:{count}</p>
              <p>Click the button to increment value of Counter</p>
              <button className='bg-blue-500 border px-2 m-0.5 rounded hover:text-cyan-500 cursor-pointer' onClick={()=>setCount(count+1)}>Increment</button>
              <button className='bg-blue-500 border px-2 m-0.5 rounded hover:text-cyan-500 cursor-pointer' onClick={()=>setCount(count-1)}>Decrement</button>
              <button className='bg-blue-500 border px-2 m-0.5 rounded hover:text-cyan-500 cursor-pointer' onClick={()=>setCount(0)}>Reset</button>
          </div>
      </>
  )
}

export default UseState