import React from 'react';
import "./../style.css";
import Appbar from '../Reusables/Appbar.js';
import {TextField,Grid, Button} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import DateTimePicker from '@mui/lab/DateTimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const CreateEventPage = () => {

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

    const history = useHistory();

    const onCreateEventButtonClick = () => {
        
        history.push('/');
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
                            defaultValue=""
                        />
                        
                        <TextField
                            fullWidth
                            multiline 
                            rows={2}
                            id="outlined"
                            label="Event Description:"
                            defaultValue=""
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