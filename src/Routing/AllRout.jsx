import React from 'react'
import {Routes,Route} from 'react-router-dom'
import LogoutPage from '../Components/LogoutPage'
import Reset from '../Components/Reset'

import Home from '../Pages/Home'
import SingleCompanyPage from '../Pages/SingleCompanyPage'
import Companies from './Companies'
import Login from './Login'
import Register from './Register'
i

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
            <Route path='/singlecompany/:id' element={<SingleCompanyPage/>}/>

        </Routes>
    </div>
  )
}

export default AllRout