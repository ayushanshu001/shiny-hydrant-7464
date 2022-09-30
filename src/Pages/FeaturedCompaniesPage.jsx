import React from 'react'
import { useEffect } from 'react'
import { getData } from '../Redux/app/action'
import {useDispatch, useSelector} from "react-redux"
import FeatureCompanyUI from '../Components/FeatureCompanyUI'
import styled from 'styled-components'

const FeaturedCompaniesPage = () => {
  const {data}=useSelector(store=>(store))
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData())
  }, [])
  return (
    <FeatureCompany>
      <h1>Featured companies actively hiring</h1>
      <FeatureCompanyUI companies={data}/>
    </FeatureCompany>
  )
}
const FeatureCompany=styled.div`
  h1{
    font-weight: 700;
    font-size: 27px;
    color: #1b2437;
    text-align: center;
    overflow: hidden;
    font-family: "Roboto Slab";
    margin-bottom:-30px;
  }
`;

export default FeaturedCompaniesPage