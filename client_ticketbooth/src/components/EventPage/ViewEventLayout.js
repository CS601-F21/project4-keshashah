import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Stack from '@mui/material/Stack';
import DateTimePicker from '@mui/lab/DateTimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {TextField,Grid} from '@material-ui/core';
import PropTypes from 'prop-types';

export default function ViewEventLayout(props) {

    const onemonthafter = new Date();
    onemonthafter.setDate(onemonthafter.getDate() + 30)
    
    const [startvalue, setStartValue] = React.useState(new Date(onemonthafter));
    const [endvalue, setEndValue] = React.useState(new Date(onemonthafter.setHours(onemonthafter.getHours() +3)));

    const handleStartChange = (newValue) => {
      setStartValue(newValue);
      const endValue = new Date(newValue);
      setEndValue(endValue.setHours(endValue.getHours()+3));
    };

    const handleEndChange = (newValue) => {
        setEndValue(newValue);
      };

    return (
        <div>

        <Grid style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column',  alignItems: 'center' }}>  
                 
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}> 

                        <TextField
                            required
                            fullWidth
                            id="outlined-required"
                            label="Event Name:"
                            defaultValue={props.name}
                        />
                        
                        <TextField
                            fullWidth
                            multiline 
                            rows={2}
                            id="outlined"
                            label="Event Description:"
                            defaultValue={props.description}
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

                      </Stack> 
                    </LocalizationProvider>
             </Grid> 


        </div>
    );
};
ViewEventLayout.propTypes = {
    // ...prop type definitions here
    name: PropTypes.string,
    description: PropTypes.string,
    startTime: PropTypes.string,
    endTime: PropTypes.string,
  };
