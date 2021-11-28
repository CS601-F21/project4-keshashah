import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

const Appbar = () => {


  const [state, setState] = useState({
    left: false
  })

  const toggleSlider = (slider, open) => () => {
    setState({...state, [slider]: open});
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={toggleSlider('left', true)} />
          </IconButton>
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
  );
}

export default  Appbar;