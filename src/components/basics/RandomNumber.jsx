import React from "react";

export default (props) => {

  /*const min = props.min;
  const max = props.max;*/
  // DESTRUCTOR JS
  const { min, max } = props;

  let number = parseInt(Math.random() * (max - min));
  
  return (
    <div>
      <h3>Número aleatório</h3>
      <h4>Valor mínimo: { min }</h4>
      <h4>Valor máximo: { max }</h4>
      <p>Número sorteado: { number }</p>
    </div>
  );
}