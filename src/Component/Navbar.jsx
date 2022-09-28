import React, { useState } from 'react'
import style from '../Styles/navbar.module.css'



const Navbar = () => {
  return (
<div >
        <div className={style.navbarAyush} >
            <div className={style.logoAyush}>
                <img width='150px' src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png"/>
            </div>
            <div className={style.tagAyush}>
                <p className={style.tagHoverAyush}>Jobs</p>
                <p className={style.tagHoverAyush}>Companies</p>
                <p className={style.tagHoverAyush}>Services</p>
            </div>
            <div className={style.navbuttonAyush}>
                <button className={style.loginButtonAyush}>Login</button>
                <button className={style.loginButton2Ayush}>Register</button>
            </div>
            <div className={style.lineAyush}>
                <p className={style.navParaAyush}>|</p>
            </div>
            <div className={style.navEmpAyush}>
                <select className={style.navBorderAyush}>
                <option>For employers</option>
                </select>
            </div>
        </div>
        
    </div>

  )
}

export default Navbar