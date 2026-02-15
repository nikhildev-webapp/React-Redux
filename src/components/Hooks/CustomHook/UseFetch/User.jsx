import React from 'react'
import useFetch from './useFetch'

const User = () => {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users')
    if (loading) return <p className='text-white'>Loading...</p>
    if(error) return <p className="text-red-900">Error:{error}</p>
  return (
      <>
          <div className="conatiner text-white p-2 m-0.5">
              <h3 className="font-bold">CustomHook Project-useFetch</h3>
              <h3 className="font-bold">Fetch userNames From Api using useFetch CustomHook.</h3>
              <ul>
                  {data && data.map((user) => (
                      <li key={user.id}>{user.name}</li>
                  ))}
              </ul>
        </div>
      </>
  )
}

export default User