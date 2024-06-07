import { BrowserRouter, Route,  Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import Categories from "./Pages/Categories"
import Products from "./Pages/Products"


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/"  element={<Home/>} />
      <Route path="/register"  element={<Register/>} />
      <Route path="/login"  element={<Login/>} />
      <Route path="/categories"  element={<Categories/>} />
      <Route path="/products"  element={<Products/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App