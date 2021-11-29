import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Appbar from '../Reusables/Appbar.js';
import { useParams } from 'react-router-dom';
import {getEventById} from '../../state/action-creators/eventAction.js';
import {Button} from '@material-ui/core';

 function getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  }
  
  function getDifferenceInHours(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return Math.floor(diffInMs / (1000 * 60 * 60) % 24 );
  }
  
  function getDifferenceInMinutes(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return Math.floor(diffInMs / (1000 * 60) % 60);
  }
  
  function getDifferenceInSeconds(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return Math.floor(diffInMs / 1000)% 60;
  }

  function aptword(date1, date2) {
    const diffInMs = (date2-date1)/Math.abs(date2 - date1);
    return (diffInMs <= 0) ? "will start in" : "had started before";
  }

function ShowEventDetails() {
    const eventDetail = useSelector((state) => state.event.eventbyid);
    
    const dispatch = useDispatch();

    const {id} = useParams()

    useEffect(() => {
      dispatch(getEventById(id));
    }, [id]);

    // const [eventid, setEventid] = React.useState(null);
    

    // React.useEffect(() => {
    //     fetch(`http://localhost:8080/api/event/${id}`)
    //     .then(setEventid)
    // }, id);

    return (
        <div>
            <Appbar />
            <div className="half">
                <div className="halfleft">
                    <div className="contents">
                        <div>
                        <h1><u>{eventDetail.name}</u></h1>
                        <h5> ({eventDetail.description}) </h5>
                        <h3><i> {aptword(new Date(eventDetail.startTime),new Date())} </i></h3>
                        <h4> {getDifferenceInDays(new Date(eventDetail.startTime),new Date())} day(s),</h4>
                        <h4> {getDifferenceInHours(new Date(eventDetail.startTime),new Date())} hour(s),</h4>
                        <h4> {getDifferenceInMinutes(new Date(eventDetail.startTime),new Date())} minute(s),</h4>
                        <h4> {getDifferenceInSeconds(new Date(eventDetail.startTime),new Date())} second(s),</h4>
                        <br/>
                        <h1>{eventDetail.ticketsSold} tickets are already sold. </h1>
                        
                            <Button variant="contained"
                                // onClick={() => { viewEvent(row); }}
                            >
                                PURCHASE NOW
                            </Button>
                            </div>
                        
                    </div>
                    
                </div>
                <div className="halfright">
                    <div className="contents">
                    <div className="half">
                            <Button variant="contained"
                                // onClick={() => { viewEvent(row); }}
                            >
                                TRANSFER
                            </Button>

                            <Button variant="contained"
                                // onClick={() => { viewEvent(row); }}
                            >
                                EDIT
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowEventDetails;