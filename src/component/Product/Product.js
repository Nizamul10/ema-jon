import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import'./Product.css'
const Product = (props) => {
    //  console.log(props.product)
    // <Destring .......

const{name,img,key,price,stock,seller}= props.product
const element = <FontAwesomeIcon icon={faShoppingCart} />
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
            <button 
            // onClick={props.heandleCird}
            onClick ={() => props.heandleCird(props.product)}
            className='button'>{element}add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;