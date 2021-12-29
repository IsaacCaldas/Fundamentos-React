import './ProductsTable.css';

import React from "react";
import products from '../../data/products.js';

export default (props) => {

  function getRows() {

    return products.map(product => {
      return (
        <tr key={ product.id }>
          <td>{ product.id }</td>
          <td>{ product.name }</td>
          <td>{ product.price.replace('.', ',')}</td>
        </tr>
      );
    });
  }

  return (

    <div className="products-table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          { getRows() }
        </tbody>
      </table>
    </div>

  );
}