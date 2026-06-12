import { useState }
from "react";

import {
 register
}
from "../services/auth.service";

export default function Register(){

 const[name,setName]=
 useState("");

 const[email,setEmail]=
 useState("");

 const[password,setPassword]=
 useState("");

 const submit=async()=>{

  await register(
   name,
   email,
   password
  );

  window.location.href="/";
 };

 return(

  <div className="
   flex
   justify-center
   items-center
   h-screen
  ">

   <div className="
    bg-white
    p-8
    rounded-xl
    shadow
    w-96
   ">

    <h1 className="
      text-2xl
      mb-4
      font-bold
    ">
      Create Account
    </h1>

    <input
      placeholder="Name"
      className="border p-2 w-full mb-2"
      onChange={e=>
       setName(e.target.value)
      }
    />

    <input
      placeholder="Email"
      className="border p-2 w-full mb-2"
      onChange={e=>
       setEmail(e.target.value)
      }
    />

    <input
      type="password"
      placeholder="Password"
      className="border p-2 w-full mb-3"
      onChange={e=>
       setPassword(e.target.value)
      }
    />

    <button
     onClick={submit}
     className="
      bg-green-600
      text-white
      w-full
      p-2
      rounded
     "
    >
      Register
    </button>

   </div>

  </div>
 );
}
