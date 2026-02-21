import React from 'react'

const ProfileCard = ({name,age,education,profession,quote}) => {
  return (
      <>
          <div className="container text-white border rounded-xl p-4 m-4 w-sm ">
              <h3 className="font-bold text-center text-lg">Profile Card</h3>
              <h3>Name:{name}</h3>
              <h3>Age:{age}</h3>
              <h3>Education:{education}</h3>
              <h3>Profession:{profession}</h3>
              <h3>Quote of the Day:{quote}</h3>
          </div>    
      </>
  )
}

export default ProfileCard