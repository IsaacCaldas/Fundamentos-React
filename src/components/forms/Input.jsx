import "./Input.css";

import React, { useState } from "react";

export default props => {

  const [val, setVal] = useState('Inicial');

  function whenChange(e) {

    setVal(e.target.value);

  }

  return (

    <div>
      <h3>{ val }</h3>
      <div className="form">
        <input value={ val } onChange={ whenChange } />
        <h5>Apenas leitura:</h5>
        <input value={ val } readyOnly />
        <h5>Componente não controlado:</h5> {/* Uncontrolled component */}
        <input value={ undefined } />
      </div>
    </div>

  );

}

{/* 
  É melhor não usar os uncontrolled component, pois não dá para vincular com nenhum estado.
*/}