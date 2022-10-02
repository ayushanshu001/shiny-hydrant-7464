import React from "react";
import Styles from "../styles_Avi/Comp_Side.module.css";
export default function Comp_Side() {
  return (
    <div>
      <div className={Styles.Side_Avi}>
        <div style={{ display: "flex", marginLeft: "10%" }}>
          <img
            style={{
              width: "20px",
              marginTop: "20px",
              height: "20px",
              color: "gray",
              marginRight: "5px",
            }}
            src="https://www.freeiconspng.com/thumbs/filter-icon/filter-icon-0.png"
            alt="photo"
          />
          <h4
            style={{
              color: "gray",
            }}
          >
            Filters
          </h4>
        </div>
        <hr></hr>
        <div>
          <h3 style={{ textAlign: "left" }}>Company Type</h3>
          <div
            style={{
              width:"350px",
              textAlign: "left",
              height: "170px",
              // border: "1px solid red",
              overflowY: "scroll",
              scrollbarColor: "black",
              scrollbarRadius: "10px",
              scrollbarWidth: "initial",
            }}
          >
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "25px",
              }}
              type="checkbox"
              name="Foreign MNC"
            />
            <label for="Foreign MNC">Foreign MNC (1062)</label>
            <br></br>
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Corporate"
            />
            <label for="Corporate">Corporate (943)</label>
            <br></br>{" "}
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Indian MNC"
            />
            <label for="Indian MNC">Indian MNC</label>
            <br></br>{" "}
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Start up"
            />
            <label for="Start up">Start up (234)</label>
            <br></br>{" "}
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Govt/PSU"
            />
            <label for="Govt/PSU">Govt/PSU (18)</label>
            <br></br>{" "}
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Others"
            />
            <label for="Others">Others (1)</label>
            <br></br>
          </div>
          <hr></hr>
          <h3 style={{ textAlign: "left" }}>Location</h3>
          <input
            style={{
              marginLeft: "-110px",
              borderRadius: "30px",
              height: "35px",
              border: "1px solid gray",
              width: "70%",
              marginBottom: "10px",
            }}
            placeholder="     Search Location"
          />
          <div
            style={{
              textAlign: "left",
              height: "170px",
              width:"350px",
            //   border: "1px solid red",
              overflowY: "scroll",
              scrollbarColor: "black",
              scrollbarRadius: "10px",
              scrollbarWidth: "initial",
            }}
          >
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "25px",
              }}
              type="checkbox"
              name="Mumbai"
            />
            <label for="Mumbai">Mumbai (624)</label>
            <br></br>
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="New Delhi"
            />
            <label for="New Delhi">New Delhi (398)</label>
            <br></br>{" "}
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Noida"
            />
            <label for="Noida">Noida (364)</label>
            <br></br>{" "}
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Banglore"
            />
            <label for="Banglore">Banglore (249)</label>
            <br></br>{" "}
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Kolkata"
            />
            <label for="Kolkata">Kolkata (189)</label>
            <br></br>{" "}
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Pune"
            />
            <label for="Pune">Pune (194)</label>
            <br></br>
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Chennai"
            />
            <label for="Chennai">Chennai (214)</label>
            <br></br>
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Bhavnagar"
            />
            <label for="Bhavnagar">Bhavnagar (110)</label>
            <br></br>
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Ahmedabad"
            />
            <label for="Ahmedabad">Ahmedabad (221)</label>
            <br></br>
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Baroda"
            />
            <label for="Baroda">Baroda (65)</label>
            <br></br>
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Navi Mumbai"
            />
            <label for="Navi Mumbai">Navi Mumbai (145)</label>
            <br></br>
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Chandigarh"
            />
            <label for="Chandigarh">Chandigarh (179)</label>
            <br></br>
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Indore"
            />
            <label for="Indore">Indore (79)</label>
            <br></br>{" "}
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Coimbatore"
            />
            <label for="Coimbatore">Coimbatore (41)</label>
            <br></br>{" "}
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Jaipur"
            />
            <label for="Jaipur">Jaipur (62)</label>
            <br></br>{" "}
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Nagpur"
            />
            <label for="Nagpur">Nagpur (104)</label>
            <br></br>{" "}
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Lucknow"
            />
            <label for="Lucnow">Lucknow (110)</label>
            <br></br>
          </div>
          <hr></hr>

          <h3 style={{ textAlign: "left" }}>Department</h3>
          <input
            style={{
              marginLeft: "-110px",
              borderRadius: "30px",
              height: "35px",
              border: "1px solid gray",
              width: "70%",
              marginBottom: "10px",
            }}
            placeholder="     Search Department"
          />
          <div
            style={{
              textAlign: "left",
              height: "170px",
              width:"350px",
            //   border: "1px solid red",
              overflowY: "scroll",
              scrollbarColor: "black",
              scrollbarRadius: "10px",
              scrollbarWidth: "initial",
            }}
          >
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "25px",
              }}
              type="checkbox"
              name="Engineering- Software & QA"
            />
            <label for="Engineering- Software & QA">
              Engineering- Software & QA (224)
            </label>
            <br></br>
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="IT services & Consultancy"
            />
            <label for="IT services & Consultancy">
              IT services & Consultancy (198)
            </label>
            <br></br>{" "}
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Software Product"
            />
            <label for="Software Product">Software Product (239)</label>
            <br></br>{" "}
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="E-Learning/E-Tech"
            />
            <label for="E-Learning/E-Tech">E-Learning/E-Tech (204)</label>
            <br></br>{" "}
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Internet"
            />
            <label for="Internet">Internet (189)</label>
            <br></br>{" "}
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Fintech/Payments"
            />
            <label for="Fintech/Payments">Fintech/Payments (198)</label>
            <br></br>
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Engineering & Construction"
            />
            <label for="Engineering & Construction">
              Engineering & Construction (200)
            </label>
            <br></br>
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Pharma & Life-Science"
            />
            <label for="Pharma & Life-Science">
              Pharma & Life-Science (110)
            </label>
            <br></br>
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Industrial Equipment/Machinery"
            />
            <label for="Industrial Equipment/Machinery">
              Industrial Equipment/Machinery (98)
            </label>
            <br></br>
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Medical Services & Hospital"
            />
            <label for="Medical Services & Hospital">
              Medical Services & Hospital (165)
            </label>
            <br></br>
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Insurance"
            />
            <label for="Insurance">Insurance (144)</label>
            <br></br>
          </div>
          <hr></hr>
          <h3 style={{ textAlign: "left" }}>Industry</h3>
          <input
            style={{
              marginLeft: "-110px",
              borderRadius: "30px",
              height: "35px",
              border: "1px solid gray",
              width: "70%",
              marginBottom: "10px",
            }}
            placeholder="     Search Indusrey"
          />
          <div
            style={{
              textAlign: "left",
              height: "170px",
              width:"350px",
            //   border: "1px solid red",
              overflowY: "scroll",
              scrollbarColor: "black",
              scrollbarRadius: "10px",
              scrollbarWidth: "initial",
            }}
          >
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="IT services & Consultancy"
            />
            <label for="IT services & Consultancy">
              IT services & Consultancy (198)
            </label>
            <br></br>{" "}
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Software Product"
            />
            <label for="Software Product">Software Product (239)</label>
            <br></br>{" "}
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="E-Learning/E-Tech"
            />
            <label for="E-Learning/E-Tech">E-Learning/E-Tech (204)</label>
            <br></br>{" "}
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Hardware & Networking"
            />
            <label for="Hardware & Networking">
              Hardware & Networking (189)
            </label>
            <br></br>{" "}
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Emergancy Technolgies"
            />
            <label for="Emergancy Technolgies">
              Emergancy Technolgies (198)
            </label>
            <br></br>
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Engineering & Construction"
            />
            <label for="Engineering & Construction">
              Engineering & Construction (200)
            </label>
            <br></br>
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Pharma & Life-Science"
            />
            <label for="Pharma & Life-Science">
              Pharma & Life-Science (110)
            </label>
            <br></br>
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Industrial Equipment/Machinery"
            />
            <label for="Industrial Equipment/Machinery">
              Industrial Equipment/Machinery (98)
            </label>
            <br></br>
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Medical Services & Hospital"
            />
            <label for="Medical Services & Hospital">
              Medical Services & Hospital (165)
            </label>
            <br></br>
            <input
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
              type="checkbox"
              name="Insurance"
            />
            <label for="Insurance">Insurance (144)</label>
            <br></br>
          </div>
        </div>
        <hr></hr>
        <h3 style={{ textAlign: "left" }}>Experience</h3>
        <button
          style={{
            border: "1px solid gray",
            backgroundColor: "white",
            height: "40px",
            borderRadius: "30px",
            padding:"10px",
            marginLeft:"-250px"
          }}
        >
         
          Experienced (2140)
        </button>
        <br></br>
        <button
          style={{
            border: "1px solid gray",
            backgroundColor: "white",
            height: "40px",
            borderRadius: "30px",
            marginTop:"10px",
            padding:"10px",
            marginLeft:"-270px"

          }}
        >
          Entry Level  (694)
        </button>
        <hr></hr>
        <h3 style={{ textAlign: "left" }}>Nature of Business</h3>
        <button
          style={{
            border: "1px solid gray",
            backgroundColor: "white",
            height: "40px",
            borderRadius: "30px",
            padding:"10px",
            marginLeft:"-100px"
          }}
        >
          B2B (1731)
        </button>
    
        <button
          style={{
            border: "1px solid gray",
            backgroundColor: "white",
            height: "40px",
            borderRadius: "30px",
            marginTop:"10px",
            padding:"10px",
            marginLeft:"20px"
          }}
        >
          B2C  (953)
        </button>
        <button
          style={{
            border: "1px solid gray",
            backgroundColor: "white",
            height: "40px",
            borderRadius: "30px",
            marginTop:"10px",
            padding:"10px",
            marginLeft:"20px"

          }}
        >
          D2C  (9)
        </button>
        <hr></hr>
        <h3 style={{ textAlign: "left" }}>Job Posting Date</h3>
        <button
          style={{
            border: "1px solid gray",
            backgroundColor: "white",
            height: "40px",
            borderRadius: "30px",
            padding:"10px",
            marginLeft:"-180px"
          }}
        >
            7 Days
        </button>
    
        <button
          style={{
            border: "1px solid gray",
            backgroundColor: "white",
            height: "40px",
            borderRadius: "30px",
            marginTop:"10px",
            padding:"10px",
            marginLeft:"20px"
          }}
        >
           15 Days
        </button>
        <hr></hr>
      </div>
    </div>
  );
}
