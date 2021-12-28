import React from "react";
import First from './components/basics/First';
import WithParam from './components/basics/WithParam';
import Fragment from './components/basics/Fragment';
import RandomNumber from './components/basics/RandomNumber';

/* Quando tem o export default, pode retornar uma função anônima. 
- Se tirar o default não conseguirá mais retornar de forma anônima.

- Pode ser retirado a palavra function e colocar uma arrow function.

export default function App(props){} -- Como era antes e abaixo é como fica de uma forma reduzida.
*/

export default () => 
    <div>
      <h1>Fundamentos React</h1>
      <RandomNumber
        min={0}
        max={10}
      />
      <Fragment/>
      <WithParam 
        title="Situação do Aluno" 
        student="Isaac" 
        testNote={9.5}
      /> 
      <First></First>
    </div>    

/* 
- Como não estou usando 'props', eu posso colocar ou () ou _ no lugar.

- Como só tem 1 parâmetro pode ser retirado dos parentes devido a sintaxe do =>
*/