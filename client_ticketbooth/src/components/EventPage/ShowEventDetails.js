import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import Appbar from '../Reusables/Appbar.js';
import { useParams } from 'react-router-dom';
import {deleteEvent, getEventById, getAllUsers} from '../../state/action-creators/eventAction.js';
import {Button, TextField} from '@material-ui/core';
import {purchaseTickets, getTotalPurchased, transferTicket} from '../../state/action-creators/eventAction.js';
import { useHistory } from 'react-router-dom';
   
function ShowEventDetails() {
    const eventDetail = useSelector((state) => state.event.eventbyid);
    const loginid = useSelector((state) => state.event.loginid);
    const totalPurchased = useSelector((state) => state.event.totalPurchased);
    const allUsers = useSelector((state) => state.event.allUsers);
    const dispatch = useDispatch();
    const history = useHistory();
    const {id} = useParams();
    const [isPurchase, setIsPurchase] = useState(true);
    const [eventData, setEventData] = useState(eventDetail);
    const [totalTickets, setTotalTickets] = useState(totalPurchased);
    const [allUsersList, setAllUsersList] = useState([]);
    const [toUser, setToUser] = useState();
    const [transfer, setTransfer] = useState(1);

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
        if (diffInMs <= 0) {
            setIsPurchase(true);
        } else {
            setIsPurchase(false);
        }
        return;
      }
    

    useEffect(() => {
      dispatch(getEventById(id));
    }, [id]);

    useEffect(() => {
        setAllUsersList(allUsers);
        setToUser(allUsers[0]);
    }, [allUsers])

    useEffect(() => {
      aptword(new Date(eventDetail.startTime),new Date());
      setEventData(eventDetail);
    }, [eventDetail]);

    useEffect(() => {
        dispatch(getTotalPurchased(id, loginid));
        dispatch(getAllUsers(loginid));
        
    }, [loginid]);

    useEffect(() => {
        setTotalTickets(totalPurchased);
    }, [totalPurchased])

    const [tickets, setTickets] = useState(1);

    const onPurchaseButtonClick = () => {
        const newtickets = {
            userId: loginid,
            eventId: parseInt(id),
            count: parseInt(tickets)
          }
        dispatch(purchaseTickets(newtickets,history));
    };

    const onTransfer = (e) => {
        const newtickets = {
            userId: loginid,
            eventId: parseInt(id),
            count: parseInt(transfer),
          }
          dispatch(transferTicket(id, loginid, toUser, newtickets));
    }
    
    return (
        <div>
            <Appbar />
            <div className="half">
                <div className="halfleft">
                    <div className="contents" style={{paddingTop: "15%"}}>
                        <div>
                        <h1><u>{eventDetail.name}</u></h1>
                        <h5> ({eventDetail.description}) </h5>
                        <h3><i>{isPurchase ? 'will start in' : 'had started before'}  </i></h3>
                        <h4> {getDifferenceInDays(new Date(eventDetail.startTime),new Date())} day(s),</h4>
                        <h4> {getDifferenceInHours(new Date(eventDetail.startTime),new Date())} hour(s),</h4>
                        <h4> {getDifferenceInMinutes(new Date(eventDetail.startTime),new Date())} minute(s),</h4>
                        <h4> {getDifferenceInSeconds(new Date(eventDetail.startTime),new Date())} second(s),</h4>
                        <br/>
                        <h1>{eventDetail.ticketsSold} tickets are already sold. </h1>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="halfright">
                    <div className="contents" style={{paddingTop: "15%"}}>
                    <div className="half" style={{flexDirection: 'column' }}>
                        <h2 style={{textDecoration: 'underline'}}>Purchase new tickets</h2>
                            <div style={{display: 'flex', marginBottom: '20px', width: '100%', justifyContent: 'space-around'}}>
                                <TextField style = {{width:"20%"}}
                                    required
                                    id="outlined-required"
                                    label="Count:"
                                    type="number"
                                    InputProps={{
                                        inputProps: { 
                                            max: 10, min: 1
                                        }
                                    }}
                                    value={tickets}
                                    onChange={(e) => setTickets(e.target.value)}
                                />    
                            
                                <Button variant="contained" disabled={!isPurchase}
                                        onClick={() => { onPurchaseButtonClick(); }}>
                                    PURCHASE NOW
                                </Button>
                            </div>
                        <h2 style={{textDecoration: 'underline'}}>Transfer My Tickets</h2>
                        <div style={{display: 'flex', marginBottom: '20px', width: '100%'}}>
                             <TextField style = {{width:"20%"}}
                                required
                                id="outlined-required"
                                label="Count:"
                                fullWidth
                                type="number"
                                InputProps={{
                                    inputProps: { 
                                        max: totalTickets, min: 1
                                    }
                                }}
                                value={transfer}
                                onChange={(e) => setTransfer(e.target.value)}
                            />   
                            <TextField
                                label="Select User to transfer"
                                variant="outlined"
                                placeholder = "Select User to transfer"
                                style={{marginRight: '20px'}}
                                fullWidth
                                required
                                value={toUser}
                                onChange={(e) => {
                                    setToUser(e.target.value)
                                }}
                                select
                                >
                                    {allUsersList.map((item, index) => {
                                        return (
                                            <MenuItem value={item}>{item}</MenuItem>
                                        )
                                    })}
                                </TextField>  
                                <Button variant="contained" disabled={(totalTickets > 0 && isPurchase) ? false : true}
                                    onClick={(e) => { onTransfer(e); }}
                                >
                                    TRANSFER
                                </Button>
                            </div>
                            <h2 style={{textDecoration: 'underline'}}>Modify the Event</h2>
                            <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
                                <Button variant="contained" disabled={((eventData) ? !(loginid === eventData.ownerId) : true)}
                                    onClick={() => { history.push('/EditEvent') }}
                                >
                                    EDIT
                                </Button>
                                <Button variant="contained" disabled={(( eventData) ? !(loginid === eventData.ownerId) : true)}
                                    onClick={() => { dispatch(deleteEvent(parseInt(id), history)) }}
                                >
                                    DELETE
                                </Button>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowEventDetails;