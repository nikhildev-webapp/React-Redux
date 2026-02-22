import React, { useState } from 'react'

const TypeInput = () => {
    const [text, setText] = useState('')
    const handleChange = (e) => {
        setText(e.target.value)
    }
  return (
      <>
          <div className="container text-white p-4 ">
              <h3 className='font-bold text-lg'>Input Tracker</h3>
              <p>Type In the Input and show the Real time result</p>
              <input type="text" id="type" value={text} onChange={handleChange} placeholder='Type Here...' className='border rounded-xl p-2 m-0.5' />
              <p>Your typed text: <span className='text-cyan-800'>{text}</span></p>
            </div>
      </>
  )
}

export default TypeInput