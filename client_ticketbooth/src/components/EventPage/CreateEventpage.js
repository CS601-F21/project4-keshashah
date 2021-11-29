import React from 'react';
import "./../style.css";
import Appbar from '../Reusables/Appbar.js';
import { useHistory } from 'react-router-dom';
import ViewEventLayout from './ViewEventLayout.js';
import {Button} from '@material-ui/core';

const CreateEventPage = () => {

    const history = useHistory();

    const onCreateEventButtonClick = () => {     
        history.push('/');
      };

    return (
      <div>
          <Appbar />
          
          <div className="topitems">
              <h1>Create New Event Page</h1>
              <ViewEventLayout />
              <br/>
              <br/>
              <Button variant="contained"
                       onClick={(e) => { onCreateEventButtonClick(e); }}>
                        Create
               </Button>
        </div>

      </div>
    );
};

export default CreateEventPage;