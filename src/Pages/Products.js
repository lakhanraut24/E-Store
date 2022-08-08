import React, { useContext, useEffect, useState } from "react";
import Product from "../components/Product";
import { CartContext } from "../CartContext";

const Products = () => {
  
  //  const {name} =useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(
        products => {
        setProducts(products);
       
      });
  }, []);

  return (
    <div class=" max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
    <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
        {
           products.map(product => <Product key={product.id} product={product} />)
        }
      </div>
    </div>
  );
};

export default Products;
