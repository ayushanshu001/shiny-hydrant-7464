import React from 'react'
import Styles from "./Comp_Side.module.css"
export default function Comp_Side() {
  return (
    <div>

        <div className={Styles.Side_Avi}>
            <div style={{display:"flex",
        marginLeft:"10%"}}>
                <img style={{
                    width:"20px",
                    marginTop:"20px",
                    height:"20px",
                    color:"gray",
                    marginRight:"5px",
                    }} src='https://www.freeiconspng.com/thumbs/filter-icon/filter-icon-0.png' alt ="photo" />
                    <h4 style={{
                        color:"gray"
                    }}>
                        Filters</h4>
            </div>
            <hr style={{
                width:"80%"
            }}></hr>
        </div>

    </div>
  )
}
