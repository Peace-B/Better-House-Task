import React from 'react'
import "../css/NavBar.css"
import Logo from "../images/Group 9282 (1).png"
import ProImg from "../images/Ellipse 8.png"
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import { useAuth } from '../context/Auth'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

  const { auth, logout } = useAuth();
  const navigate = useNavigate();


  const handleLogout = () => {
    logout();
    navigate("/");
  }; 
  return (
    <div className='nav-head md:block nav-body w-full h-28 backdrop-blur'>
      <nav className='nav-list w-4/5 flex justify-between items-center m-auto pt-6'>
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        <ul className='nav-li flex gap-9 text-lg font-medium text-white'>
          <li className='nav-border hover:border-b-2 border-white'>
            <Link to="/">Home</Link>
          </li>
          <li className='nav-border hover:border-b-2 border-white'>
            <Link to="/">About</Link>
          </li>
          <li className='nav-border hover:border-b-2 border-white'>
            <Link to="/">Properties</Link>
          </li>
          <li className='nav-border hover:border-b-2 border-white'>
            <Link to="/">Blog</Link>
          </li>
          <li className='nav-border hover:border-b-2 border-white'>
            <Link to="/">Contact Us</Link>
          </li>
        </ul>
        <div className="profile flex gap-1">
         <div className="">
          {auth.user? (
           <img src={ProImg} alt="" />
          ) : (
            <div className="bg-white">
            </div>
          )}
         </div>

          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {auth?.user ? auth.user.name : "My Account"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {!auth.user ? (
        <div className="">
          <Dropdown.Item>
        <Link to='/login'>Login</Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to='/signup'>SignUp</Link>
      </Dropdown.Item>
        </div>
        ) : (
          <div className="">
            <Dropdown.Item>
            <Link to="/">Profile</Link>
          </Dropdown.Item>
          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </div>
        )
      } 
      </Dropdown.Menu>
    </Dropdown>
        </div>
      </nav>
    </div>
  )
}

export default NavBar