import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Helmet} from "react-helmet";

const ProductDetial = () => {
  const[product,setProduct]=useState({})
  const params = useParams()
  const id= params.productId
  useEffect(()=>{
      axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res=>setProduct(res.data))
      .catch(err=>console.log(err))
  },[id])

    const addtocart = ()=>{
      const cartItems = JSON.parse(localStorage.getItem('cartData')) || []
      const productItem = {
        id:product.id,
        title:product.title,
        price:product.price,
        description:product.description,
        image:product.image,
        quantity:1
      }
      //check if item is present in the cart or not
      const existingItem = cartItems.find(item=>item.id===product.id)
      if(existingItem){
        toast.error(`${product.title} is already exit in the cart`)
      }
      else{
        cartItems.push(productItem)
        localStorage.setItem('cartData',JSON.stringify(cartItems))
        toast.success(`${product.title} is added to cart`)
      }
      

    }
  return (
    <>
     <Helmet>
        <title>Estore|Product Detail</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
    <ToastContainer theme='colored' position='top-center'/>
     <div className="product-section">
      <h1 className="text-center text-3xl my-5 font-bold">Product Detail</h1>
      <div className="flex flex-wrap justify-between my-5 mx-20">
        <div className="card-img w-[400px] h-[300px] shadow-md shadow-orange-200 hover:translate-y-[-10px] transition-all delay-150">
            <img src={product.image} alt="laptop" className='w-full h-full' />
        </div>
        <div className="card-content shadow-md shadow-orange-200 w-[400px] pl-10 py-5">
            <h2 className='font-bold text-lg'>{product.title}</h2>
            <h2 className='text-lg'> <span className='font-bold'>Price - </span>Rs. {product.price}</h2>
            <p className='text-base'><span className='font-bold'>Category - </span>{product.category}</p>
            <p className='text-base mt-3 mr-5 text-justify'>{product.description} </p>
             <Link to=''>
              <button className='mt-5 bg-blue-500 py-2 px-3 rounded-lg text-white hover:translate-y-[-5px] hover:shadow-lg hover:font-bold hover:shadow-cyan-200 transition-all delay-150' onClick={addtocart}>Add to cart</button>
             </Link>

        </div>
    
      </div>
     

    </div>
    </>
  )
}

export default ProductDetial