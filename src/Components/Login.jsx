import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../Styles/Login.css"
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../Firebase/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";


function LoginPage() {
    const navigate=useNavigate()
    const [email,setEmail]=useState("")
    const [user, loading, error] = useAuthState(auth);
    const [password,setPassword]=useState("")

    const handleRegister=()=>{
      navigate("/register")
    }

    useEffect(() => {
      console.log(user,loading)
      if (loading) {
        // maybe trigger a loading screen
        return;
      }
      if (user) navigate("/");
    }, [user, loading]);

  return (
    <div>
        <div className='row11_ji'>
            <div className="card11_ji">
                <p>New to Naukri?</p>
                <ul>
                    <li className='text11_ji'>One click apply using naukri profile.</li>
                    <li className='text11_ji'>Get relevant job recommendations.</li>
                    <li className='text11_ji'>Showcase profile to top companies and consultants.</li>
                    <li className='text11_ji'>Know application status on applied jobs.</li>
                </ul>
                <div>
                        <button onClick={handleRegister} className='register_ji'>Register for Free</button>
                 </div>


                  <div className='imagebox11_ji'>
                     <div>
                        <img alt='img' src='//static.naukimg.com/s/5/105/i/register.png'/>
                     </div>
                  {/* <div></div> */}
                  </div>






            </div>


            




            <div className='card2_ji'>
            <p>Login</p>
            <form>
                <span className='span11_ji' >Email ID/Username</span>
                <input className='input11_ji' placeholder='Enter Email ID/UserName' type={"text"} onChange={(e)=>setEmail(e.target.value)} />
                <br/>
                <span className='span11_ji'>Password</span>
                <br/>
                <input className='input11_ji' placeholder='Enter Password' type={"password"} onChange={(e)=>setPassword(e.target.value)}/>
                <div className='forget11_ji'>
                <Link to="/reset"><span >Forgrt Password</span></Link>
                </div>
            </form>
            <div>
                <button onClick={() => logInWithEmailAndPassword(email, password)} className='Login11_ji'>Login</button>
                <p className='textp11_ji'>Use OTP to Login</p>
                <hr></hr>
                <button onClick={signInWithGoogle} className='google11_ji'>
                    <img className='googleimage11_ji'  alt='img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png' />
                    <p className='googlep11_ji'>Sign in with Google</p>
                </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage