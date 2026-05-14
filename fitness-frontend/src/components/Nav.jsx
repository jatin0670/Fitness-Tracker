import {gsap} from 'gsap'

const Nav = () => {

  return (
  
    <>
      <nav className=" fixed top-2 left-1/2 -translate-x-1/2 z-40 w-[96%] flex items-center justify-between px-10 py-2 rounded-full bg-[#EDEDED] ">
 
      {/* Left - Brand Name */}
      <h1 className="text-[#1A1A1A] text-2xl font-bold">Fitness</h1>
     
      {/* Right - Nav Links + Button */}
      <div className="flex items-center gap-14">
        <a  href="#home" className="text-[#1A1A1A] hover:">Home</a>
        <a href="#workout" className="text-[#1A1A1A] hover:">Workout</a>
        <a href="#health" className="text-[#1A1A1A] hover:">Health</a>
        <a href="#plans" className="text-[#1A1A1A] hover:">Plans</a>
      </div>

      <button onMouseEnter={()=>{gsap.to("#cursor", {scale: 3}) }} 
        onMouseLeave={()=>{gsap.to("#cursor", {scale: 1}) }} 
        className="bg-[#C8F04A] text-[#1A3300] px-4 py-2 rounded-lg hover:bg-[#B8E03A]  hover:cursor-pointer">
          Sign Up
        </button>
     
     </nav>
    </>
  );
};

export default Nav;