import React, { useState } from 'react'
import style from '../Styles/navbar.module.css'
import {Link} from 'react-router-dom'
import { auth, db, logout } from "../Firebase/Firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import LoginAuth from './LoginAuth';
import LogoutAuth from './LogoutAuth';



const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);
    //  console.log(user,loading,error)

  return (
<div style={{display:'flex'}} >
        <div className={style.navbarAyush} >
        
            <Link to='/'>
            <div className={style.logoAyush}>
                <img style={{width:'150px',height:'25px'}} src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png"/>
            </div></Link>
            <div className={style.tagAyush}>
                <p className={style.tagHoverAyush}>Jobs</p>
                <p className={style.tagHoverAyush}><Link to='/companies' style={{textDecoration:'none'}}>Companies</Link></p>
                <p className={style.tagHoverAyush}>Services</p>
            </div>
            <div className={style.navbuttonAyush}>
               {user===null?<LoginAuth/>:<LogoutAuth />}
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