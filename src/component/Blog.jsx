import React from 'react'
import BlogImg from "../images/icon1.png"
import "../css/Blog.css"
import Vec from "../images/Vector (23)....png"
import BedImg from "../images/Vector (23).png"
import BathImg from "../images/Vector (24).png"
import ArrImg from "../images/Vector (30).png"
import Btot from "../images/Link (6).png"
import LoveI from "../images/Vector (25).png"
import Itwo from "../images/Icon (10).png"
import VideoIcon from "../images/Icon.png"
import ImageIcon from "../images/Icon (2).png"
import SignIcon1 from "../images/Vector (2B).png"
import SignIcon2 from "../images/Vector (24B).png"

const Blog = () => {
  return (
    <div>
        <div className="blog-main h-full w-full ">

            <div className="blog-header flex items-center justify-between pb-4 w-full md:justify-between md:w-4/5 md:h-12 md:items-center md:flex md:m-auto lg:w-4/5 lg:h-9 lg:flex lg:justify-between lg:items-center lg:m-auto lg:mb-4">
                <div className="right flex flex-col xl:flex xl:flex-row">
                   <div className="rignt-img flex gap-2">
                   <img src={BlogImg} alt="" />
                   <p>More filter</p>
                   </div>
                     <p>Showing 1-10 of 15 results</p>
                </div>
               <div className="left flex">
                <p>Sort By:</p>
                <select>
                    <option value="">default</option>
                    <option value="">default 1</option>
                    <option value="">Signup</option>
                </select>
               </div>
            </div>

            <div className="blog-body w-full mb-4">
                <ul className='card-list w-4/5 m-auto grid md:cols-2 lg:grid-cols-3 gap-8 '>
                    <li className='card shadow-md border-none'>
                        <div className="card-img flex flex-col gap-12">
                            <div className="top flex justify-between mt-2">
                                <p style={{backgroundColor: "#3D9970", padding: "8px", borderRadius: "2px", color: "white"}}>Featured</p>
                                <p style={{ padding: "8px", borderRadius: "2px", color: "white"}} className='gray-side backdrop-blur-xl bg-white/30'>for Sale</p>
                            </div>
                            <div className="bottom flex gap-10 justify-end">
                                <img src={Itwo} alt="" style={{ width: "30px", height: "30px", padding: "8px", borderRadius: "2px"}} className='gray-bottom bg-white/30'/>
                                <img src={VideoIcon} alt="" style={{ width: "30px", height: "30px", padding: "8px", borderRadius: "2px"}} className='gray-bottom bg-white/30'/>
                                <img src={ImageIcon} alt="" style={{ width: "30px", height: "30px", padding: "8px", borderRadius: "2px"}} className='gray-bottom bg-white/30'/>
                            </div>
                        </div>
                        <div className="card-content m-auto flex flex-col">
                        <h2 className='card-hea mt-2 mb-2 border-none '>Real House Luxury Villa</h2>
                        <div className="address flex items-center gap-2 mb-3">
                        <img src={Vec} alt="" /> 
                        <small>Victoria Island, Lagos</small>
                        </div>
                            <div className="room flex gap-8">
                                <div className="bed flex items-center gap-2">
                                   <img src={BedImg} alt="" />
                                   <small>6 Bedrooms</small>
                                </div>
                                <div className="bath flex items-center gap-2">
                                    <img src={BathImg} alt="" />
                                      <small>3 Bathrooms</small>
                                </div>
                            </div> 
                               <hr className='line mt-6 mb-6' />
                            <div className="amount flex justify-between items-center">
                            <h1>&#8358;3,340,000,000</h1>
                            <div className="images flex items-center gap-6">
                            <img src={ArrImg} alt="" className='specialIcon'/>
                            <img src={Btot} alt="" />
                            <img src={LoveI} alt="" />
                            </div>
                        </div>
                        </div>
                    </li>

                    <li className='card shadow-md border-none'>
                        <div className="card-img1 flex flex-col gap-12">
                            <div className="top flex justify-between mt-2">
                                <p style={{backgroundColor: "#3D9970", padding: "8px", borderRadius: "2px", color: "white"}}>Featured</p>
                                <p style={{ padding: "8px", borderRadius: "2px", color: "white"}} className='gray-side backdrop-blur-xl bg-gray-200/80'>for Rent</p>
                            </div>
                            <div className="bottom flex gap-10 justify-end">
                                <img src={Itwo} alt="" style={{ width: "30px", height: "30px", padding: "8px", borderRadius: "2px"}} className='gray-bottom bg-white/30'/>
                                <img src={VideoIcon} alt="" style={{ width: "30px", height: "30px", padding: "8px", borderRadius: "2px"}} className='gray-bottom bg-white/30'/>
                                <img src={ImageIcon} alt="" style={{ width: "30px", height: "30px", padding: "8px", borderRadius: "2px"}} className='gray-bottom bg-white/30'/>
                            </div>
                        </div>
                        <div className="card-content m-auto flex flex-col">
                        <h2 className='card-hea mt-2 mb-2 border-none '>Exquisite Haven Villa</h2>
                        <div className="address flex items-center gap-2 mb-3">
                        <img src={Vec} alt="" /> 
                        <small>Festac, Lagos</small>
                        </div>
                            <div className="room flex gap-8">
                                <div className="bed flex items-center gap-2">
                                   <img src={BedImg} alt="" />
                                   <small>5 Bedrooms</small>
                                </div>
                                <div className="bath flex items-center gap-2">
                                    <img src={BathImg} alt="" />
                                      <small>3 Bathrooms</small>
                                </div>
                            </div> 
                               <hr className='line mt-6 mb-6' />
                            <div className="amount flex justify-between items-center">
                            <h1>&#8358;4,000,000/1 Year</h1>
                            <div className="images flex items-center gap-6">
                            <img src={ArrImg} alt="" className='specialIcon'/>
                            <img src={Btot} alt="" />
                            <img src={LoveI} alt="" />
                            </div>
                        </div>
                        </div>
                    </li>

                    <li className='card shadow-md border-none'>
                        <div className="card-img2 flex flex-col gap-12">
                            <div className="top flex justify-between mt-2">
                                <p style={{backgroundColor: "#3D9970", padding: "8px", borderRadius: "2px", color: "white"}}>Featured</p>
                                <p style={{ padding: "8px", borderRadius: "2px", color: "white"}} className='gray-side backdrop-blur-sm bg-gray-400/20'>for Sale</p>
                            </div>
                            <div className="bottom flex gap-10 justify-end">
                                <img src={Itwo} alt="" style={{ width: "30px", height: "30px", padding: "8px", borderRadius: "2px"}} className='gray-bottom bg-white/30'/>
                                <img src={VideoIcon} alt="" style={{ width: "30px", height: "30px", padding: "8px", borderRadius: "2px"}} className='gray-bottom bg-white/30'/>
                                <img src={ImageIcon} alt="" style={{ width: "30px", height: "30px", padding: "8px", borderRadius: "2px"}} className='gray-bottom bg-white/30'/>
                            </div>
                        </div>
                        <div className="card-content m-auto flex flex-col">
                        <h2 className='card-hea mt-2 mb-2 border-none '>Luxe Palatial Villa</h2>
                        <div className="address flex items-center gap-2 mb-3">
                        <img src={Vec} alt="" /> 
                        <small>Gbagada, Lagos</small>
                        </div>
                            <div className="room flex gap-8">
                                <div className="bed flex items-center gap-2">
                                   <img src={BedImg} alt="" />
                                   <small>7 Bedrooms</small>
                                </div>
                                <div className="bath flex items-center gap-2">
                                    <img src={BathImg} alt="" />
                                      <small>3 Bathrooms</small>
                                </div>
                            </div> 
                               <hr className='line mt-6 mb-6' />
                            <div className="amount flex justify-between items-center">
                            <h1>&#8358;5,350,000,000</h1>
                            <div className="images flex items-center gap-6">
                            <img src={ArrImg} alt="" className='specialIcon'/>
                            <img src={Btot} alt="" />
                            <img src={LoveI} alt="" />
                            </div>
                        </div>
                        </div>
                    </li>

                    <li className='card shadow-md border-none'>
                        <div className="card-img3 flex flex-col gap-12">
                            <div className="top flex justify-between mt-2">
                                <p style={{backgroundColor: "#3D9970", padding: "8px", borderRadius: "2px", color: "white"}}>Featured</p>
                                <p style={{ padding: "8px", borderRadius: "2px", color: "white"}} className='gray-side backdrop-blur-sm bg-white/40'>for Sale</p>
                            </div>
                            <div className="bottom flex gap-10 justify-end">
                                <img src={Itwo} alt="" style={{ width: "30px", height: "30px", padding: "8px", borderRadius: "2px"}} className='gray-bottom bg-white/30'/>
                                <img src={VideoIcon} alt="" style={{ width: "30px", height: "30px", padding: "8px", borderRadius: "2px"}} className='gray-bottom bg-white/30'/>
                                <img src={ImageIcon} alt="" style={{ width: "30px", height: "30px", padding: "8px", borderRadius: "2px"}} className='gray-bottom bg-white/30'/>
                            </div>
                        </div>
                        <div className="card-content m-auto flex flex-col">
                        <h2 className='card-hea mt-2 mb-2 border-none '>Harmony Luxury Villa</h2>
                        <div className="address flex items-center gap-2 mb-3">
                        <img src={Vec} alt="" /> 
                        <small>Mushin, Lagos</small>
                        </div>
                            <div className="room flex gap-8">
                                <div className="bed flex items-center gap-2">
                                   <img src={BedImg} alt="" />
                                   <small>4 Bedrooms</small>
                                </div>
                                <div className="bath flex items-center gap-2">
                                    <img src={BathImg} alt="" />
                                      <small>3 Bathrooms</small>
                                </div>
                            </div> 
                               <hr className='line mt-6 mb-6' />
                            <div className="amount flex justify-between items-center">
                            <h1>&#8358;4,000,000/1 Year</h1>
                            <div className="images flex items-center gap-6">
                            <img src={ArrImg} alt="" className='specialIcon'/>
                            <img src={Btot} alt="" />
                            <img src={LoveI} alt="" />
                            </div>
                        </div>
                        </div>
                    </li>
                    <li className='card shadow-md border-none'>
                        <div className="card-img4 flex flex-col gap-12">
                            <div className="top flex justify-between mt-2">
                                <p style={{backgroundColor: "#3D9970", padding: "8px", borderRadius: "2px", color: "white"}}>Featured</p>
                                <p style={{ padding: "8px", borderRadius: "2px", color: "white"}} className='gray-side backdrop-blur-sm bg-white/40'>for Rent</p>
                            </div>
                            <div className="bottom flex gap-10 justify-end">
                                <img src={Itwo} alt="" style={{ width: "30px", height: "30px", padding: "8px", borderRadius: "2px"}} className='gray-bottom bg-white/30'/>
                                <img src={VideoIcon} alt="" style={{ width: "30px", height: "30px", padding: "8px", borderRadius: "2px"}} className='gray-bottom bg-white/30'/>
                                <img src={ImageIcon} alt="" style={{ width: "30px", height: "30px", padding: "8px", borderRadius: "2px"}} className='gray-bottom bg-white/30'/>
                            </div>
                        </div>
                        <div className="card-content m-auto flex flex-col">
                        <h2 className='card-hea mt-2 mb-2 border-none '>Real House Luxury Villa</h2>
                        <div className="address flex items-center gap-2 mb-3">
                        <img src={Vec} alt="" /> 
                        <small>Victoria Island, Lagos</small>
                        </div>
                            <div className="room flex gap-8">
                                <div className="bed flex items-center gap-2">
                                   <img src={BedImg} alt="" />
                                   <small>6 Bedrooms</small>
                                </div>
                                <div className="bath flex items-center gap-2">
                                    <img src={BathImg} alt="" />
                                      <small>3 Bathrooms</small>
                                </div>
                            </div> 
                               <hr className='line mt-6 mb-6' />
                            <div className="amount flex justify-between items-center">
                            <h1>&#8358;3,340,000,000</h1>
                            <div className="images flex items-center gap-6">
                            <img src={ArrImg} alt="" className='specialIcon'/>
                            <img src={Btot} alt="" />
                            <img src={LoveI} alt="" />
                            </div>
                        </div>
                        </div>
                    </li>

                    <li className='card shadow-md border-none'>
                        <div className="card-img5 flex flex-col gap-12">
                            <div className="top flex justify-between mt-2">
                                <p style={{backgroundColor: "#3D9970", padding: "8px", borderRadius: "2px", color: "white"}}>Featured</p>
                                <p style={{ padding: "8px", borderRadius: "2px", color: "white"}} className='gray-side backdrop-blur-sm bg-white/40'>for Sale</p>
                            </div>
                            <div className="bottom flex gap-10 justify-end">
                                <img src={Itwo} alt="" style={{ width: "30px", height: "30px", padding: "8px", borderRadius: "2px"}} className='gray-bottom bg-white/30'/>
                                <img src={VideoIcon} alt="" style={{ width: "30px", height: "30px", padding: "8px", borderRadius: "2px"}} className='gray-bottom bg-white/30'/>
                                <img src={ImageIcon} alt="" style={{ width: "30px", height: "30px", padding: "8px", borderRadius: "2px"}} className='gray-bottom bg-white/30'/>
                            </div>
                        </div>
                        <div className="card-content m-auto flex flex-col">
                        <h2 className='card-hea mt-2 mb-2 border-none '>Real House Luxury Villa</h2>
                        <div className="address flex items-center gap-2 mb-3">
                        <img src={Vec} alt="" /> 
                        <small>Lekki-Ajah, Lagos</small>
                        </div>
                            <div className="room flex gap-8">
                                <div className="bed flex items-center gap-2">
                                   <img src={BedImg} alt="" />
                                   <small>5 Bedrooms</small>
                                </div>
                                <div className="bath flex items-center gap-2">
                                    <img src={BathImg} alt="" />
                                      <small>3 Bathrooms</small>
                                </div>
                            </div> 
                               <hr className='line mt-6 mb-6' />
                            <div className="amount flex justify-between items-center">
                            <h1>&#8358;4,200,000/1 Year</h1>
                            <div className="images flex items-center gap-6">
                            <img src={ArrImg} alt="" className='specialIcon'/>
                            <img src={Btot} alt="" />
                            <img src={LoveI} alt="" />
                            </div>
                        </div>
                        </div>
                    </li>

                    <li className='card shadow-md border-none'>
                        <div className="card-img6 flex flex-col gap-12">
                            <div className="top flex justify-between mt-2">
                                <p style={{backgroundColor: "#3D9970", padding: "8px", borderRadius: "2px", color: "white"}}>Featured</p>
                                <p style={{ padding: "8px", borderRadius: "2px", color: "white"}} className='gray-side backdrop-blur-sm bg-gray-400/20'>for Sale</p>
                            </div>
                            <div className="bottom flex gap-10 justify-end">
                                <img src={Itwo} alt="" style={{ width: "30px", height: "30px", padding: "8px", borderRadius: "2px"}} className='gray-bottom bg-white/30'/>
                                <img src={VideoIcon} alt="" style={{ width: "30px", height: "30px", padding: "8px", borderRadius: "2px"}} className='gray-bottom bg-white/30'/>
                                <img src={ImageIcon} alt="" style={{ width: "30px", height: "30px", padding: "8px", borderRadius: "2px"}} className='gray-bottom bg-white/30'/>
                            </div>
                        </div>
                        <div className="card-content m-auto flex flex-col">
                        <h2 className='card-hea mt-2 mb-2 border-none '>Infinite Bliss Villa</h2>
                        <div className="address flex items-center gap-2 mb-3">
                        <img src={Vec} alt="" /> 
                        <small>Ishiagu, Enugu</small>
                        </div>
                            <div className="room flex gap-8">
                                <div className="bed flex items-center gap-2">
                                   <img src={BedImg} alt="" />
                                   <small>5 Bedrooms</small>
                                </div>
                                <div className="bath flex items-center gap-2">
                                    <img src={BathImg} alt="" />
                                      <small>3 Bathrooms</small>
                                </div>
                            </div> 
                               <hr className='line mt-6 mb-6' />
                            <div className="amount flex justify-between items-center">
                            <h1>&#8358;2,350,000,000</h1>
                            <div className="images flex items-center gap-6">
                            <img src={ArrImg} alt="" className='specialIcon'/>
                            <img src={Btot} alt="" />
                            <img src={LoveI} alt="" />
                            </div>
                        </div>
                        </div>
                    </li>

                    <li className='card shadow-md border-none'>
                        <div className="card-img7 flex flex-col gap-12">
                            <div className="top flex justify-between mt-2">
                                <p style={{backgroundColor: "#3D9970", padding: "8px", borderRadius: "2px", color: "white"}}>Featured</p>
                                <p style={{ padding: "8px", borderRadius: "2px", color: "white"}} className='gray-side backdrop-blur-sm bg-white/40'>for Sale</p>
                            </div>
                            <div className="bottom flex gap-10 justify-end">
                                <img src={Itwo} alt="" style={{ width: "30px", height: "30px", padding: "8px", borderRadius: "2px"}} className='gray-bottom bg-white/30'/>
                                <img src={VideoIcon} alt="" style={{ width: "30px", height: "30px", padding: "8px", borderRadius: "2px"}} className='gray-bottom bg-white/30'/>
                                <img src={ImageIcon} alt="" style={{ width: "30px", height: "30px", padding: "8px", borderRadius: "2px"}} className='gray-bottom bg-white/30'/>
                            </div>
                        </div>
                        <div className="card-content m-auto flex flex-col">
                        <h2 className='card-hea mt-2 mb-2 border-none '>Real House Luxury Villa</h2>
                        <div className="address flex items-center gap-2 mb-3">
                        <img src={Vec} alt="" /> 
                        <small>Works Layout, Owerri</small>
                        </div>
                            <div className="room flex gap-8">
                                <div className="bed flex items-center gap-2">
                                   <img src={BedImg} alt="" />
                                   <small>8 Bedrooms</small>
                                </div>
                                <div className="bath flex items-center gap-2">
                                    <img src={BathImg} alt="" />
                                      <small>6 Bathrooms</small>
                                </div>
                            </div> 
                               <hr className='line mt-6 mb-6' />
                            <div className="amount flex justify-between items-center">
                            <h1>&#8358;3, 350,000/1 Year</h1>
                            <div className="images flex items-center gap-6">
                            <img src={ArrImg} alt="" className='specialIcon'/>
                            <img src={Btot} alt="" />
                            <img src={LoveI} alt="" />
                            </div>
                        </div>
                        </div>
                    </li>

                    <li className='card shadow-md border-none'>
                        <div className="card-img8 flex flex-col gap-12">
                            <div className="top flex justify-between mt-2">
                                <p style={{backgroundColor: "#3D9970", padding: "8px", borderRadius: "2px", color: "white"}}>Featured</p>
                                <p style={{ padding: "8px", borderRadius: "2px", color: "white"}} className='gray-side backdrop-blur-sm bg-white/40'>for Sale</p>
                            </div>
                            <div className="bottom flex gap-10 justify-end">
                                <img src={Itwo} alt="" style={{ width: "30px", height: "30px", padding: "8px", borderRadius: "2px"}} className='gray-bottom bg-white/30'/>
                                <img src={VideoIcon} alt="" style={{ width: "30px", height: "30px", padding: "8px", borderRadius: "2px"}} className='gray-bottom bg-white/30'/>
                                <img src={ImageIcon} alt="" style={{ width: "30px", height: "30px", padding: "8px", borderRadius: "2px"}} className='gray-bottom bg-white/30'/>
                            </div>
                        </div>
                        <div className="card-content m-auto flex flex-col">
                        <h2 className='card-hea mt-2 mb-2 border-none '>Real House Luxury Villa</h2>
                        <div className="address flex items-center gap-2 mb-3">
                        <img src={Vec} alt="" /> 
                        <small>Ikeja, Lagos</small>
                        </div>
                            <div className="room flex gap-8">
                                <div className="bed flex items-center gap-2">
                                   <img src={BedImg} alt="" />
                                   <small>6 Bedrooms</small>
                                </div>
                                <div className="bath flex items-center gap-2">
                                    <img src={BathImg} alt="" />
                                      <small>6 Bathrooms</small>
                                </div>
                            </div> 
                               <hr className='line mt-6 mb-6' />
                            <div className="amount flex justify-between items-center">
                            <h1>&#8358;600,000,000</h1>
                            <div className="images flex items-center gap-6">
                            <img src={ArrImg} alt="" className='specialIcon'/>
                            <img src={Btot} alt="" />
                            <img src={LoveI} alt="" />
                            </div>
                        </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="pagination flex items-center justify-center gap-4 mb-20 mt-20">
                <img src={SignIcon2} alt="" />
                <ul className='bold font-semibold text-3xl flex gap-4'> 
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
                <img src={SignIcon1} alt="" />
            </div>
              

              <div className="popular w-full m-auto mb-4">
                <h1 className='popular-header font-semibold text-5xl text-center mb-20'>Discover Our Popular Properties</h1>

                    <ul className='popular-main w-4/5 lg:grid lg:grid-cols-4 lg:gap-4 m-auto'>
                        <li className='popularCard w-full'>
                        </li>
                        <li className='popularCard1 w-full'>
                        </li>
                        <li className='popularCard2 w-full'>
                        </li>
                        <li className='popularCard3 w-full'>
                        </li>
                    </ul>
               </div>
        </div>
    </div>
  )
}

export default Blog