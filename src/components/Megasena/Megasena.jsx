import './Megasena.css';

import React, { Component }from 'react';
import DisplayMega from './DisplayMega';
import InputMega from './InputMega';
import ButtonMega from './ButtonMega';

class Megasena extends Component{

  state = {
    number: 0
  }

  getNumbers = () => {

  }
  setNumber = (e) => {
    this.setState({
      number: +e.target.value
    })
  }

  render() {
    return (

      <div> 
        <div className="megasena">
          <div className="mega-display">
           
            
            <h1>
              <div className="number-ball">2</div>
              <div className="number-ball">12</div>
              <div className="number-ball">18</div>
              <div className="number-ball">25</div>
              <div className="number-ball">32</div>
              <div className="number-ball">45</div>
              <div className="number-ball">49</div>
              <div className="number-ball">57</div>
            </h1>

          </div>    

          <div className="mega-form">
            <label htmlFor="numberInput">Quantos números serão gerados: </label>
            <input id="numberInput" type="number" value={7}  onChange={e => this.state.setNumber} />
          </div>

          <div className="mega-button">
            <button onClick={1}>Gerar números</button>
          </div>
        </div>
      </div>

    );
  }

}

export default Megasena;