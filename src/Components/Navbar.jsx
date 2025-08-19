import React from 'react'
import logo from '../assets/images/logo.png'
const Navbar = () => {
  return (
    <>

    <nav id='Navbar'>
      <div className="container">
        <div className="manu_row">
          <div className="logoImg">
            <img src={logo} alt="" />
          </div>
          <div className="items"></div>
          <div className="boxButton"></div>
        </div>
      </div>
    </nav>

    </>
  )
}

export default Navbar