import React from 'react';
import './Cird.css'

const Cird = (props) => {
    
    return (
        <div>
             <h1>Order Summary</h1>
                <h2>Items ={props.cird.length}</h2>
        </div>
    );
};

export default Cird;