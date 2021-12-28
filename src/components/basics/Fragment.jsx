import React from "react";

/* 
  NORMALMENTE USADO QUANDO NÃO QUER RETORNAR DENTRO DE UMA DIV.

  <> and </> == <React.Fragment> and </React.Fragment>

  Há uma única diferença: 
  - <> não suporta props (<key='1'>);
  - <React.Fragment> suporta props (<React.Fragment key='1'>);

  Normalmente não terá propriedades nessas tags, então é melhor usável a sintaxe reduzida.
*/

export default function Fragment(props){

  return (

    <>
      <h2>Fragmento</h2>
      <p>Cuidado com esse erro.</p>
    </>

  );

}