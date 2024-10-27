import React,{useState, useEffect} from 'react'
import Card from '../components/usercomponent/Card'
import axios from 'axios'
import {Helmet} from "react-helmet";

const ProductPage = () => {
  const[product, setProduct]=useState([])

  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products`)
    .then(
      res=>setProduct(res.data)
    )
    .catch(err=>console.log(err))

  })

  console.log(product)

  return (
    <>
     <Helmet>
        <title>Estore|Product Page</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
    <div className="product-section">
    <div class="text-center p-10">
    <h1 class="font-bold text-4xl mb-4">All Product</h1>
</div>
      <section id="Projects"
    class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      {product.map(item=>
        <Card data={item} />
      )}
      </section>
  
      </div>
  
    
    </>
  )
}

export default ProductPage