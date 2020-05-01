import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.css';


function artCard(props) {
  return (
    <div className="row">
<div className="col s12 m6">
  <div className="card">
    <div className="card-image">
      <img alt={props.title} src={props.image} />
      <span className="card-title">{props.title}</span>
      <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
    </div>
    <div className="card-content">
      <p>{props.size}</p>
      <p>{props.price}</p>
      <p>{props.description}</p>
    </div>
  </div>
</div>
</div>
  );
}


itemCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  size: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string
}

export default artCard;