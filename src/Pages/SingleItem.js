import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const SingleItem = () => {
   
    const [product, setProduct] = useState({});
    const params = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
     fetch(`https://fakestoreapi.com/products/${params.id}`)
     .then(res => res.json())
     .then(product =>{
        setProduct(product)
        
     })
    }, [params.id])
    const [cartBtn, setCartBtn] =useState("ADD TO CART")
    const handleCart = (product) =>{
     if(cartBtn === "ADD TO CART"){
      setCartBtn("REMOVE CART")
     }else{
      setCartBtn("ADD TO CART")
     }
    }

  return (
    <div className='container mx-auto mt-12 '>
      <button className='mb-12 font-bold text-3xl'onClick={() => navigate(-1)}>Back</button>
      <div className='flex ml-48 mb-10 w-1/3'>
       <img src={product.image} className="w-1/3"/>
       <div className='ml-16'>
        <h1 className=' text-xl font-bold'> {product.title}</h1>
        <div className='font-bold mt-2'>$ {product.price}</div>
        <button  onClick={() =>handleCart(product)} className='bg-blue-500 py-1 px-8 rounded-full font-bold mt-4 text-white'>{cartBtn}</button>
       </div>
      </div>
    </div>
  )
}

export default SingleItem