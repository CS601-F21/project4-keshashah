import React from 'react';
import './../style.css';
import Login from './Login.js';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const LandingPage = () => {
    return (
      <div>
        <Box sx={{ flexGrow: 2 }}>
        <AppBar position="static">
        <Toolbar>
        <Typography
            variant="h6"
            noWrap
            component="div"
            align="center"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            My TicketBooth Application
          </Typography>
          </Toolbar>
        </AppBar>
        </Box>



        <div className='mainarea'>
            <Login />
        </div>
      </div>
    );
  };
  
  export default LandingPage;