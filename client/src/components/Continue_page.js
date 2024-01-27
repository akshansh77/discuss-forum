import React from 'react';
import Navbar from './Navbar/Navbar';
import '../style.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const CountiunePage = ({ isSuccess }) => {
  // Assuming 'isSuccess' is a prop that determines whether OTP verification is successful

  //const destination = isSuccess ? '/success-page' : '/fail-page';

  return (
    <>
      {/* <Navbar/> */}
      <div className='card_signup'>
        <h1>Create Your Account</h1>
        <p>Please verify your email ID to continue. We have sent an OTP to this </p>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Enter OTP" variant="outlined" />
        </Box>
        <Link to="/successful-page">
          <Button variant="contained">
            Continue ➡
          </Button>
        </Link>
      </div>
    </>
  );
};

export default CountiunePage;
