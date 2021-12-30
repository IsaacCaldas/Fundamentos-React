import './App.css'

import React from "react";
import First from './components/basics/First';
import WithParam from './components/basics/WithParam';
import Fragment from './components/basics/Fragment';
import RandomNumber from './components/basics/RandomNumber';
import Card from './components/layout/Card';
import Family from './components/basics/Family';
import MemberFamily from './components/basics/MemberFamily';
import StudentsList from './components/repetition/StudentsList';
import ProductsTable from './components/repetition/ProductsTable';
import OddsOrEvens from './components/conditional/OddsOrEvens';
import UserInfo from './components/conditional/UserInfo';
import DirectDad from './components/communication/DirectDad';
import IndirectDad from './components/communication/IndirectDad';
import Input from './components/forms/Input';

export default () => 
    <div className="app">
      <h1>Fundamentos React</h1>
      <div className="cards-collection">
        <Card
          title="Formulário"
          color="#556B2F">
          <Input/>
        </Card>
        <Card
          title="Comunicação Indireta"
          color="#A0522D">
          <IndirectDad/>
        </Card>
        <Card
          title="Comunicação direta"
          color="#B22222">
          <DirectDad/>
        </Card>
        <Card
          title="Par ou Ímpar"
          color="#000111">
          {/* Esse o if é como se fosse componente */}
          <UserInfo user={{name: 'Isaac'}} />
          {/* Esse o if é ternário */}
          <OddsOrEvens number={ 2 } />
        </Card>
        <Card
          title="Produtos"
          color="#6B8E23">
          <ProductsTable />
        </Card>
        <Card
          title="Lista de alunos"
          color="#5F9EA0">
          <StudentsList />
        </Card>
        <Card
          title="Família"
          color="#808000">
          <Family surname="Pinheiro" >
            <MemberFamily name="Bernardo" />
            {/* COMENTÁRIO EM REACT */}
              <MemberFamily name="Tamires" /> 
              <MemberFamily name="Pedro" />
              <MemberFamily name="Eduardo" />
          </Family>
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