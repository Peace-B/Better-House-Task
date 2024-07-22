import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/Group 9282 (1).png'
import hamburger from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'
import "../css/SideNav.css"

const SideNav = () => {
  const [menu, setMenu] = useState(false)

  let menuRef = useRef();

  useEffect(()=>{
    document.addEventListener('mousedown', (event)=>{
      if(!menuRef.current.contains(event.target)){
        setMenu(false)
      }
    })
  })

 console.log(menu);
  return (
    <div className='sidebar' ref={menuRef}>
      <div className="left-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu">
        <div className="img-side" onClick={()=>{
          setMenu(!menu)
        }}>
          {menu ? (<img src={close} alt="" className='open'/>) : (<img src={hamburger} alt="" className='close' />)}
        
        
        </div>
       {menu ?  (<div className="side">
        <ul>
          <Link to='/' style={{textDecoration:"none"}}>
            <div className="side-btn">
              <li>Home</li>
            </div>
          </Link>
          <Link to='/' style={{textDecoration:"none"}}>
            <div className="side-btn">
              <li>About</li>
            </div>
          </Link>
          <Link to='/' style={{textDecoration:"none"}}>
            <div className="side-btn">
              <li>Properties</li>
            </div>
          </Link>
          <Link to='/' style={{textDecoration:"none"}}>
            <div className="side-btn">
              <li>Contact Us</li>
            </div>
          </Link>
        </ul>
      </div>) :
      
    (<div className=""></div> )}
       
      </div>

      
    </div>
  )
}

export default SideNav