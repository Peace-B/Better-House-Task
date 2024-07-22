import React from 'react'
import NavBar from "../component/NavBar"
import Blog from './Blog'
import Footer from './Footer'
import "../css/Hero.css"
import SideNav from './SideNav'

const Hero = () => {
  return (
    <>
    <div className='hero w-full h-full '>
        <NavBar/>
        <SideNav/>
        <div className="main-hero w-full h-screen xl:mt-44 xl:h-full flex flex-col gap-16 ">
           <div className="header pt-20 xl:w-4/5 xl:m-auto text-center flex flex-col gap-6 xl:pt-0">
            <h1 className='hero-head font-[black] text-xl xl:text-7xl text-white xl:font-bold xl:p-0'>Browse Our Properties</h1>
            <p className='hero-para text-2xl xl:font-normal xl:text-2xl text-white '>Find your perfect home among our curated properties. Start <br /> browsing now!</p>
           </div>

           <div className="hero-info w-4/5 h-full m-auto xl:w-4/5 xl:h-36 xl:grid xl:grid-cols-4 xl:p-4 xl:m-auto xl:place-content-center xl:backdrop-blur-sm xl:bg-white/20 mb-4">
            <div className="one flex flex-col bg-white text-black h-20 justify-center items-center rounded-s-md border">
                <h4>LOCATION</h4>
                <p className='para xl:text-sm'>eg. Gbagada</p>
            </div>

            <div className="two flex flex-col bg-white text-black h-20 justify-center items-center border">
                <h4>PROPERTY TYPE</h4>
                <p className='para text-sm'>eg. Duplex, Bedroom Flat</p>
            </div>

            <div className="three flex flex-col bg-white text-black h-20 justify-center items-center">
                <h4 className='mb-1'>BEDROOM</h4>
                <div className="yea flex gap-8">
                    <p style={{height: "23px", width: '20px', border: "1px solid black", borderRadius: "50%",  display: 'flex', justifyContent: "center", alignItems: "center"}}>-</p>
                    <p>0</p>
                    <small style={{ height: "23px", width: '20px', border: "1px solid black", borderRadius: "50%", display: 'flex', justifyContent: "center", alignItems: "center"}}>+</small>
                </div>
            </div>

            <div className="four h-20 flex justify-center items-center text-white bg-emerald-500 rounded-e-md">
                <p className='para text-sm'>Find Property</p>
            </div>
           </div>
        </div>
    </div>
    <Blog/>
    <Footer/>
    </>
  )
}
export default Hero