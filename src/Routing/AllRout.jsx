import React from 'react'
import {Routes,Route} from 'react-router-dom'
import SingleCompany from '../Components/SingleCompany'
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
            <Route path='/singlecompany/:id' element={<SingleCompanyPage/>}/>
        </Routes>
    </div>
  )
}

export default AllRout