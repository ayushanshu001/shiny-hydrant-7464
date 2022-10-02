
import React from 'react'
import Styles from '../Components_Avi/styles_Avi/Accelerateyourjob.module.css'

export default function Accelerateyourjob() {
  return (
    <div>
      <div className={Styles.Accelarate_Avi}>
        <div className={Styles.Accelarate_First}>
          <img
            style={{ marginTop: "40px", marginLeft: "90px",width:"150px",height:"100px"}}
            src="https://static.naukimg.com/s/0/0/i/ff-services.png"
            alt="photo"
          />
        </div>
        <div className={Styles.Accelarate_Second}>
          <h2 style={{fontWeight:"700", }}>Accelerate your job search with premium services</h2>
          <p style={{marginTop:"-5px", color: "gray" }}>
            Services to help you get hired, faster: from preparing your CV,
            getting<br></br> recruiter attention, finding the right jobs, and
            more!
          </p>
          <div style={{ display: "flex" }}>
            {/* <button className={Styles.Acc_btn_Avi1}>
              <img style={{marginRight:"10px"}}  src="https://static.naukimg.com/s/0/0/i/ff-services-icon2.png" />
                       Resume writing   
              <img style={{marginLeft:"10px"}} src="https://static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png" />
            </button>
            <button className={Styles.Acc_btn_Avi}>
              <img style={{marginRight:"10px"}} src="https://static.naukimg.com/s/0/0/i/ff-services-icon3.png" />
                   Prioroty applicant   
              <img style={{marginLeft:"10px"}} src="https://static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png" />
            </button>{" "}
            <button className={Styles.Acc_btn_Avi}>
              <img style={{marginRight:"10px"}} src="https://static.naukimg.com/s/0/0/i/ff-services-icon1.png" />
                   Resume display    
              <img style={{marginLeft:"10px"}} src="https://static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png" />
            </button> */}
          </div>
        </div>
        {/* third */}
        <div className={Styles.Acc_third}>
            <button className={Styles.Learn_Avi}>Learn more</button>
            <p>Includes paid services</p>
        </div>
      </div>
     
    </div>
  );
}
