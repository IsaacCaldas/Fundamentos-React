import React from "react";
import If, {Else} from './If'

export default props => {

  const user = props.user || {};

  return (
    <div>
      {/*<If test={user && user.name}>
        <h3>Seja bem vindo <strong>{ props.user.name }</strong>!</h3>
      </If>
      <If test={!user.name}>
        <h3>Seja bem vindo <strong>Anonimous</strong>.</h3>
      </If>*/}

      {/* O NORMAL É USAR O IF TERNÁRIO EM REACT */}

      <If test={user && user.name}>
        <h3>Seja bem vindo <strong>{ props.user.name }</strong>!</h3>

        <Else>
          <h3>Seja bem vindo <strong>Anonimous</strong>.</h3>
        </Else>
      </If>

    </div>
  );

}