import React from 'react'
import Logo from "../images/Group 9282 (1).png"

const Footer = () => {
  return (
    <>
     <div className="footer-main h-screen w-full bg-green-900 lg:h-96">
        <ul className="section text-white items-center lg:flex justify-center lg:gap-x-36 lg:mt-32 lg:pt-5">
          <li className='first flex flex-col lg:items-start gap-2'>
            <img src={Logo} alt="" />
            <p>Discover, rent, and find your ideal home hassle-free <br />with BetaHouse. Take control of your rental journey today!</p>
            <div className="contact-add">
            <p>95 Tinubu Estate, Lekki, Lagos</p>
          </div>
        <div className="contact-no">
            <p>+234 675 8935 675</p>
        </div>

        <div className="msg">
            <p>support@rentbetahouse.com</p>
        </div>
        </li>  

        <li className='l-One flex flex-col gap-2'>
            <h1 className='footer-header font-semibold text-2xl'>Quick Links</h1>
            <a href="">Home</a>
            <a href="">Properties</a>
            <a href="">About</a>
            <a href="">Contact Us</a>
            <a href="">Blog</a>
        </li>

        <li className='l-One flex flex-col gap-2'>
            <h1 className='footer-header font-semibold text-2xl'>More</h1>
            <a href="">Agents</a>
            <a href="">Affordable Houses</a>
            <a href="">FAQ's</a>
        </li>

        <li className='l-One flex flex-col gap-2'>
            <h1 className='footer-header font-semibold text-2xl'>Popular Search</h1>
            <a href="">Appartment for Sale</a>
            <a href="">Appartment for Rent</a>
            <a href="">Three Bedroom Flat</a>
            <a href="">Bungalow</a>
        </li>
        </ul>

        <div className="footerLin mt-16 mb-8 text-gray-100">
        <hr />
        </div>
        <div className="last text-white flex justify-between w-10/12 h-7 m-auto pb-3.5">
            <p>Copyright 2023 Betahouse | Designed by Peace.B</p>
            <a href="">Privacy Policy</a>
        </div>
        </div>   
    </>
  )
}

export default Footer