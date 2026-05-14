import Home from "./components/Home.jsx"
import Workout from "./components/Workout.jsx"
import Plans from "./components/Plans.jsx"
import Health from "./components/Health.jsx"
import Nav from "./components/Nav.jsx"
import Cursor from "./components/Cursor.jsx"

function App() {


  return (
    <div className=" h-full w-full flex flex-col">

{/* <div
    className="absolute inset-0 -z-10"
    style={{
      background: "#000000",
      backgroundImage: `
        radial-gradient(circle, rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px)
      `,
      backgroundSize: "30px 30px",
      backgroundPosition: "0 0",
    }}
  /> */}
      
      <Cursor/>
      <Nav/>
      <Home/>
      <Workout/>
      <Health/>
      <Plans/>
  
    </div>
  )
}

export default App









// // <div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
//   {/* Small Grid Pattern */}
//   <div
//   className="absolute inset-0 z-0"
//   style={{
//     backgroundImage: `
//       linear-gradient(to right, #262626 1px, transparent 1px),
//       linear-gradient(to bottom, #262626 1px, transparent 1px)
//     `,
//     backgroundSize: "20px 20px",
//   }}
// />
// {/* Your Content/Components */}
// </div>



// <div className="min-h-screen w-full bg-black relative">
//   {/* Dark White Dotted Grid Background */}
//   <div
//     className="absolute inset-0 z-0"
//     style={{
//       background: "#000000",
//       backgroundImage: `
//         radial-gradient(circle, rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px)
//       `,
//       backgroundSize: "30px 30px",
//       backgroundPosition: "0 0",
//     }}
//   />
//      {/* Your Content/Components */}
// </div>
