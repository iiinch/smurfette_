import { link } from "react-router-dom"



export default function Header(){
  const path = window.location.pathname
return (
 <nav className="nav">
  <link to="/" className="title ">Site Name 
  </link>
  <ul>
    <CustomLink to="/pricing">Pricing</CustomLink>
    <CustomLink to="/about">About</CustomLink>
   
  </ul>

 </nav>
)                                                                                                                                                                                                                                                                   
}
function CustomLink({ to, children, ...props}) {
  const path = window.location.pathname
  return ( 
    <li className={path === to ? "active" :""} > 
      <link to={to} {...props}>
                                                                                                                                                                                
      
      </link>
    </li>
    
 )

}