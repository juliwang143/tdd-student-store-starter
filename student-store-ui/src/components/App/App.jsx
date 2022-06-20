import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// export default function App() {
//   return (
//     <div className="app">
//       <BrowserRouter>
//         <main>
//           {/* YOUR CODE HERE! */}
//           <Navbar />
//           <Sidebar />
//           <Home />
//         </main>
//       </BrowserRouter>
//     </div>
//   )
// }

export default function App() {
  return (
    <div className="app">
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar />
          <Home />
        </main>
    </div>
  )
}
