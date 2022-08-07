import React, { useContext }  from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

const Product = (props) => {
 const {cart, setCart} = useContext(CartContext)
   const {product} = props;
   const addToCart = (e, product) =>{
    e.preventDefault();
    let _cart = { ...cart};
    if(!_cart.items){
      _cart.items ={

      }
    }
    if(_cart.items[product.id]){
      _cart.items[product.id] += 1;
    }else{
      _cart.items[product.id] = 1;
    }
    if(_cart.totalItems){
      _cart.totalItems =0;
    }
    _cart.totalItems += 1;
    setCart(_cart);
   }
  return (
<Link to={`/products/${product.id}`}>
<div className='container mx-auto border-solid border-4 border-blue-300 p-5 bg-blue-100'>
        <img src={product.image}  />
        <div className="text-center">
          <h2 className="text-lg font-bold py-2">{product.title}</h2>
          
        </div>
        <div className="flex  justify-between items-center mt-4">
          <span className='text-lg font-bold my-8'>$ {product.price}</span>
          <button onClick={(e) => {addToCart(e,product)}} className='bg-blue-600  py-1 px4 rounded-full font-bold border-solid border-4 border-blue-600 text-white'>
            ADD
          </button>
        </div>
      </div>
</Link>
    
   
  )
}

export default Product