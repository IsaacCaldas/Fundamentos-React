import './Counter.css';

import React, { Component } from 'react';
import If, {Else} from '../conditional/If';

{/* não é obrigatório, mas tem como colocar o constructor 

  ficaria assim:

  constructor(props){
    super(props);

    this.state = {
      number: props.initialNumber
    }
  }

  Daria para fazer a arrow direto no onClick={_ => this.increment()} 

    ou para não usar arrow, fazer uns constructor e fazer o this.increment.bind(this).

  
*/}

class Contador extends Component{

  state = {
    number: this.props.initialNumber || 0,
    pass: this.props.initialPass || 1
  }

  increment = () => {
    
    this.setState({
      number: this.state.number + this.state.pass
    });
  }
  decrement = () => {
    this.setState({
      number: this.state.number - this.state.pass
    });
  }

  setNumber = (e) => {
    this.setState({
      number: +e.target.value
    })
  }
  setPass = (e) => {
    this.setState({
      pass: +e.target.value
    })
  }

  render() {
    return (

      <div className='ee'> 
        <div className="counter">
          <div className="counter-box">

          <If test={this.state.number && this.state.number < 1000000000000}>
            <h1><strong>{ this.state.number }</strong></h1>

            <Else>
              <h1><strong>Undefined</strong></h1>
            </Else>
          </If>
           
            <button onClick={this.increment}>+</button><button onClick={this.decrement}>-</button>

          </div>
          
          <div>
            <label htmlFor="numberInput">Número inicial: </label>
            <input id="numberInput" type="number" value={this.state.newNumber} onChange={this.setNumber} />
          </div>
          <div>
            <label htmlFor="passInput">Passo: </label>
            <input id="passInput" type="number" value={this.state.pass} onChange={this.setPass} />
          </div>

        </div>
      </div>

    );
  }

}

export default Contador;

{/*

  CASO NÃO IMPORTE O { COMPONENT }, A DECLARAÇÃO DA CLASSE FICA

  import React from 'react';

  export default class Contador extends React.Component{

  E eu posso exportar a classe no final.

*/}