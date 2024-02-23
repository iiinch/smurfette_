import React, { useEffect,useState } from "react";
import{ supabase } from "./lib/helper/supabaseClient";
import Todo from  "./components/todo";
export default function App() {
  const [user,setUser] = useState(null);


  useEffect (()=> {

    const session = supabase.auth.session();
    setUser(session?.user);
    

    const authListener = supabase.auth.onAuthStateChange((event, session)=>{

      switch (event) {
        case "SIGNED_IN":

        setUser(session?.user);
          break;
        case "SIGNED_OUT":

       setUser(null);
       break;
          default:
            break;

      }
    });



    
    return ()=> {
     
      
    };

  },
  []);

const login = async() =>{

  await supabase.auth.signIn({ 

  provider:"github",


});

};
return (

<div>

{user ? ( 



<Todo user={user} />

) : (


<button onClick={login}>Login with github</button>




)}
</div>
);
}