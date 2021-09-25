import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import'./Shops.css'


const Shops = () => {
    const [produc,setProduc] = useState([]);
    useEffect( () =>{
fetch('./products.JSON')
 .then(res => res.json())
 .then(data => setProduc(data));
    },[])

    return (
        <div className='grid'>
            <div className='product'>
          {
            produc.map(product => <Product product  ={product}>  </Product>)
          }
            </div>
              <div className='order'>
                <h1>Order Summary</h1>
                <h2>Items</h2>
            </div>
        </div>
    );
};

export default Shops;