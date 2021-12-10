import {
    GET_ALL_EVENTS,
    GET_EVENT,
    TOTAL_PURCHASED,
    GET_PROFILE,
    GET_ALL_USERS,
    GET_ALL_EVENTS_BY_USER,
    LOGIN_USER
  } from '../action-creators/types';
  
  const initialState = {  
    // define initial state here
   events: [],
   userEvents: [],
   eventbyid: {},
   loginid: {},
   totalPurchased: 0,
   profile: {},
   allUsers: []
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_EVENTS:
        return {
          ...state,
          events: action.payload
        };
      case GET_EVENT:
        return {
          ...state,
          eventbyid: action.payload
        };
      case TOTAL_PURCHASED: 
        return {
          ...state,
          totalPurchased: action.payload
        }
      case GET_ALL_EVENTS_BY_USER: 
      return {
        ...state,
        userEvents: action.payload
      }
      case GET_PROFILE:
        return {
          ...state,
          profile: action.payload
        }
      case LOGIN_USER:
        return {
          ...state,
          loginid: action.payload
        }
      case GET_ALL_USERS:
        return {
          ...state,
          allUsers: action.payload
        }
      default:
        return state;
    }
  };
  
  export default reducer;
  