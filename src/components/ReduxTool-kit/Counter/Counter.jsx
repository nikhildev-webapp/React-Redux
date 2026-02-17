import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './counterSlice';

const Counter = () => {
    const count = useSelector(state => state.Counter.value);
    const dispatch = useDispatch();

  return (
      <>
          <div className="container p-2 m-0.5">
          <h3 className="text-white">Counter Value:{count}</h3>
          <button className='border text-white rounded p-2 m-0.5' onClick={()=>dispatch(increment())}>+</button>
          <button className='border text-white rounded p-2 m-0.5' onClick={()=>dispatch(decrement())}>-</button>
          <button className='border text-white rounded p-2 m-0.5' onClick={()=>dispatch(reset())}>Reset</button>
          </div>
      </>
  )
}

export default Counter