import React, { useEffect, useRef } from 'react'

const FocusInput = () => {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();  
    })
  return (
      <>
        <div className="container text-white p-2 m-0.5">
            <h3 className='font-bold'>Mini Project-AutoF-Focus-input</h3>      
              <h3 className='font-bold'>Creating ThirdMini Project using useRef.</h3>   
            <input type="text" ref={inputRef} placeholder='Auto focus input' className='border rounded p-1'/>  
        </div>
      </>
  )
}

export default FocusInput