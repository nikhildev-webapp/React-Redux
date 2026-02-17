import React from 'react'

const ReduxIntro = () => {
  return (
      <>
      <div className="container text-white p-2 m-0.5">
        <h2 className='font-bold text-2xl'>Redux Tool Kit</h2>
        <p><strong>ReduxTool kit:</strong> is the Offical, modern way to write redux logic.It acts as a 'batteries included' toolset that simplifies store setup and eliminates the repetitive 'boilerplate' code required by Traditional redux.</p>
        <ul className='list-none'>
          <li><h3 className='font-bold'>Core Concepts:</h3></li>
          <li><strong>Stores:</strong>The single source of truth for your application state.</li>
          <li><strong>Slice:</strong>A Collection of Reduc redeucer logic and action for a single feature</li>
          <li><strong>Reducers:</strong>Function that determine how to state changes based on a action.</li>
          <li><strong>Actions:</strong>Object that describe 'what happened' in the app.</li>
        </ul>
        <p className='font-bold text-red-700'>Create a Counter Using the Redux Tool Kit:</p>
      </div>
      </>
  )
}

export default ReduxIntro