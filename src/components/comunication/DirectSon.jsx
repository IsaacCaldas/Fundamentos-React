import React from "react";

export default props => {

  return (

    <div>
      <span><strong>{props.name},</strong> </span>
      <span>{props.age} anos</span>
      <div>{props.bool ? 'True' : 'False'}!</div>
    </div>

  );

}