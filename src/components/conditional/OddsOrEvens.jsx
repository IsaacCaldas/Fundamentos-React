import './OddsOrEvens.css';

import React from "react";

export default props => {

  const oddOrEven = props.number % 2 === 0;

  return (

    <div>
      <h3>Seu número é</h3>
      <div className="labelOoE">
        { oddOrEven ? <span>Par</span>: <span>Ímpar</span>}
      </div>
    </div>

  );

}