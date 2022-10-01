import React from "react"
import './App.css'
import './App.css'
import Navbar from "./Components/Navbar";
import AllRout from "./Routing/AllRout";
import './App.css' 
import Navbar from './Components/Navbar';
import SingleCompany from "./Components/SingleCompany";
import AllRout from './Routing/AllRout';

import React from "react"
import './App.css'
import './App.css'
import SingleCompanyPage from "./Pages/SingleCompanyPage";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRout/>
      <SingleCompanyPage/>
      <AllRout/>
    </div >
  )
}
export default App;
