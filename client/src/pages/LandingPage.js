// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Navbar from '../components/Navbar/Navbar';


const LandingPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="homepage">
        <div>
          For Indian Users Only
        </div>
        <div>
          <h1>Start posting anonymously where no one will judge.</h1>
        </div>
        <p>Welcome to Stranger discussion forum</p>
        <Link to="/create-account">
          <Button variant="contained">
            Create Your Account ➡
          </Button>
        </Link>
        <h4 className='last_head'>Already have an account? <Link to="/login">Login</Link></h4>
      </div>
    </>
  );
};

export default LandingPage;
