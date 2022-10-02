import React from 'react'
import Styles from "../Components_Avi/styles_Avi/Standout.module.css";
export default function Standout() {
  return (
    <div>
      <div className={Styles.stand_Avi}>
        <div className={Styles.stand_Avi1}>
          <div className={Styles.one_Avi}>
            <h1>
              10M+ users are on the <br></br> Naukri app
            </h1>
            <p style={{ color: "gray", marginTop: "-10px" }}>
              Get real-time job updates & more!
            </p>
            <div className={Styles.Inwrap_Avi}>
            <input
              type="text"
              className={Styles.Input_Avi}
              placeholder="Enter mobile number..."
            />
            <button className={Styles.Inbtn_Avi}>
              <span className={Styles.span_Avi}>Getlink</span>
            </button>
            </div>
            
            <div style={{ display: "flex", gap: "10px", marginTop: "20px", }}>
              <img
                src="https://static.naukimg.com/s/0/0/i/download-app-link/Gplay.png"
                alt="photo"
                style={{width:"30%"}}
              />
              <img
                src="https://static.naukimg.com/s/0/0/i/download-app-link/Appstore.png"
                alt="photo"
                style={{width:"30%"}}
              />
            </div>
          </div>
          <div>
            <div className={Styles.qr_Avi}>
              <img
                style={{ height: "100px",width:"100px" }}
                src="https://static.naukimg.com/s/0/0/i/download-app-link/qr-code.svg"
                alt="photo"
              />
              <p style={{ color: "gray", marginTop: "-5px" }}>
                scan to download
              </p>
            </div>
          </div>
        </div>
        <div className={Styles.stand_Avi2}>
          <img
            src="https://static.naukimg.com/s/0/0/i/download-app-link/MaskGroup_v4.png"
            alt="photo"
            style={{height:"90%",
          width:"90%"}}
          />
        </div>
      </div>
    </div>
  );
}
