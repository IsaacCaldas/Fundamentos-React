import './Megasena.css';

import React, { useState }from 'react';

export default props => {

  function numberGenNotContains(min, max, array){

    const random = parseInt(Math.random() * (max + 1 - min) + min);
    
    return array.includes(random) ? numberGenNotContains(min, max, array) : random;
  }
  
  function numberGen(qt) {
  
    const numbers = Array(qt)
      .fill(0)
      .reduce((nums) => {
  
        const newNumber = numberGenNotContains(1, 60, nums);
        return [ ...nums, newNumber];
  
      }, [])
      .sort((n1, n2) => n1 - n2);
  
    return numbers;
  }

  const [qtNumGen, setQtNumGen] = useState(props.qtNumGen || 7);

  const initialNumbers = numberGen(qtNumGen);
  const [numbers, setNumbers] = useState(initialNumbers);
  
  console.log(numbers);

  return (

    <div> 
      <div className="megasena">
        <div className="mega-display">
          <div className="number-ball">{ numbers[0] }</div>
          <div className="number-ball">{ numbers[1] }</div>
          <div className="number-ball">{ numbers[2] }</div>
          <div className="number-ball">{ numbers[3] }</div>
          <div className="number-ball">{ numbers[4] }</div>
          <div className="number-ball">{ numbers[5] }</div>
          <div className="number-ball">{ numbers[6] }</div>  
        </div>    

        <div className="mega-form">
          <label htmlFor="numberInput">Quantos números serão gerados: </label>
          <input id="numberInput" min="7" max="7" type="number" value={qtNumGen} onChange={e => setQtNumGen(+e.target.value)} />
        </div>

        <div className="mega-button">
          <button onClick={ _ => setNumbers(numberGen(qtNumGen)) }>
            Gerar números
          </button>
        </div>
      </div>
    </div>

  );

}