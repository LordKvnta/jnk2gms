import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import data from '../data';

const Product = () => {
    let products = data.products;
    
  return (
    <div className='row'>
              
        {
            products.map(product =>(
                <div key={product.id} className='card'>
                <Link to={`/products/${product.id}`} ><img className='medium'src={product.image} alt={product.name}/></Link>
                <div className='card-body'>
                    <Link to={`/products/${product.id}`}><h2>{product.name}, {product.category}</h2>
                    <span>{product.description}</span>
                    <div className="price">${product.price},  {product.total === 0? "Out of Stock" : `${product.total} left`}</div></Link>
                </div>
                </div>
            ))
        }
        
    </div>
  )
}

export default Product
