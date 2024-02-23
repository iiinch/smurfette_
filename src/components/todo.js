import { useRef, useState } from "react";
import { supabase } from "../lib/helper/supabaseClient"; 

export default function Todo({ user }) {
  const inputRef = useRef();
  const [error, setError] = useState(null);

  const logout = async () => {
    await supabase.auth.signOut();
  };

  const handleCreateTodo = async () => {

const title = inputRef.current.value;


   
   const res  =  await supabase
  .from("todo")
  .insert({title, user_id: user.id })
  .select("*")
  .single();
  console.log(res);
 };

  return (
    <div>
  <div>
        <h1>React supabase database CRUD and policy</h1>
       <div>
       <input ref={inputRef} />
       <button onClick={handleCreateTodo}>add</button>
         {error && <pre>{error.message}</pre>}
   </div>
    <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}