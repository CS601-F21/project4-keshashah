import React, { useState } from 'react';import "./../style.css";
import Appbar from '../Reusables/Appbar.js';
import Stack from '@mui/material/Stack';
import DateTimePicker from '@mui/lab/DateTimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {TextField,Grid} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {Button} from '@material-ui/core';
import {createEvent} from '../../state/action-creators/eventAction.js';

const CreateEventPage = () => {
    
  const onemonthafter = new Date();
    onemonthafter.setDate(onemonthafter.getDate() + 30);
    
    const loginid = useSelector((state) => state.event.loginid);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const [startvalue, setStartValue] = useState(new Date());
    const [endvalue, setEndValue] = useState(new Date());

    const handleStartChange = (newValue) => {
      setStartValue(newValue);
      // const endValue = new Date(newValue);
      // setEndValue(endValue.setHours(endValue.getHours()+3));
    };

    const handleEndChange = (newValue) => {
        setEndValue(newValue);
      };

    const history = useHistory();
    const dispatch = useDispatch();

    const onCreateEventButtonClick = () => {   
        const newevent = {
          name, 
          description,
          startTime:startvalue.toLocaleString("en-US", {timeZone: "America/Los_Angeles"}),
          endTime:endvalue.toLocaleString("en-US", {timeZone: "America/Los_Angeles"}),
          ownerId: loginid
        }
        dispatch(createEvent(newevent, history));
    };
  
    return (
      <div>
          <Appbar />
          
          <div className="topitems">
              <h1>Create New Event Page</h1>
              
              <Grid style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column',  alignItems: 'center' }}>  
                 
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}> 

                        <TextField
                            required
                            fullWidth
                            id="outlined-required"
                            label="Event Name:"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        
                        <TextField
                            fullWidth
                            multiline 
                            rows={2}
                            id="outlined"
                            label="Event Description:"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                        <DateTimePicker
                            label="Start Date&Time"
                            value={startvalue}
                            onChange={handleStartChange}
                            renderInput={(params) => <TextField fullWidth {...params} />}
                        />

                        <DateTimePicker
                            label="End Date&Time"
                            value={endvalue}
                            onChange={handleEndChange}
                            renderInput={(params) => <TextField  fullWidth {...params} />}
                        />

                        <Button variant="contained"
                                onClick={(e) => { onCreateEventButtonClick(e); }}>
                                    Create
                        </Button>
                      </Stack> 
                    </LocalizationProvider>
             </Grid> 
        </div>

      </div>
    );
};

export default CreateEventPage;