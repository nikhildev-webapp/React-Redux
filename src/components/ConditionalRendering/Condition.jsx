import React, { useState } from 'react'
import { use } from 'react'

const Condition = () => {
    const [IsActive, setIsActive] = useState(true);
  return (
      <>
          <div className="border border-white text-white p-4 m-4 w-xl">
              <p><strong>Conditional Rendering:</strong>the process of displaying different UI elements or components based on specific conditions, such as user authentication, loading states, or data availability</p>  
              <p><strong>Example:</strong>Render greeting messgae according to user activity.</p>
              
              {IsActive ? (
                  <div className='border rounded p-1 gap-0'>
                    <h4>Message For USer:</h4>
                    <span className='text-cyan-500'>Hy WelcomeBack!</span>
              </div>
              ) : ( 
             <div className='border rounded p-1 gap-0'>
                  <h4>Message For USer:</h4>
                  <span className='text-red-700'>Meet me tommorow</span>
              </div>
              )}
              
         </div>
    </>
  )
}

export default Condition