import React from 'react'
import MenuAppBar from '../Navbar/Navbar'
import "./layout.css"


const Layout = ({children}) => {
  return (
    <div>
      <div><MenuAppBar/></div>
        <div className='layoutContainer'>{children}</div>
    </div>
  )
}

export default Layout