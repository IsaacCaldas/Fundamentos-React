import React from "react";
import MemberFamily from "./MemberFamily";

/* { ...props } - ... = spread (pega todos os parâmetros passado no props, ou pelo menos deveria )*/
export default props => {

  return (

    <div>
      <h3>Membros da Família</h3>
      <MemberFamily name="Bernardo" surname={ props.surname } />
      <MemberFamily name="Tamires" { ...props } /> 
      <MemberFamily name="Pedro" surname={ props.surname } />
      <MemberFamily name="Eduardo" surname="Quadros" />

    </div>

  );

}