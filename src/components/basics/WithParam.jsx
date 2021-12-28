import React from "react";

//props = propriedades

// as variáveis podem ser declaradas daquelas duas maneiras... ou direta, ou criando outra para resumir.

// os props são só leitura, então se quiser retornar um valor dos parametros modificados, criar uma nova variável e retornar a mesma criada. 

export default function WithParam(props){

  const status = props.testNote >= 6 ? 'Aprovado' : ' de Recuperação';

  const noteInt = Math.ceil(props.testNote)

  return (
      <div>
        <h2>{ props.title }</h2>
        <p>
          <strong>{ props.student } </strong>tem nota { noteInt } na matéria.<br/>
          { props.student } está <strong>{ status }</strong>.
        </p> 
      </div>
    );

}