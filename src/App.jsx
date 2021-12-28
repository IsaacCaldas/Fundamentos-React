import React from "react";
import First from './components/basics/First';
import WithParam from './components/basics/WithParam';
import Fragment from './components/basics/Fragment';

/* Quando tem o export default, pode retornar uma função anônima. 
- Se tirar o default não conseguirá mais retornar de forma anônima.

- Pode ser retirado a palavra function e colocar uma arrow function.

export default function App(props){} -- Como era antes e abaixo é como fica de uma forma reduzida.
*/

export default _ =>
    <div>
      <h1>Fundamentos React</h1>
      <Fragment/>
      <WithParam 
        title="Situação do Aluno" 
        student="Isaac" 
        testNote={9.5}
      /> 
      <First></First>
    </div>    

/* E eu posso tirar o return se for uma arrow function.

- Como não estou usando 'props', eu posso colocar ou () ou _ no lugar.

- Como só tem 1 parâmetro pode ser retirado dos parentes devido a sintaxe do =>
*/