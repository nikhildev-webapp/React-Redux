import React from 'react'

const AxiosIntro = () => {
  return (
      <>
          <div className="container text-white p-3 m-1">
              <h3 className='font-bold text-xl'>Axios Introduction:</h3>
              <h3><strong>Axios:</strong> Axios is a popular, open-source javascript library used to make HTTP requeste from both web browser and node.js environments.</h3>
              <p>Its acts as a bridge beyween a client and a server, allowing you to fetch, send, uodate or delere data via RESTful APIs.</p>
              <ul className='list-decimal ml-0.5'>
                  <h3 className='font-bold'>Key Features:</h3>
                  <li>Automatic JSON Tranformation</li>
                  <li>Promise-Based</li>
                  <li>Interceptor</li>
                  <li>Built in Error Handling</li>
                  <li>Request Cancellation</li>
              </ul>
              <p className='text-red-600 font-extrabold'>MiniProject-Fetch the Data from Public Api using Axios</p>
          </div> 
     </>
  )
}

export default AxiosIntro 