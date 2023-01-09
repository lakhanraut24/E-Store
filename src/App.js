import { BrowserRouter, Routes, Route } from "react-router-dom";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import "./App.css";
import Signup from "./Pages/SignUp";
import Login from "./Pages/Login";
import { Cart } from "./Pages/Cart";
import SingleItem from "./Pages/SingleItem";
import Footer from "./components/Footer";
import { CartContext } from "./CartContext";
import { useEffect, useState } from "react";


function App() {
  const [cart, setCart] = useState({});

  useEffect(() => {
    const cart = window.localStorage.getItem("cart");
    setCart(JSON.parse(cart));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <BrowserRouter>
        <CartContext.Provider value={{ cart, setCart }}>
          <PreNavbar />
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/SignUp" element={<Signup />} exact />
            <Route path="/Login" element={<Login />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/products/:id" element={<SingleItem />} />
          </Routes>
          <Footer />
        </CartContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
