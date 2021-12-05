/* eslint-disable no-alert */
import axios from 'axios';
import server from '../../Config.js';
import {
  GET_ALL_EVENTS,
  GET_EVENT,
  LOGOUT_SUCCESS,
  TOTAL_PURCHASED,
  GET_ALL_EVENTS_BY_USER,
  GET_PROFILE,
  GET_ALL_USERS
 // import action types from here
} from './types';

export const getAllEvents = () => async (dispatch) => {
    axios.get(`${server}/api/event/`)
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

  export const getAllEventsForUser = (userId) => async (dispatch) => {
    axios.get(`${server}/api/event/user/${userId}`)
      .then((response) => {
        dispatch({
          type: GET_ALL_EVENTS_BY_USER,
          payload: response.data
        })
        return true;
      })
      .catch((err) => {
        alert(err);
        return false;
      });
  };

  export const transferTicket = (eventId, fromUserdId, toUserId, ticket) => async (dispatch) => {
    axios.post(`${server}/api/ticket/${toUserId}`, ticket)
      .then((response) => {
        alert(response.data);
        dispatch(getTotalPurchased(eventId, fromUserdId))
        return true;
      })
      .catch((err) => {
        alert(err);
        return false;
      });
  };

  export const getTotalPurchased = (eventId, userId) => async (dispatch) => {
    axios.get(`${server}/api/ticket/${eventId}/${userId}`)
      .then((response) => {
        dispatch({
          type: TOTAL_PURCHASED,
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
        dispatch(getEventById(ticket.eventId));
        dispatch(getTotalPurchased(ticket.eventId, ticket.userId));
        return true;
      })
      .catch((err) => {
        alert(err);
        return false;
      });
  };

  export const getUserProfileData = (userId) => async (dispatch) => {
    axios.get(`${server}/api/user/${userId}`)
      .then((response) => {
        dispatch({
          type: GET_PROFILE,
          payload: response.data
        })
        return true;
      })
      .catch((err) => {
        alert(err);
        return false;
      });
  };

  export const updateProfile = (user, id) => async (dispatch) => {
    axios.put(`${server}/api/user/${id}`, user)
      .then((response) => {
        alert(response.data);
        dispatch(getUserProfileData(id));
        return true;
      })
      .catch((err) => {
        alert(err);
        return false;
      });
  };

  export const deleteEvent = (eventId, history) => async (dispatch) => {
    axios.delete(`${server}/api/event/${eventId}`)
      .then((response) => {
        alert(response.data);
        dispatch(getAllEvents());
        history.push('/AllEvents')
        return true;
      })
      .catch((err) => {
        alert(err);
        return false;
      });
  };

  export const getAllUsers = () => async (dispatch) => {
    axios.get(`${server}/api/user/allEmails`)
      .then((response) => {
        dispatch({
          type: GET_ALL_USERS,
          payload: response.data
        })
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


