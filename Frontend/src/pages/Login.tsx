import { useState }
from "react";

import { login }
from "../services/auth.service";

export default function Login(){

 const[email,setEmail]=
 useState("");

 const[password,setPassword]=
 useState("");

 const submit=async()=>{

  const res=
   await login(
    email,
    password
   );

  localStorage.setItem(
   "token",
   res.data.accessToken
  );

  window.location.href=
   "/dashboard";
 };

 return(

  <div className="
   flex
   items-center
   justify-center
   h-screen
  ">

   <div className="
    bg-white
    p-8
    rounded-xl
    shadow-lg
    w-96
   ">

    <h1 className="
     text-2xl
     font-bold
     mb-6
    ">
      SecureScan Login
    </h1>

    <input
     placeholder="Email"
     className="border p-2 w-full mb-3"
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
      bg-blue-600
      text-white
      w-full
      p-2
      rounded
     "
    >
      Login
    </button>

   </div>

  </div>
 );
}
