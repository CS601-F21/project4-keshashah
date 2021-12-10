import React, { useState, useEffect } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {getAllEventsForUser, getUserProfileData, updateProfile} from '../../state/action-creators/eventAction.js';
import EventTable from '../EventPage/EventTable';
import Appbar from '../Reusables/Appbar.js';
import '../style.css';

const useStyles = makeStyles((theme) => ({
    wrapper: {
      background: "white",
      padding: "20px",
      margin: "10px",
      width: "80%",
      [theme.breakpoints.down("sm")]: {
        width: "95%",
      },
    },
  }));

function UpdateProfile(props) {
  const classes = useStyles();
  const loginid = useSelector((state) => state.event.loginid);
  const eventDetails = useSelector((state) => state.event.userEvents);
  const profileDetails = useSelector((state) => state.event.profile);
    const [rows, setRows] = useState([]);
    const [userName, setUserName] = useState(profileDetails.name);
    const [dob, setDOB] = useState(profileDetails.dob);
    const [email, setEmail] = useState(profileDetails.email);
    const [gender, setGender] = useState(profileDetails.gender);
    const [country, setCountry] = useState(profileDetails.country);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllEventsForUser(loginid));
        dispatch(getUserProfileData(loginid));
    }, [loginid])

    useEffect(() => {
       console.log(profileDetails);
       setUserName(profileDetails.name);
       setEmail(profileDetails.email);
       setDOB(profileDetails.dob);
       setCountry(profileDetails.country);
       setGender(profileDetails.gender);
    }, [profileDetails]);

    useEffect(() => {
        const rows = [];
        for(let item of eventDetails) {
          rows.push({id: item.eventId,
              name: item.name,
              description: item.description,
              startTime: item.startTime,
              endTime: item.endTime,
              ticketsSold: item.ticketsSold
          });
        }
        setRows(rows);
      }, [eventDetails]);

  const columns = [
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'description', label: 'Description', minWidth: 300 },
    { id: 'ticketsSold', label: 'Tickets Bought', minWidth: 100,
      format: (value) => value.toLocaleString('en-US'),
    },
  ];

  function ValidateDOB(dob) {
    var dateString = dob;
    var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\-(0[1-9]|1[0-2])\-((19|20)\d\d))$/;
    if (regex.test(dateString)) {
        var parts = dateString.split("-");
        var dtDOB = new Date(parts[1] + "-" + parts[0] + "-" + parts[2]);
        var dtCurrent = new Date();
        if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 14) {
           alert("Eligibility 14 years ONLY.")
            return false;
        }
        if (dtCurrent.getFullYear() - dtDOB.getFullYear() === 14) {
            if (dtCurrent.getMonth() < dtDOB.getMonth()) {
                return false;
            }
            if (dtCurrent.getMonth() === dtDOB.getMonth()) {
                if (dtCurrent.getDate() < dtDOB.getDate()) {
                    return false;
                }
            }
        }
        return true;
    } else {
        alert("Please enter a correct date and in dd-mm-yyyy format.");
        return false;
    }
  }

  const handleOnChangeUserName = (event) => {
    setUserName(event.target.value);
  };

  const handleOnChangeDOB = (event) => {
    setDOB(event.target.value);
  };
  const handleOnChangeGender = (event) => {
    setGender(event);
  };

  const handleOnChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleUpdateProfile = () => {
    const userProfile = {
      name: userName,
      dob,
      email,
      gender,
      country,
      };
      if(ValidateDOB(dob)) {
            dispatch(updateProfile(userProfile, loginid));
        }
    };

    return (
        <div>
            <Appbar  />

        <div style={{display: 'flex', width: '100%'}}>
        <div className="employeeProfile" style={{width: '50%'}}>
        <Grid className={classes.wrapper}>
          <div>
            <h3> User Profile </h3>
          </div>
            <TextField
              label="User Name"
              variant="outlined"
              placeholder="Full Name"
              InputLabelProps={{ shrink: true }}  
              fullWidth
              required
              style={{marginBottom: '20px'}}
              value={userName}
              onChange={(e) => {
                handleOnChangeUserName(e);
              }}
            />
            <TextField
              label="dateOfBirth"
              variant="outlined"
              placeholder="Date of birth in dd-mm-yyyy"
              InputLabelProps={{ shrink: true }}  
              fullWidth
              required
              style={{marginBottom: '20px'}}
              value={dob}
              onChange={(e) => {
                handleOnChangeDOB(e);
              }}
            />
            <TextField
              label="email"
              variant="outlined"
              InputLabelProps={{ shrink: true }}  
              placeholder="Email"
              disabled
              fullWidth
              style={{marginBottom: '20px'}}
              required
              value={email}
            />
            <FormControl component="fieldset" style={{paddingBottom: '20px', width: '100%'}}>
                <RadioGroup
                    aria-label="gender"
                    defaultValue="female"
                    value={gender}
                    style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}
                    onChange={(e) => {handleOnChangeGender(e.target.value)}}
                    name="radio-buttons-group"
                >
                    <FormControlLabel value={0} control={<Radio />} label="Male" />
                    <FormControlLabel value={1} control={<Radio />} label="Female" />
                    <FormControlLabel value={2} control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
            <TextField
              label="country"
              variant="outlined"
              placeholder="Country"
              InputLabelProps={{ shrink: true }}  
              fullWidth
              required
              style={{marginBottom: '20px'}}
              value={country}
              onChange={(e) => {
                handleOnChangeCountry(e);
              }}
            />
          <Button
            variant="contained"
            style={{
              height: "50px",
              alignSelf: "center",
              width: "100%",
              marginBottom: "10px",
              color: '#fff',
              background: '#1976d2'
            }}
            onClick={handleUpdateProfile}
          >
            Update
          </Button>
        </Grid>
      </div>
      <div style={{width: '50%', padding: '20px'}}>
        <div className="contents" style={{width: "100%", marginTop: '100px'}}>
          <EventTable columns={columns} rows={rows}/>
        </div>
      </div>
        </div>
        </div>
    );
}

export default UpdateProfile;
