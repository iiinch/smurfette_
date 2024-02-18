import React, { useEffect } from "react"; 

import { supabase } from "./lib/helper/supabaseClient";

export default function App() {

const [user,setUser] = useState(null);

useEffect(() => {
      
  const session = supabase.auth.session();

  setUser.log(session?.user);



  }, []);



 const login = async() => {

     await supabase.auth.signIn({
      provider:"github" 


   });
  }; 
  const logout = async () => {

    await supabase.auth.signOut()
 }; 


  return (

   <div>

   {user ? (
    <div>
    
    
    
    <h1>authenticated</h1>

    <button onClick= {logout}>Logout</button>
    </div>
   
   ) : (

  
 <button  onClick={login}>Login withn github</button>
  )} 
  </div>

);
}   