import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
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
        </Routes>
    </div>
  )
}

export default AllRout