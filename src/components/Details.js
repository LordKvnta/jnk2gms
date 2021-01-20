import React from 'react'
import data from "../data";

const Details = (props) => {
    const product = data.products.find(x => x.id ===props.match.params.id);
    if(!product){
        return(
            <main className='row'>
                Product Not Found
            </main> 
        )
    }
    return (
        <main>
            <div className="row">
                <div className="col1">
                    <img src={product.image} alt={product.name} className="large"/>
                </div>
                <ul className="col2">{
                    product.map(product =>(
                        <li></li>
                    ))}
                </ul>
            </div>
            <div className="col">
                <div className="col3"></div>
            </div>
            
        </main>
    )
}

export default Details
