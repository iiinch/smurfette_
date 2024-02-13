import { Link } from "react-router-dom"



export default function Header(){
  const path = window.location.pathname
return (
 <nav className="nav">
  <Link to="/" className="title ">Site Name 
  </Link>
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
      <Link to={to} {...props}>
                                                                                                                                                                                
      {children}
      </Link  >
    </li>
    
 )

}