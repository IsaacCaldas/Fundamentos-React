import React from "react";

export default props => {

  const cb = props.whenClick; {/* cb = callback, but is only a name */}

  const min = 30,
        max = 80;
  const name = ['Jorge', 'Lucas', 'Carlos', 'Eduardo', 'Jean', 'Sérgio', 'Lucas', 'Antônio', 'Ricardo', 'Gabriel'];
  let nameSort = name[Math.floor(Math.random() * name.length)];
  
  const randomName = () => nameSort,
        randomAge = () => parseInt(Math.random() * (max - min)) + min,
        randomBool = () => Math.random() > 0.5;
  
  return (

    <div>
      <button onClick={_ => cb(randomName(), randomAge(), randomBool())}>
        Fornecer Informações
      </button>
    </div>

  );

}

{ /* -- O button poderia ser assim
  <button onClick={
      function (e) {
        props.whenClick('Jorge', 45, true);
      }
  }>Fornecer Informações</button>
*/}