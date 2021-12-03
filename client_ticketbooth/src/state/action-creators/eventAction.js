/* eslint-disable no-alert */
import axios from 'axios';
import server from '../../Config.js';
import {
  GET_ALL_EVENTS,
  GET_EVENT,
  LOGOUT_SUCCESS
 // import action types from here
} from './types';

export const getAllEvents = () => async (dispatch) => {
    axios.get(`${server}/api/event/all`)
      .then((response) => {
        dispatch({
          type: GET_ALL_EVENTS,
          payload: response.data
        })
        return true;
      })
      .catch((err) => {
        alert(err);
        return false;
      });
  };

 export const getEventById = (id) => async (dispatch) => {
    axios.get(`${server}/api/event/${id}`)
      .then((response) => {
        dispatch({
          type: GET_EVENT,
          payload: response.data
        })
        return true;
      })
      .catch((err) => {
        alert(err);
        return false;
      });
  };

  export const createEvent = (newevent, history) => async (dispatch) => {
    axios.post(`${server}/api/event/`, newevent)
      .then((response) => {
        alert(response.data);
        history.push('/AllEvents');
        return true;
      })
      .catch((err) => {
        alert(err);
        return false;
      });
  };


  export const purchaseTickets = (ticket, history) => async (dispatch) => {
    axios.post(`${server}/api/ticket/`, ticket)
      .then((response) => {
        alert(response.data);
        history.push('/api/event/{ticket.eventId}');
        return true;
      })
      .catch((err) => {
        alert(err);
        return false;
      });
  };

  export const logout = (history) => async (dispatch) => {
        dispatch({
          type: LOGOUT_SUCCESS,
        });
        history.push('/');
  };

