import React, { useRef } from "react";
import If from './If'

export default props => {

  const user = props.user || {};

  return (
    <div>
    <If test={user && user.name}>
        <div style={{
          margin: '5px 0px 10px 0px'
        }}>
          <h3>Seja bem vindo <strong>{ props.user.name }</strong>!</h3>
        </div>
      </If>
      <If test={!user.name}>
      <div style={{
        margin: '5px 0px 10px 0px'
      }}>
        <h3>Seja bem vindo <strong>Anonimous</strong>!</h3>
      </div>
      </If>
    </div>
  );

}