import React, { PureComponent } from 'react'
import "../Styles/Register.css"

export class Register extends PureComponent {
  render() {
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
                        <input className='input_ji' placeholder='What is your name?'/>
                    </div>
                    <div className='inputdiv_ji'>
                        <span className='span_ji'>Email Id</span>
                        <br />
                        <input className='input_ji' type="text" placeholder='Tell us your Email Id?'/>
                    </div>
                    <div className='inputdiv_ji'>
                        <span className='span_ji'>Email Id</span>
                        <br />
                        <input className='input_ji' type="text" placeholder='Tell us your Email Id?'/>
                        <br />
                        <span className="_at">We'll send you relevant jobs in your mail</span>
                    </div>
                    <div className='inputdiv_ji'>
                        <span className='span_ji'>Password</span>
                        <br />
                        <input className='input_ji' type="text" maxLength={6} placeholder='Tell us your Email Id?'/>
                        <br />
                        <span className="_at">Minimum 6 characters required</span>
                    </div>
                    <div className='inputdiv_ji'>
                        <span className='span_ji'>Mobile Number</span>
                        <br />
                        <input className='input_ji' type="Number" placeholder='Mobile Number' />
                        <br />
                        <span className="_at">Recruiters will call you on this number</span>
                    </div>

                </form>



                <div className='inputdiv_ji'>
                        <span className='span_ji'>Resume</span>
                        <br />
                        <div className='card_ji'>
                            <div>
                                <button className='button_ji'>Resume</button>
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
                            <p>Send me important update in whatsapp mai nahi karta</p>
                        {/* </div> */}
                        {/* <div> */}
                            <img className='checkboximage_ji' src='https://static.naukimg.com/s/7/104/assets/images/whatsappicon.0011d8c1.png'/>
                        {/* </div> */}
                        {/* <div> */}
                            <p>Whatsapp</p>
                        {/* </div> */}
                    </div>



                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Register