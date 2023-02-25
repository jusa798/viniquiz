import React from 'react';
import './AnswerChoice.css';

function AnswerChoice(props) {
  return (
    <button
      className={`answer-choice-btn ${props.active ? 'active' : ''} ${
        props.isWrong ? 'red' : ''
      }`}
      onClick={() => props.callback(props.letter)}>
      <div className='context-text'>{props.content}</div>
    </button>
  );
}

export default AnswerChoice;
