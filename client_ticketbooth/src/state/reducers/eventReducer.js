import {
    GET_ALL_EVENTS
  } from '../action-creators/types';
  
  const initialState = {  
    // define initial state here
   events: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_EVENTS:
        return {
          ...state,
          events: action.payload
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  