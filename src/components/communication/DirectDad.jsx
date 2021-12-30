import React from "react";
import DirectSon from "./DirectSon";

export default props => {

  return (

    <div>
      <DirectSon
        name="Lucas"
        age={15}
        bool={true}
      ></DirectSon>
      <DirectSon
        name="Laura"
        age={10}
        bool={false}
      ></DirectSon>
    </div>

  );

}