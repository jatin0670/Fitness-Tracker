import React from 'react'
import img from '../images/bg-img.jpg'
import {gsap} from 'gsap'




const Home = () => {

  return (
    <div id='home' className=' h-screen w-full flex bg-[#F7F7F5]'>

      {/* <img className='h-full w-full absolute object-cover top-0 left-0 -z-10 brightness-75 mask-b-from-90%' src={img} alt="" /> */}
        
      <div className=' h-full w-1/2  flex flex-col items-center justify-center'>

         <h1 onMouseEnter={()=>{gsap.to("#cursor", {scale: 8}) }} 
          onMouseLeave={()=>{gsap.to("#cursor", {scale: 1}) }} 
          className=' bg-gray- text-[#1A1A1A] text-7xl p-2 w-[85%] font-bold'>Push Your Limits With us</h1>
         <p onMouseEnter={()=>{gsap.to("#cursor", {height: '25px', width: '2px'})}}
          onMouseLeave={()=>{gsap.to("#cursor", {height: '20px', width: '20px'})}}
         className=' bg-fuchsia- text-[#6B6B6B] text-lg p-2 w-[85%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio vitae magnam vero iure, excepturi aperiam incidunt cum mollitia, quaerat, odio esse debitis voluptatum quasi quis? Nemo dicta suscipit commodi a.</p>
         <div className=' bg-yellow- text-lg p-2 w-[85%]'>
          <button onMouseEnter={()=>{gsap.to("#cursor", {scale: 3}) }} 
          onMouseLeave={()=>{gsap.to("#cursor", {scale: 1}) }}  className=' bg-[#C8F04A] text-[#1A3300] px-4 py-2 rounded-lg hover:bg-[#B8E03A]'>Join Now</button>
          </div>

      </div> 


      <div className=' h-full w-1/2 '></div>  
    </div>
  )
}

export default Home
