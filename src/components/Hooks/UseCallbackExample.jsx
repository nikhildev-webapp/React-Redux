import React, { memo, useCallback, useState } from 'react'
const Child = memo(({ onClick }) => {
    console.log('button Clikced')
    return <button className='border p-1 rounded' onClick={onClick}>Click</button>
})
    
const UseCallbackExample = () => {
    const [count, setCount] = useState(0);
    const handleClick = useCallback(() => {
        console.log('Clicked');
    })
  return (
      <>
          <div className=" container  p-2  m-0.5 text-white">
              <h3 className="font-bold">Mini Project-Counter</h3>
              <h3 className="font-bold">Creating FifthMini Project using useCallback.</h3>
              <h3>Count:{count}</h3>
              <button className='border rounded p-1 m-0.5' onClick={() => setCount(count + 1)}>+</button>
              <Child onClick={handleClick}/>
         </div>
      </>
  )
}

export default UseCallbackExample