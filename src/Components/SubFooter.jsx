import React from 'react'

const SubFooter = () => {


  return (
    <div style={{display:'flex'}}>
        <div style={{paddingLeft:'100px'}}>
            <img style={{width:'100px', height:'30px',paddingTop:'15px',paddingLeft:'20px'}} src='https://static.naukimg.com/s/0/0/i/new-homepage/infoedge-logo.svg'/>
        </div>
        <div style={{paddingLeft:'50px'}}>
            <p style={{fontSize:'small', fontWeight:'bold', color:'grey'}}>All trademarks are the property of their respective owners<br/>
All rights reserved © 2022 Info Edge (India) Ltd.</p>
        </div>
        <div>
            <p style={{paddingLeft:'30px',fontSize:'medium'}}>Our businesses</p>
        </div>
        <div style={{paddingLeft:'20px'}}>
            <marquee>
            <img style={{height:'50px',width:'150px'}} src='https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/firstNaukri.png'/>
            <img style={{height:'50px',width:'150px'}} src='https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/shiksha.png'/>
            <img style={{height:'50px',width:'150px'}} src='https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/nnacres.png'/>
            <img style={{height:'50px',width:'150px'}} src='https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/jeevansathi.png'/>
            </marquee>

        </div>
    </div>
  )
}

export default SubFooter


// https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/firstNaukri.png
// https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/shiksha.png
// https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/nnacres.png
// https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/jeevansathi.png