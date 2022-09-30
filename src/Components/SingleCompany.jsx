import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const SingleCompany = () => {

    let data={}
    console.log(data)
    const getCompany=()=>{
        return axios
        .get(`https://chalo-api.herokuapp.com/Cognizant`)
        .then(res=>{data=res.data})
        .catch(e=>console.log(e))
      }
      
      useEffect(()=>{
        getCompany();
      },[])

  return (
    <SingleCompanyContainer>
        <img src=""/>
    </SingleCompanyContainer>
  )
}
const SingleCompanyContainer=styled.div`

`;
export default SingleCompany