import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/navbar.module.css'

function LoginAuth() {
  return (
    <div>
     <button className={"loginButtonAyush"}><Link to='/login' style={{textDecoration:'none'}}>Login</Link></button>
                <button className={"loginButton2Ayush"}><Link to='/register' style={{textDecoration:'none'}}>Register</Link></button>
    </div>
  )
}

export default LoginAuth