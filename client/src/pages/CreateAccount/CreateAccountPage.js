import React from 'react';
import '../../style.css';
import "./createAccount.css"
import { Rocket,MoveRight, Verified } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const CreateAccountPage = () => {
  const navigate = useNavigate();

  return (
    <div className='container'>
      {/* <div className='formContainer'>
      <Rocket />
      <h3>Create Your Account</h3>
        <input className='inputBox' placeholder='Enter your username'/>
      <input className='inputBox' placeholder='Enter your email'/>
      <div className='otpverify'>
      <p>Please verify your Email Id to continue.</p>
        <p>We have sent an OTP to this Email Id</p>
      </div>
     
      <input className='inputBox' placeholder='Enter OTP'/>
      <button className='rounded'>Create Account <MoveRight /></button>
      </div> */}

      {/* Account Created Succesfully */}
      <div className='formContainer'>
      <Verified/>
      <h3 className='headingCreatedAccount'>Account created successfully.</h3>
        {/* <input className='inputBox' placeholder='Enter your username'/>
      <input className='inputBox' placeholder='Enter your email'/> */}
      
     
      {/* //<input className='inputBox' placeholder='Enter OTP'/> */}
      <button className='rounded' onClick={()=>navigate("/home")}>Create Your First Post  <MoveRight /></button>
      </div>
    </div>
  );
};



export default CreateAccountPage;
