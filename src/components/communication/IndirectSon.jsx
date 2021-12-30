import React from "react";

export default props => {

  const cb = props.whenClick; {/* cb = callback, but is only a name */}

  return (

    <div>
      <button onClick={_ => cb('Jorge', 45, false)}>
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