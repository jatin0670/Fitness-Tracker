import React from 'react'


const Tags = ({name, fn, stl}) => {
  return (
    <div style={stl} onClick={fn} className=' bg-[#E3E3E0]  rounded-4xl px-4 py-2 flex items-center justify-center cursor-pointer'>
      <h1 className=' text-[#1A1A1A]'>{name}</h1>
    </div>
  )
}

export default Tags
