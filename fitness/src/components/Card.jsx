const Card = ({img, title, exercise, sets, mins , fn}) => {
    return (
      <div className="flex items-center gap-4 bg-[#EDEDED] hover:bg-[#E3E3E0] border-[#E0E0E0] border rounded-2xl shadow-md p-4 w-xl">
        
        {/* Left - Image */}
        <img
          src={img}
          alt="cherries"
          className="w-28 h-24 object-cover rounded-xl shadow-xs shadow-neutral-700"
        />
  
        {/* Middle - Text */}
        <div className="flex-1 flex flex-col gap-2 ">
          <div className="">

          <h2 className="font-bold text-[#1A1A1A] text-lg ">{title}</h2>
          <p className="text-[#6B6B6B] text-sm">{exercise}</p>

          </div>
          

          <div className=" flex items-center justify-between ">

          <div className=" ">
            <p className="font-bold text-[#1A1A1A] text-sm">{sets}</p>
            <p className="text-[#6B6B6B] text-xs">{mins}</p>
          </div>

          <button onClick={fn} className=" bg-[#C8F04A] text-[#1A3300] hover:cursor-pointer hover:bg-[#B8E03A] text-sm font-semibold px-4 py-2 rounded-full">Train now</button>

          </div>
  
        </div>
  
        {/* Right - Button */}
        
      </div>
    );
  };
  
  export default Card;