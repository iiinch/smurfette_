import React, { useEffect } from "react"; 

import { supabase } from "./lib/helper/supabaseClient";

export default function App() {

 const login = async() => {

     await supabase.auth.signInWithOAuth({
      provider:"github" 

   });
  }; 
    useEffect(() => {
      
  const session = supabase.auth.sessions();

console.log(session)

  },[])
  return (
   <div>
  <button onClick={login}>Login with Github</button>
  </div>
);

}   