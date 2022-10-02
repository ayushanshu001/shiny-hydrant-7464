import React from 'react'
import {Routes,Route} from 'react-router-dom'
import LogoutPage from "../Components/LogoutPage"
import Reset from '../Components/Reset'
import FeaturedCompaniesPage from '../Pages/FeaturedCompaniesPage'
import Home from '../Pages/Home'
import SingleCompanyPage from '../Pages/SingleCompanyPage'
import Companies from './Companies'
import Login from './Login'
import Register from './Register'

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
            <Route path='/companies/:id' element={<SingleCompanyPage/>}/>
            <Route path='/feature' element={<FeaturedCompaniesPage/>}/>

        </Routes>
    </div>
  )
}

export default AllRout