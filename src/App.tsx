import Header from "./components/Header"
import Pricing from "./pages/princing"
import Home from "./pages/Home"
import About from "./pages/About"
import{ Route, Routes } from "react-router-dom"

function App () {

 
return (
<>

<Header />
<div className="container">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/ pricing"element={<Pricing />} />
    <Route path="/ about"element={<About />} />
  </Routes>
</div>
</>

)
}


export default App