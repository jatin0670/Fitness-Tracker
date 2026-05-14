import React, { useEffect } from 'react'
import {gsap} from 'gsap'


const Cursor = () => {

    useEffect(()=>{

        const mouseHandle = (e)=>{
            
            const {clientX, clientY} = e
            // console.log(clientX)

            gsap.to("#cursor", {
                x: clientX - 20 / 2,
                y: clientY - 20 / 2,
                duration: .3,
                delay: 0,
                // ease: 'power4.out'
            })
        }

       window.addEventListener("mousemove", mouseHandle)

       return ()=>{
        window.removeEventListener("mousemove", mouseHandle)
       }
    }, [])
    

  return (
      
    <div id='cursor' className='fixed top-0 left-0 h-5 w-5 bg-white rounded-full z-50 pointer-events-none mix-blend-difference'/>
  )
}

export default Cursor
