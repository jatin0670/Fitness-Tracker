import React, { useState } from 'react'
import Card from './Card'
import Tags from './Tags'


const Workout = () => {

  const [opne, setOpen] = useState(false)
  const [data, setData] = useState([])
  const [count, setCount] = useState(4)
  // const [ct1, setCt1] = useState(5)

  const playCount = ()=>{
    const interval = setInterval(()=>{
      
        setCount(prev=> prev>0 ? prev-1: (clearInterval(interval), prev))
  
    }, 1000)

  }
 
 const set = (e)=>{
  if(!data.includes(e)){
    setData([...data, e])
    }

    else{
      window.alert("already added")
    }

  }

  const remove = (e)=>{
    const newData =  data.filter((word) => word !== e)
    setData(newData)
  }

  return (
    <div id='workout' className=' h-screen w-full flex relative bg-[#F7F7F5] '>

      {/* this is POP UP card  */}
      <div className=' min-h-[60%] min-w-[50%] p-5 rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#EDEDED] flex flex-col items-center justify-center gap-5 shadow-2xl shadow-black' style={{visibility: opne ? 'visible' : 'hidden'}}>
      
      <button  className=' absolute top-2 right-2 h-6 w-6 rounded-full bg-[#C8F04A] text-[#1A3300] hover:bg-[#B8E03A] font-bold' onClick={()=>{setOpen(false), setData([])}}>X</button>
      
      <h1 className=' text-2xl font-bold text-[#1A1A1A]'>Add Custom Exercises</h1>

      <div className=' p-2 w-2/3 flex flex-wrap gap-5 border border-[#E0E0E0] rounded-2xl' >
         {data.map((e, id) => <Tags key={id} name={e} fn={()=> remove(e)}/>)}
 
      </div>

      <button className='bg-[#C8F04A] text-[#1A3300] hover:bg-[#B8E03A] hover:cursor-pointer text-sm font-semibold px-4 py-2 rounded-full'>Train now</button>

      <div className=' bg-white p-2 w-2/3 flex gap-5 flex-wrap border border-[#E0E0E0] rounded-2xl'>
         <Tags name={'jogging'} fn={()=>{set('jogging')}}/>
         <Tags name={'push-ups'} fn={()=>{set('push-ups')}}/>
         <Tags name={'running'} fn={()=>{set('running')}}/>
         <Tags name={'sit ups'} fn={()=>{set('sit-ups')}}/>
         <Tags name={'high knees'} fn={()=>{set('high knees')}}/>
         <Tags name={'mountain climbers'} fn={()=>{set('mountain cilmbers')}}/>
      </div>

      
      </div>


      {/* this is left side section */}
      <div className=' bg-gray-600 h-full w-1/2 bgsky-400 flex flex-col items-center justify-center bg-emerald900'>

      <div className=' h-[80%] w-[70%] bg-slate-900 flex items-center justify-center'>
         <h1 className='text-9xl text-[#EDEDED] font-bold '>{count}</h1>
      </div>
      
      </div> 
      
      

      {/* this is default card section------------------------------ */}
      <div className=' h-full w-1/2 bgamber-500 flex flex-col gap-4 items-center justify-center pt-5'>
      
        <Card img={'https://previews.123rf.com/images/vasilyrosca/vasilyrosca2202/vasilyrosca220200037/182496399-energy-fat-burn-kcal-fire-icon-kilocalorie-hot-logo-vector-weight-fitness-flame-graphic-icon.jpg'} title={'Effective fat loss exercises'} exercise={'Burpees, Mountain Climbers, Jump Squats, Jump Squats'} sets={'3-5 sets'} mins={'150-300 minutes per week'} fn={playCount}/>

        <Card img={'https://images.ctfassets.net/8urtyqugdt2l/4wPk3KafRwgpwIcJzb0VRX/4894054c6182c62c1d850628935a4b0b/desktop-best-chest-exercises.jpg'} title={'chest exercises'} exercise={'Push Up, Incline Bench Press (Barbell), Bench Press (Dumbbell), Bench Press (Barbell)'} sets={'3-5 sets'} mins={'150-300 minutes per week'}/>

        <Card img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh4PBq1HP9YqCx3DAm4tfpsNlTnbn3RKGxsA&s'} title={'bicep exercises'} exercise={'Concentration Curls, Hammer Curls, EZ Bar Curls, Preacher Curl'} sets={'3-5 sets'} mins={'150-300 minutes per week'}/>

        <button onClick={()=>{ setOpen(true)}} className=' px-10 py-3 bg-[#EDEDED] text-[#1A1A1A] border-[#E0E0E0] border font-bold rounded-2xl hover:cursor-pointer' > Add custom Exercises</button>
      
      </div>  

      
    </div>
  )
}

export default Workout
