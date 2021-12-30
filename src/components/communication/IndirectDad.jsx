import React from "react";
import IndirectSon from "./IndirectSon";

export default props => {

  let name = '', age = 0, bool = true;

  function getInfo(name, age, bool){
    name = name;
    age = age;
    bool = bool;
  }

  return (

    <div>
      <div>
        Pai
      </div>
      <span><strong>{ name } tem </strong></span>
      <span>{ age } anos</span>
      <div>{ bool ? 'Verdadeiro' : 'Falso' }</div>
      <IndirectSon whenClick={getInfo}></IndirectSon>
    </div>

  );

}