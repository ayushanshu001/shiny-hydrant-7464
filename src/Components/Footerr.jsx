import React from 'react'
import style from '../Styles/Footerr.module.css'
import SubFooter from './SubFooter'

const Footerr = () => {
  return (
    <div>
            <div className={style.boxFooter}>
            
            <div className={style.MainAyush} >
                <div >
                    <div>
                        <img style={{padding:'100px 0px 0px 150px',width:'170px',height:'30px'}} src='https://static.naukimg.com/s/4/100/i/naukri_Logo.png' alt="Logo"/>
                    </div>
                    <div></div>
                    <div className={style.imgAyush}>
                        <a href='https://www.facebook.com/Naukri/'><img className={style.imgReduce} src='https://i.ibb.co/LSLXHws/facebook.png' alt="facebook"/></a>
                        <a href='https://www.instagram.com/naukridotcom/?hl=en'><img className={style.imgReduce} src='https://i.ibb.co/8KhcSJr/instagram.png' alt="twitter"/></a>
                        <a href='https://twitter.com/Naukri?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'><img className={style.imgReduce} src='https://i.ibb.co/VNMQT0m/twitter-sign.png' alt="twitter"/></a>
                        <a href='https://www.linkedin.com/company/naukri.com/?originalSubdomain=in'><img className={style.imgReduce} src='https://i.ibb.co/BTDGYCZ/linkedin-logo.png' alt="twitter"/></a>
                    </div>
                </div>
                <div style={{display:'flex',gap:'80px',paddingLeft:'70px',paddingTop:'87px'}}>
                <div className={style.alignAyush}>
                    <p >About</p>
                    <p>Careers</p>
                    <p>Employer home</p>
                    <p>Sitemap</p>
                </div>
                <div className={style.alignAyush} >
                    <p>Help center</p>
                    <p>Summons/Notices</p>
                    <p>Grievances</p>
                    <p>Report issue</p>
                </div>
                <div className={style.alignAyush}>
                    <p>Privacy policy</p>
                    <p>Terms & conditions</p>
                    <p>Fraud alert</p>
                    <p>Trust & safety</p>
                </div>
                </div>
                <div style={{paddingTop:'70px',paddingLeft:'70px'}}>
                <div style={{height:'180px', width:'300px',
                boxShadow:' rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px'
                , }}>
                    <div>
                        <h4>Apply on the go</h4>
                        
                        <h6>Get real-time job updates on our App</h6>
                    </div>
                    <div style={{display:'flex'}}>
                        <div>
                            <img src='https://static.naukimg.com/s/0/0/i/new-homepage/android-app.png' alt ="ios" style={{width:'100px',paddingLeft:'40px'}}/>
                        </div>
                        <div>
                            <img src='https://static.naukimg.com/s/0/0/i/new-homepage/ios-app.png' alt="android" style={{width:'100px'}}/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        
        </div>
        <br/>
        <br/>
            <SubFooter/>
    </div>
  )
}

export default Footerr