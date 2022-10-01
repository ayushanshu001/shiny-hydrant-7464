import React from "react"
import './App.css'
import './App.css'
import Footerr from "./Components/Footerr";
import Navbar from "./Components/Navbar";
import AllRout from "./Routing/AllRout";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRout/>
      <Footerr/>
    </div >
  )
}
export default App;
