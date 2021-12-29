import React, { cloneElement } from "react";

/* { ...props } - ... = spread (pega todos os parâmetros passado no props, ou pelo menos deveria )*/
export default (props) => {

  return (

    <div>
      <h3>Membros da Família</h3>
      {/* Esse comando só passa 1 elemento
       { React.cloneElement(props.children, props) }
      */}
      { 
        props.children.map((child, i) => {
          return cloneElement(child, { 
            ...props,
            key: i
          });
        })
      }
    </div>

  );

}