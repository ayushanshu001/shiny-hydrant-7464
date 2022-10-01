import React from 'react'
import styled from 'styled-components'
import DiscoverJob from './DiscoverJob';
import "../Styles/Roles.css"

const Roles = () => {
    return (
        <PopularRoles>
            <div className='outerContainer'>
                <div className="innerContainr">
                    <div className="leftInnerContainer">
                        <div className="left-image">
                            <img src="https://static.naukimg.com/s/0/0/i/role-collection.png" alt=""></img>
                        </div>
                        <p className="heading">Discover job across popular roles</p>
                        <p className="sub-heading">Select a role and we'll show you relevant jobs for it!</p>
                    </div>
                    <div className="chip-container">
                        <DiscoverJob />
                    </div>
                </div>
            </div>
        </PopularRoles>
    )
}
const PopularRoles = styled.div`
    width:100%;
`;
export default Roles