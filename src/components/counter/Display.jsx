import React from "react";
import If, {Else} from '../conditional/If';

export default props => {

  return (

      <If test={props.number && props.number < 1000000000000 && props.number > -99999999999}>
        <h1><strong>{ props.number }</strong></h1>

        <Else>
          <h1><strong>0</strong></h1>
        </Else>
      </If>

  );

}