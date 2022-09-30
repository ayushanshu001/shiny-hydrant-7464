
import './App.css'
import Register from './Components/Register';
import './App.css' 
import Home from './Pages/Home'
import Navbar from './Component/Navbar';
import Footerr from './Component/Footerr';
import SubFooter from './Component/SubFooter';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <br/>
      <br/>
      <Home/>
     <Register/>
     <Footerr/>
   </div>
  )
}
export default App;
