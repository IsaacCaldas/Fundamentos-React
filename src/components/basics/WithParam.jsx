import React from "react";

//props = propriedades

// as variáveis podem ser declaradas daquelas duas maneiras... ou direta, ou criando outra para resumir.

export default function WithParam(props){

  const status = props.testNote >= 6 ? 'Aprovado' : ' de Recuperação';

  return (
      <div>
        <h2>{ props.title }</h2>
        <p>
          <strong>{ props.student } </strong>tem nota { props.testNote } na matéria.<br/>
          { props.student } está <strong>{ status }</strong>.
        </p> 
      </div>
    );

}