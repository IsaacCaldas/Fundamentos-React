import './index.css';
import ReactDOM from 'react-dom';
import React from 'react';

import App from './App';

const el = document.getElementById('root');

ReactDOM.render(
  <App/>, 
el); 

/*
const el = document.getElementById('root');
ReactDOM.render(
  <div><strong>Olá mundo!</strong></div>, 
  // sintaxe JSX, parece html, mas não é. O JSX fará uma conversão para mostrar na página como se fosse HTML via JS. Para funcionar isso precisa do import React.
  el);
  // nesse código se passa dois parâmetros: o que quer que seja passado, e onde passar. o document.getElement ... poderia ser criado diretamente no segundo parâmetro no lugar da constante (que poderia ser uma variável). */