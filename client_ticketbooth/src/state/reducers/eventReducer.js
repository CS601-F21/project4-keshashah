import {
    GET_ALL_EVENTS,
    GET_EVENT
  } from '../action-creators/types';
  
  const initialState = {  
    // define initial state here
   events: [],
   eventbyid: {}
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
      default:
        return state;
    }
  };
  
  export default reducer;
  