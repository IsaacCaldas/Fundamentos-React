import './Card.css'
import React from 'react';

export default props => {

  const cardStyle = {
    backgroundColor: props.color || '#7B68EE',
    borderColor: props.color || '#7B68EE',
  }

  return (

    <div className="card" style={ cardStyle }>
      <div className="title">
        <h3>{ props.title }</h3>
      </div>
      <div className="content">
        <p>{ props.children }</p> 
      </div>
    </div>

  );

}