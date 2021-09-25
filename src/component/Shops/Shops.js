import React, { useEffect, useState } from 'react';
import Cird from '../Cird/Cird';
import Product from '../Product/Product';
import'./Shops.css'


const Shops = () => {
    const [produc,setProduc] = useState([]);
    const[cird,setCird]=useState([])

    useEffect( () =>{
fetch('./products.JSON')
 .then(res => res.json())
 .then(data => setProduc(data));
    },[])
    const heandleCird =(product) => {
      const newCird=[...cird,product]
      setCird(newCird);
// console.log(product)

    }

    return (
        <div className='grid'>
            <div className='product'>
          {
            produc.map(product => <Product product  ={product}
             heandleCird ={heandleCird}
            >
              
                </Product>)
          }
            </div>
              <div className='order'>
                {/* <h1>Order Summary</h1>
                <h2>Items ={cird.length}</h2> */}
                <Cird cird={cird}></Cird>
            </div>
        </div>
    );
};

export default Shops;