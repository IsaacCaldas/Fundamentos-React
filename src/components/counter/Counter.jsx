import './Counter.css';

import React, { Component } from 'react';
import Display from './Display';
import Buttons from './Buttons';
import FormPass from './FormPass';

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

  setNumber = (newNumber) => {
    this.setState({
      number: newNumber
    })
  }
  setPass = (newPass) => {
    this.setState({
      pass: newPass
    })
  }

  render() {
    return (

      <div className='ee'> 
        <div className="counter">
          <div className="counter-display">
           
           <Display number={ this.state.number }></Display>

          <Buttons 
            increment={this.increment} decrement={this.decrement}>
          </Buttons>

          </div>    

          <FormPass 
            number={this.state.setNumber}
            setNumber={this.setNumber} 
            pass={this.statesetPass}
            setPass={this.setPass}> 
          </FormPass>
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