
import "../Styles/Register.css"

import React, {  useEffect, useState } from 'react'
import {auth,registerWithEmailAndPassword,signInWithGoogle,} from '../Firebase/Firebase'
// import { handleRegister } from '../Firebase/User'
import { useNavigate } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth";


import "../Styles/Register.css"

const RegisterPage=()=>{
    
    const navigate=useNavigate()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [phone,setPhone]=useState("")
    const [name,setName]=useState("")
    const [user, loading, error] = useAuthState(auth);
   


    const register=()=>{
        if(name==="" || email==="" ||password==="" || phone===""){
            alert("please fill all detail")
        }
        else{
            registerWithEmailAndPassword(name, email, password);
        }
       
    }

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/");
      }, [user, loading]);


     


    return (
      <div>
        <div className='container_ji'>
            <div className='sidebar_ji'>
                <img className='sliderimage_ji' src='https://static.naukimg.com/s/7/104/assets/images/green-boy.c8b59289.svg'/>
                <div>
                <h2 className='headding1_ji'>On registering you can</h2>
                <ul className='ul1_ji'>
                    <li>
                        <p className='text1_ji'>Build your profile and let recruiters find you</p>
                    </li>
                    <li>
                        <p className='text1_ji'>Get job postings delivered right to your email</p>
                    </li>
                    <li>
                        <p className='text1_ji'>Find a job and grow your career</p>
                    </li>
                </ul>
                </div>
            </div>
            <div className='rightbar_ji'>
                <div className='rightbar_inner_div_ji'>
                <h1 className='headding2_ji'>Find a job & grow your career</h1>
                <form>
                    <div className='inputdiv_ji'>
                        <span className='span_ji'>Full Name</span>
                        <br />
                        <input className='input_ji' onChange={(e)=>setName(e.target.value)} placeholder='What is your name?'/>
                    </div>
                    <div className='inputdiv_ji'>
                        <span className='span_ji'>Email Id</span>
                        <br />
                        <input className='input_ji' type="text" placeholder='Tell us your Email Id?' onChange={(e)=>setEmail(e.target.value)} />
                        <br />
                        <span className="_at">We'll send you relevant jobs in your mail</span>
                    </div>
                    <div className='inputdiv_ji'>
                        <span className='span_ji'>Password</span>
                        <br />
                        <input className='input_ji' type="text" minLength={6} placeholder='Tell us your Email Id?' onChange={(e)=>setPassword(e.target.value)} />
                        <br />
                        <span className="_at">Minimum 6 characters required</span>
                    </div>
                    <div className='inputdiv_ji'>
                        <span className='span_ji'>Mobile Number</span>
                        <br />
                        <input className='input_ji' type="Number" placeholder='Mobile Number' onChange={(e)=>setPhone(e.target.value)} />
                        <br />
                        <span className="_at">Recruiters will call you on this number</span>
                    </div>

                </form>



                <div className='inputdiv_ji'>
                        <span className='span_ji'>Resume</span>
                        <br />
                        <div className='card_ji'>
                            <div>
                                <input className='custom-file-upload' type="file" ></input>
                               
                            </div>
                            <div className='button-div_ji'>DOC, DOCx, PDF, RTF | Max: 2 MB</div>
                        </div>
                        <br />
                        <span className="_at">Recruiters give first preference to candidates who have a resume</span>
                    </div>


                    <div className='checkbox_ji'>
                        {/* <div> */}
                           <input className='checkboxinput_ji' type={"checkbox"} />
                        {/* </div> */}
                        {/* <div> */}
                            <p>Send me important update in whatsapp  </p>
                        {/* </div> */}
                        {/* <div> */}
                            <img className='checkboximage_ji' alt='img' src='https://static.naukimg.com/s/7/104/assets/images/whatsappicon.0011d8c1.png'/>
                        {/* </div> */}
                        {/* <div> */}
                            <p>Whatsapp</p>
                        {/* </div> */}
                    </div>

                     
                     <div>
                        <button className='register_ji' onClick={register} >Register Now</button>
                     </div>

                </div>
            </div>


            <div className='googlebar_ji'>
                <p  className='span_ji'>Continue with</p>
                <button className='googlebarbutton_ji' onClick={signInWithGoogle} >
                    <img className='googleimage_ji' alt='img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png' />
                    <p>Google</p>
                </button>
            </div>







        </div>
      </div>
    )
  }


export default RegisterPage