import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Forget from '../Component/Reset'
import LogoutPage from '../Component/LogoutPage'
import Home from '../Pages/Home'
import Companies from './Companies'
import Login from './Login'
import Register from './Register'
import Reset from '../Component/Reset'

const AllRout = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/companies' element={<Companies/>} />
            <Route path='/login' element={<Login/>}     />
            <Route path='/register' element={<Register/>}     />
            <Route path='/logoutpage' element={<LogoutPage/>}/>
            <Route path='/reset' element={<Reset/>}/>
            
        </Routes>
    </div>
  )
}

export default AllRout