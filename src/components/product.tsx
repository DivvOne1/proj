import React, { useState } from "react"
import { IProduct } from "../models";
interface ProductProps{
    product:IProduct
}

export function Product({product}:ProductProps){
    const[details,setDetails]=useState(false)

    return(
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2"
 >
            <img src= {product.image} className= "w-1/6" alt={product.title}/>
           <p> {product.title}</p>
           
        <button className="py-2 px-4 border bg-yellow-400"
        onClick={()=>setDetails(prev => !prev)}>
            показать
        </button>
        {details && <div>
            <p>{product.description}</p>
        </div>}
        </div>
      
    )
       
    
}


