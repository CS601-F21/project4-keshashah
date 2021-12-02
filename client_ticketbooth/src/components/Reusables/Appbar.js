import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@material-ui/core/styles';
import MobileeRightMenuSlider from '@material-ui/core/Drawer';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  ListItemIcon,
  ListItem,
  ListItemText,
  Avatar,
  Divider,
  List,
 } from '@material-ui/core';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

 const useStyles = makeStyles(theme=>({
  menuSliderContainer: {
      width: '100%',
      minWidth: '250px',
      paddingTop: '64px',
      background: '#222',
      height: '100%'
  },
  avatar: {
      display: 'blue',
      margin: '0.5rem auto',
      marginBottom: '4rem',
      width: theme.spacing(13),
      height: theme.spacing(13),
  },
  listItem: {
      color: '#fff'
  }
}));

const menuItems = [
  {
      listIcon: <ConfirmationNumberIcon />,
      listText: 'Upcoming Events',
      listPath: '/UpcomingEvents'
  },
  {
      listIcon: <PersonIcon />,
      listText: 'Profile',
      listPath: '/profile'
  },
  {
      listIcon: <LogoutIcon />,
      listText: 'Logout',
      listPath: '/'
  },
]

const Appbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const classes = useStyles();

  const [state, setState] = useState({
    left: false
  })

  const toggleSlider = (slider, open) => () => {
    setState({...state, [slider]: open});
  };

  const sideList = slider => (
    <Box component='div'
        className={classes.menuSliderContainer}
        onClick={toggleSlider(slider, false)}
    >
        <Avatar className={classes.avatar} alt='Kesha Shah' />
        <Divider />
        <List>
            {menuItems.map((listItem, key) => (
                    <ListItem button key={key} component={Link} to={listItem.listPath}>
                    <ListItemIcon className={classes.listItem}>{listItem.listIcon}</ListItemIcon>
                    <ListItemText className={classes.listItem} primary={listItem.listText} />
                </ListItem>
            ))}
        </List>
    </Box>
);

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
          <MobileeRightMenuSlider open={state.left}
                onClose={toggleSlider('left', false)}
                anchor='left'>
                {sideList('left')}
          </MobileeRightMenuSlider>
          <Typography
            variant="h6"
            noWrap
            component="div"
            align="center"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            My TicketBooth Application
          </Typography>
          {/* <img style={{cursor: 'pointer'}} width='120' height='80' alt='' onClick={() => {history.push('/');}}/> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default  Appbar;