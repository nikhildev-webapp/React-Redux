import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UserList = () => {
    const [Users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users')
                setUsers(response.data);
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])
    if (loading) return <p className='text-white font-bold text-xl'>Loading...</p>
    if(error) return <p className="text-red-600 font-semibold">Error:{error}</p>
  return (
      <>
          <div className="container text-white p-2 m-1">
              <ul className='list-none'>
                  <h3 className="font-bold">Users List:</h3>
                  <div className="flex flex-col md:flex-row">
                      {Users.map((user) => (
                          <div className="border p-4 rounded-xl m-1.5 w-auto" key={user.id}>
                 
                              <li key={user.id}>{user.name}</li>
              </div>
                      ))}</div>
                  
                  </ul>
              
        </div>
      </>
  )
}

export default UserList