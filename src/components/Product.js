import React from 'react';
import { Link } from 'react-router-dom';


const Product = (props) => {

   const {product} = props;
   
  return (
<Link to={`/products/${product.id}`}>
<div className=' group relative '>

      <div className='w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1  rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none p-10 border-solid border-2 border-blue-300  '>
      <div className="text-center ">
          <h2 className="  text-gray-500">{product.title}</h2>
          
        </div>
        <img src={product.image}  />
       
        </div>
       
        <div className="flex  justify-between items-center mt-6 ">
          <span className='text-lg font-bold text-gray-900'>$ {product.price}</span>
          <button  className='bg-blue-600 border-solid border-2 border-blue-600 rounded-3xl  px4  font-bold border-solid border-4 border-blue-600 text-white'>
            ADD
          </button>
        </div>
        
      </div>
</Link>
    
   
  )
}

export default Product