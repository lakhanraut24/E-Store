import React from 'react'
import Banner from '../components/Banner'
import Products from './Products'

const Home = () => {
  return (
    <>
   
<Banner/>

     <h1 className='text-center text-5xl font-bold'>WELCOME TO LEO SHOP </h1>
    <div>
   
    <Products/>
    </div>
    </>
  )
}

export default Home