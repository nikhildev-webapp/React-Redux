import React, { useState } from 'react'

export const SetLogin = () => {
    const[isActive,setIsActive]=useState(false)
  return (
      <>
          <div className="container text-white p-3 m-1">
              <h3 className="font-bold">Set The Login State based on user</h3>
              <p>If user active display 'Login' not active display 'logout'</p>
              {isActive ? (
                    <p className='text-green-500'>User Login</p>
              ) : (
                      <p className='text-red-600'>User Logout</p>
              )}   
        </div>
      </>
  )
}
