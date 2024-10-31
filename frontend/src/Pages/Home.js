import React from 'react'
import { useState,useEffect } from 'react';
import ProductCard from '../Components/ProductCard'
import { useSearchParams } from 'react-router-dom';

export default function Home(){
    const [product,setProduct] = useState([]);
    const [searchParams,setSearchParams]=useSearchParams()

        

    const apiUrl = process.env.REACT_APP_API_URL;
    
    useEffect(()=>{
        fetch(apiUrl+'/product?'+searchParams)
        .then(res=>res.json())
        .then(res=>setProduct(res.products))
      
    },[searchParams])

    return(
        <div>
            <h1 id="products_heading">Latest Products</h1>

            <section id="products" className="container mt-5">
            <div className='row'>
                {
                 product.map((product)=>(
                    <>
                   
                    <ProductCard product={product}/>
                    </>
                 ))
                }
                
            </div>
            </section>
        </div>
    )
}