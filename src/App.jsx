import './App.css'

import React from "react";
import First from './components/basics/First';
import WithParam from './components/basics/WithParam';
import Fragment from './components/basics/Fragment';
import RandomNumber from './components/basics/RandomNumber';
import Card from './components/layout/Card';
import Family from './components/basics/Family';

export default () => 
    <div className="app">
      <h1>Fundamentos React</h1>
      <div className="cards-collection">
        <Card
          title="Família"
          color="#808000">
          <Family surname="Pinheiros" ></Family>
        </Card>
        <Card
          title="Desafio aleatório"
          color="#FFD700">
          <RandomNumber min={0} max={10}/>
        </Card>
        <Card
          title="Fragmento"
          color="#8B0000">
          <Fragment/>
        </Card>
        <Card
          title="Boletim"
          color="#228B22">
          <WithParam 
            title="Situação do Aluno" 
            student="Isaac" 
            testNote={9.5}
          /> 
        </Card>
        <Card 
          title="First Component">
          <First></First>
        </Card>
      </div>
    </div>    

/* Quando tem o export default, pode retornar uma função anônima. 
- Se tirar o default não conseguirá mais retornar de forma anônima.

- Pode ser retirado a palavra function e colocar uma arrow function.

export default function App(props){} -- Como era antes e abaixo é como fica de uma forma reduzida.
*/

/* 
- Como não estou usando 'props', eu posso colocar ou () ou _ no lugar.

- Como só tem 1 parâmetro pode ser retirado dos parentes devido a sintaxe do =>
*/