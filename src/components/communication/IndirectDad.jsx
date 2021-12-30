import React, { useState } from "react";
import IndirectSon from "./IndirectSon";

{/* Em REACT para alteração de valores enviados do componente filho para o pai, é necessário o hook useState para criar um componente com estado. */}

export default props => {

  const [name, setName] = useState('?'), 
      [age, setAge] = useState(0), 
      [bool, setBool] = useState(true);

  function getInfo(name, age, bool){
    setName(name);
    setAge(age);
    setBool(bool);
  }

  return (

    <div>
      <div>
        Pai
      </div>
      <span><strong>{ name }</strong> tem </span>
      <span>{ age } anos</span>
      <div>{ bool ? 'Verdadeiro' : 'Falso' }</div>
      <IndirectSon whenClick={getInfo}></IndirectSon>
    </div>

  );

}