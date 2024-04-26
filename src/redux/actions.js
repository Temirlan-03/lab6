// src/redux/actions.js
export const increment = () => {
  return {
    type: 'INCREMENT'
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT'
  };
};

export const FETCH_FEEDBACK_SUCCESS = 'FETCH_FEEDBACK_SUCCESS';

export const fetchFeedback = () => {
  return dispatch => {
    fetch('http://localhost:5000/feedback')
      .then(response => response.json())
      .then(feedback => {
        dispatch({
          type: FETCH_FEEDBACK_SUCCESS,
          payload: feedback
        });
      })
      .catch(error => console.error('Error fetching feedback:', error));
  };
};
