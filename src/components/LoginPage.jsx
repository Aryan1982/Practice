import React from 'react'
import "./LoginPage.css"
import GoogleIcon from "./google.svg"


const Alert=()=>{
  alert("Sabar Rakho..ye button abhi show ke lie hai")
}
const LoginPage = () => {
  return (
    <div className="LoginPageBody">
      <div className="LoginPageCard">
        <div className="signindiv">SIGN-IN</div>
        <div className="emailinput">
          <h1>EMAIL-ID</h1>
          <input type="text"></input>
        </div>
        <button className="requestOTPbtn" onClick={Alert}>REQUEST OTP</button>
        <div className="signUpOptionDiv">
          <div className='orsignupwith'><h2>or sign up with</h2><div className="cardFooter">
          <img src={GoogleIcon}/><h1>Google</h1>
          </div>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default LoginPage;
