import React from 'react';
import{Product} from '../components/product'
import {products}  from '../data/products'

export function Page() {
 return(
    <div className="container mx-auto max-w-2xl pt-10">
    <Product product={products[1]} /> 
    <Product product={products[0]} /> 
    
    </div>
 )
}

