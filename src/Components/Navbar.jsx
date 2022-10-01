
import style from '../Styles/navbar.module.css'
import React from 'react'
import {Link} from 'react-router-dom'
import React, { useState } from 'react'
import style from '../Styles/Navbar.module.css'

import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div style={{ display: 'flex' }} >
            <div className={style.navbarAyush} >

                <Link to='/'>
                    <div className={style.logoAyush}>
                        <img style={{ width: '150px', height: '25px' }} src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" alt="" />
                    </div >
                </Link>    
                    <div className={style.tagAyush}>
                        <p className={style.tagHoverAyush}>Jobs</p>
                        <p className={style.tagHoverAyush}><Link to='/companies' style={{ textDecoration: 'none' }}>Companies</Link></p>
                        <p className={style.tagHoverAyush}>Services</p>
                    </div>
                    <div className={style.navbuttonAyush}>
                        <button className={style.loginButtonAyush}><Link to='/login' style={{ textDecoration: 'none' }}>Login</Link></button>
                        <button className={style.loginButton2Ayush}><Link to='/register' style={{ textDecoration: 'none' }}>Register</Link></button>
                    </div>
                    <div className={style.lineAyush}>
                        <p className={style.navParaAyush}>|</p>
                    </div>
                    <div className={style.navEmpAyush}>
                        <select className={style.navBorderAyush}>
                            <option>For employers</option>
                        </select>
                    </div>
                

            </div >

        </div >

    )
}

export default Navbar