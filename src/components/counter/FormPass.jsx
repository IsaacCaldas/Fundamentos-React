import React from "react";

{/* Esse '+' do '+e.target...' é para conversão para numérico */}

export default (props) => {

  return (

    <div>
      <div>
        <label htmlFor="numberInput">Número inicial: </label>
        <input id="numberInput" type="number" value={props.newNumber} onChange={e => props.setNumber(+e.target.value)} />
      </div>
      <div>
        <label htmlFor="passInput">Passo: </label>
        <input id="passInput" type="number" value={props.pass} onChange={e => props.setPass(+e.target.value)} />
      </div>
    </div>

  );

}

