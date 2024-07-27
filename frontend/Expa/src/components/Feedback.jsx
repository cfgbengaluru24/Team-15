// FeedbackButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Feedback = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/feedback'); // Replace '/feedback' with your feedback form route
  };

  return (
    <button
      style={{
        position: 'fixed',
        right: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        zIndex: '1000', // Ensure it's above other content
      }}
      onClick={handleClick}
    >
      Feedback
    </button>
  );
};

export default Feedback;