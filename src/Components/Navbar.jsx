import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router'
import { IoMdArrowDropup } from "react-icons/io";


const Navbar = () => {
const navItems = [
  {
    navContent: 'Home',
    navLinks: '/',
  },
{
    navContent: 'About',
    navLinks: '/'
  },

  {
    navContent: 'Contact Us',
    navLinks: '/',
    Dropdown:[
      {
        dropdownContent: 'Contact Us details',
        dropdownLinks: '/'
      },
      {
        dropdownContent: 'phone number',
        dropdownLinks: '/'
      },
      {
        dropdownContent: 'Contact us email',
        dropdownLinks: '/'
      },
    ]

  },
]




  return (
    <>

    <nav id='Navbar'>
      <div className="container">
        <div className="manu_row flex items-center justify-between  pt-[29px]">
          <div className="logoImg w-[155px] h-[40px]">
            <img src={logo} alt="picture" />
          </div>
          <div className="items flex gap-[35px]">
            {
              navItems.map((item, i)=>(
                  <ul>
                    <li className='relative'>
                    <Link  key={i} className='text-lg font-normal text-primery font-family' to={item.navLinks}>{item.navContent}</Link>

                    {item.Dropdown &&
                    <div className="dropdwnMenu w-[300px] p-3 rounded-[5px] bg-white absolute top-9">
                     <button className='text-2xl text-white absolute top-[-14px] left-5'><IoMdArrowDropup /></button>
                      <ul>
                      
                      return(
                        {
                          item.Dropdown.map((item , dp)=>{
                            <li key={dp}>
                              <Link to={item.dropdownLinks}>{item.dropdownContent}</Link>
                            </li>
                          })
                        }

                      );
                      </ul>
                    </div>
                    }
                    </li>
                  </ul>
              ))
            }
          </div>
          <div className="boxButton w-[140px] h-[47px] font-family bg-[#FBFBFB] text-[#0C0C0C] rounded-[23px] flex justify-center text-lg font-normal hover:bg-black hover:text-white transition-all duration-300 ease-in-out items-center">
            <button className=''>Get in touch</button>
          </div>
        </div>
      </div>
    </nav>

    </>
  )
}

export default Navbar