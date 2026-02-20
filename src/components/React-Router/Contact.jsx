import React from 'react'

const Contact = () => {
  return (
      <>
          <div className="flex flex-col  text-white justify-center items-center mt-1 ">
              <h3>Contact Us</h3>
              <form className='m-1'>
                  <div>
                      <label>Name:</label>
                      <input type="text" placeholder='Enter you Name' className='border p-1 m-0.5 rounded-xl'/>
                  </div>
                  <div>
                      <label>Email:</label>
                      <input type="text" placeholder='Enter you Email' className='border p-1 m-0.5 rounded-xl'/>
                  </div>
                  <div>
                      <label>Phone No:</label>
                      <input type="text" placeholder='Enter you Phone No.' className='border p-1 m-0.5 rounded-xl'/>
                  </div>
                  <div>
                      <label>Your Message:</label>
                      <textarea className='border mt-1 rounded p-1' placeholder='Your query'></textarea>
                  </div>
                  <button className='border rounded-xl p-2 m-2 w-3/6 cursor-pointer'>Send</button>
                </form>
              
            </div>
      </>
  )
}

export default Contact