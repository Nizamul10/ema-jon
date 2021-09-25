import React from 'react';
import'./Product.css'
const Product = (props) => {
    console.log(props.product)
    // <Destring .......

const{name,img,key,price,stock,seller}= props.product
    return (
        <div className="imege">
            <div>
           <img src={img} alt="" />
            </div>
            <div>
                
            <h1 className="color">{name }</h1>
            <p>by : {seller}</p>
            <p>{price}</p>
            <p>only {stock}left in stock-order soon</p>
            <button className='button'>add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;