import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router'
const Navbar = () => {
const navItems = [
  {
    navContent: 'Home',
    navLinks: '/'
  },

  {
    navContent: 'About',
    navLinks: '/'
  },

  {
    navContent: 'Contact Us',
    navLinks: '/'
  },
]



  return (
    <>

    <nav id='Navbar'>
      <div className="container">
        <div className="manu_row">
          <div className="logoImg w-[155px] h-[140px]">
            <img src={logo} alt="" />
          </div>
          <div className="items">
            {
              navItems.map((item, i)=>(
                <Link key={i} className='text-xl font-normal text-primery font-family' to={item.navLinks}>{item.navContent}</Link>
              ))
            }
          </div>
          <div className="boxButton ">
            <button>Get in touch</button>
          </div>
        </div>
      </div>
    </nav>

    </>
  )
}

export default Navbar