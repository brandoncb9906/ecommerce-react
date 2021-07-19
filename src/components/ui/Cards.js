import React from 'react'
import { data } from '../../data/data'

export const Cards = () => {
    return (
        <div className="row center">
            {
                data.products.map(product => (
                    <div key={product._id} className="card">
                        <a href={`/product/${product._id}`}>
                            <img className="medium" src={product.image} alt="product"/>
                        </a>
                        <div className="card-body">
                            <a href="product.html">
                                <h2>{product.name}</h2>
                            </a>
                            <div className="raiting">
                                <span><i className="fa fa-star"></i></span>
                            </div>
                            <div className="price">
                                ${product.price}
                            </div>
                        </div>
                    </div>
                ))
            }            
        </div>
    )
}
