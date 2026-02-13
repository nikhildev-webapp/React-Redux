import React from 'react'

const IntroProps = ({name,age,profession}) => {
  return (
      <>
          <div className='border border-white w-xl text-white rounded p-4 m-4'>
              <p><strong>Props:</strong>Are the properties or data passed as argument in react components</p>
              <p><strong>Example of Props:</strong>Create a userProfile and passed data as a props</p>
              <div className='border rounded border-white p-4 m-0.5'>
              <h3>UserName:{name}</h3>
              <h3>Age:{age}</h3>
              <h3>Profession:{profession}</h3>
              </div>
</div>
      </>
  )
}

export default IntroProps