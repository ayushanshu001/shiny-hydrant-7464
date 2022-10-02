import './App.css';
import Prepareforyour from'./Components_Avi/Prepareforyour'
import Accelerateyourjob   from './Components_Avi/Accelerateyourjob';
import Growyour from './Components_Avi/Growyour';
import Standout from './Components_Avi/Standout';
import Comp_Side from './Components_Avi/Comp_Side';

import React from "react"
import './App.css'
// import React from "react"
// import './App.css'
// import Navbar from "./Components/Navbar";
import AllRout from "./Routing/AllRout";
import './App.css' 
import Navbar from './Components/Navbar';
import SingleCompany from "./Components/SingleCompany";
// import AllRout from './Routing/AllRout';

import './App.css'
import './App.css'
import SingleCompanyPage from "./Pages/SingleCompanyPage";


function App() {
  return (
    <div className="App">
 {/* <Navbar/> */}
      {/* <AllRout/>
      <SingleCompanyPage/>
      <AllRout/> */}
      <Accelerateyourjob />
      <Growyour />
      <Prepareforyour />
      <Standout />
    </div>
  );
}
export default App;
