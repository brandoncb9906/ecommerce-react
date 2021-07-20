import React from "react";
import { data } from "../../data/data";
import { Raiting } from "./Rating";

export const Cards = () => {
  return (
    <div className="row center">
      {data.products.map((product) => (
        <div key={product._id} className="card">
          <a href={`/product/${product._id}`}>
            <img className="medium" src={product.image} alt="product" />
          </a>
          <div className="card-body">
            <a href={`/product/${product._id}`}>
              <h2>{product.name}</h2>
            </a>
            <Raiting raiting={product.rating} numReviews={product.numReviews} />
            <div className="price">${product.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
