import React from 'react'
import { Link,  Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
      <>
          <div className="container  text-white p-3 m-3 border rounded-xl w-auto ">
              <nav className='flex  justify-around flex-col md:flex-row '>
                  <Link to='/'>ReactIntro</Link>
                  <Link to='/about'>About</Link>
                  <Link to='/contact'>Contact</Link>
              </nav>
          </div>
          <div className="container">
              <Outlet/>
          </div>
      </>
  )
}

export default Navbar