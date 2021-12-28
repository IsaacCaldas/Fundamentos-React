import './index.css';
import ReactDom from 'react-dom';
import React from 'react';

import First from './components/basics/First';


const el = document.getElementById('root');

ReactDom.render(
  <div>
    <First></First>
  </div>, 

el); 

/*
const el = document.getElementById('root');
ReactDom.render(
  <div><strong>Olá mundo!</strong></div>, 
  // sintaxe JSX, parece html, mas não é. O JSX fará uma conversão para mostrar na página como se fosse HTML via JS. Para funcionar isso precisa do import React.
  el);
  // nesse código se passa dois parâmetros: o que quer que seja passado, e onde passar. o document.getElement ... poderia ser criado diretamente no segundo parâmetro no lugar da constante (que poderia ser uma variável). */