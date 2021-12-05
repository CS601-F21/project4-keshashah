import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Appbar from '../Reusables/Appbar.js';
import EventTable from './EventTable.js';
import {getAllEvents} from '../../state/action-creators/eventAction.js';
import "./../style.css";

const columns = [
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'description', label: 'Description', minWidth: 300 },
    { id: 'startTime', label: 'Start Time', minWidth: 170 },
    { id: 'endTime', label: 'End Time', minWidth: 170 },
    { id: 'ticketsSold', label: 'Tickets Sold', minWidth: 100,
      format: (value) => value.toLocaleString('en-US'),
    },
  ];
  
function AllEventsPage() {
    const eventDetails = useSelector((state) => state.event.events);
    const [rows, setRows] = useState([]);
    
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllEvents());
    }, []);

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
    
    return (
        <div>
            <Appbar />
            <div className="topitems">
                <h1>Showing All Events</h1>
                <div className="contents">
                    <EventTable columns={columns} rows={rows}/>
                </div>
            </div>
        </div>
    );
}

export default AllEventsPage;