/* eslint-disable no-alert */
import axios from 'axios';
import server from '../../Config.js';
import {
  GET_ALL_EVENTS
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