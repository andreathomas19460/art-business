import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './cardBtn.css';

function CardBtn(props) {
    return (
      <button
        onClick={props.onClick}
        className={`card-btn ${props['data-value']}`}
        {...props}
      />
    );
  }
  
  export default CardBtn;