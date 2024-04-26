// src/reducers.js
import { FETCH_FEEDBACK_SUCCESS } from './actions';

const initialState = {
  feedback: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FEEDBACK_SUCCESS:
      return {
        ...state,
        feedback: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
