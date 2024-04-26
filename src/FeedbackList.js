// src/FeedbackList.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchFeedback } from './actions';

const FeedbackList = ({ feedback, fetchFeedback }) => {
  useEffect(() => {
    fetchFeedback();
  }, [fetchFeedback]);

  return (
    <div>
      <h2>Отзывы</h2>
      <ul>
        {feedback.map((item) => (
          <li key={item.id}>{item.name}: {item.message}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  feedback: state.feedback
});

export default connect(mapStateToProps, { fetchFeedback })(FeedbackList);
