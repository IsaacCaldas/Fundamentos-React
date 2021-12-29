import './Card.css'
import React from 'react';

export default props => {

  return (

    <div className="card">
      <div className="title">
        <h3>{ props.title }</h3>
      </div>
      <div className="content">
        <p>{ props.children }</p> 
      </div>
    </div>

  );

}