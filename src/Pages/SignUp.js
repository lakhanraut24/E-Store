import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
 

 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const navigate = useNavigate();

  function create() {
  
    let items = { password, email };
    console.log(items);
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAesIAATQ7n0s65TrXchi0S7jO942U8CzA', {
     
      method: "POST",
       
      body: JSON.stringify(items),
       
      headers: {
          "Content-type": "application/json"
      }
  })
  .then(response => response.json())
  .then(json => {console.log(json)});
  navigate("/Login")
    
  }
  return (
    <div class=" min-h-screen flex flex-col bg-gradient-to-br from-blue-300 to-white">
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 class="mb-8 text-4xl text-center font-bold">SIGN UP</h1>
          <form method="post">
         

          <input
            type="text"
            onChange={(e) =>setEmail(e.target.value)}
            value={email}
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            onChange={(e) =>setPassword(e.target.value)}
            value={password}
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />
         
          <button
            type="button"
            onClick={create}
            class="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-500 focus:outline-none my-1"
          >
            Create Account
          </button>

          </form>
         

          <div class="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              class="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service
            </a>
            and
            <a
              class="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div class="text-grey-dark mt-6 ">
          Already have an account?
          <Link
            class=" w-full text-center font-medium text-red-600 hover:text-green-500"
            to="/login"
          >
            LOGIN
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Signup;
