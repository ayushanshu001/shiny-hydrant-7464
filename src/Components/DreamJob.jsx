import React from 'react'
import style from '../Styles/Dream.module.css'

const DreamJob = () => {
  return (
    <div>
    <div className={style.headAyush}>
            <h1 >Find your dream job now</h1>
            <div className={style.headAyush2}>5 lakh+ jobs for you to explore</div>
    </div>
        <br/>
        <br/>
        <div className={style.inputAyush}>
        <img style={{height:'20px',paddingTop:'10px'}}
						src="https://static.naukimg.com/s/7/103/i/search.9ec0e1ac.svg"
						alt="search icon"
					/>
        <input style={{outline:'none',width:'250px',border:'none'}} type='text' placeholder='Enter skills /destination /companies'/> 
        <select required style={{border:"none",outline:'none',color:'grey'}}>
                      <option value="" disabled selected>Select Experience</option>
                      <option value="1">1 year</option>
                      <option value="2">2 year</option>
                      <option value="3">3 year</option>
                      <option value="4">4 year</option>
                      <option value="5">5 year</option>
        </select>   
        <input style={{outline:'none',width:'250px',border:'none',paddingLeft:'20px'}} type='text' placeholder='Enter Location'/>
        <button style={{backgroundColor:'#457EFF', color:'white', width:'110px',height:'40px', borderRadius:'20px',fontWeight:'bold',fontSize:'medium'}}>Search</button>       
    </div>
    <br/>
    <br/>
    <br/>
    <div className={style.logoAyush}>
            <img src='	https://static.naukimg.com/s/0/0/i/trending-naukri/remote.svg' alt='Remote Icon'/>
            <span>Remote</span>
            <img src='https://static.naukimg.com/s/0/0/i/trending-naukri/mnc.svg' alt='MNC Icon'/>
            <span>MNC</span>
            <img src='	https://static.naukimg.com/s/0/0/i/trending-naukri/analytics.svg' alt='Analytics Icon'/>
            <span>Analytics</span>
            <img src='	https://static.naukimg.com/s/0/0/i/trending-naukri/sales.svg' alt='Sales Icon'/>
            <span>Sales</span>
            <img src="https://static.naukimg.com/s/0/0/i/trending-naukri/startup.svg" alt='Startup Icon'/>
            <span>Startup</span>
            <img src='	https://static.naukimg.com/s/0/0/i/trending-naukri/hr.svg' alt='HR Icon '/>
            <span>HR</span>
    </div>        
    <br/>
    <br/>
            <div className={style.logoAyush2}>
            <img src="	https://static.naukimg.com/s/0/0/i/trending-naukri/engineering.svg" alt='Eng Icon'/>
            <span>Engineering</span>
            <img src='https://static.naukimg.com/s/0/0/i/trending-naukri/fortune-500.svg' alt='Fortune Icon'/>
            <span>Fortune 500</span>
            <img src='	https://static.naukimg.com/s/0/0/i/trending-naukri/software.svg' alt='Software icon'/>
            <span>Software & ...</span>
            <img src='	https://static.naukimg.com/s/0/0/i/trending-naukri/marketing.svg' alt='Marketing Icon'/>
            <span>Marketing</span>
            <img src='	https://static.naukimg.com/s/0/0/i/trending-naukri/supplychain.svg' alt='Supply Chain Icon'/>
            <span>Supply Chain</span>
            </div>
        
    
        
    </div>
  )
}

export default DreamJob