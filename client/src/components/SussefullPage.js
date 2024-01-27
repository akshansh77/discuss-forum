import React from 'react';
import Navbar from './Navbar/Navbar';
import '../style.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


const SussefullPage = () => {
  return (
    <>
      {/* <Navbar/> */}
      <div className='card_signup'>
        <h1>Account Created Sussesfully</h1>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Create Your Frist Post ➡" variant="outlined" />
        </Box>
        <Link to="/dashboard-page">
          <Button variant="contained">
            Countiune ➡
          </Button>
        </Link>
      </div>
    </>
  );
};

export default SussefullPage;
