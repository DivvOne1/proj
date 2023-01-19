import React from 'react';
import{Product} from '../components/product'
import {products}  from '../data/products'
import '../App.css';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';
import { IProduct } from "../models";

export function Page2() {
 return(
   <><><>
    </><div className="container mx-auto max-w-2xl pt-10">

          
        {products.map((product: IProduct) => {
            return (
                <Product product={product} />
            )
        })}
    
       </div></><><div className="container2 mx-auto max-w-auto pt-12">
          <ImageSlider slides={SliderData} />;
       </div></></>
 )

}
