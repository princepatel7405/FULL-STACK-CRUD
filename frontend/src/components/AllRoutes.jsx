import React from 'react'
import {Route, Routes} from "react-router-dom"
import AddProduct from './AddProduct'
import Login from './Login'
import Products from './Products'
import Register from './Register'
import UpdateProduct from './UpdateProduct'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/login/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/product/addproduct" element={<AddProduct/>}/>
        <Route path="/product" element={<Products/>}/>
        <Route path="/product/updateproduct/:id" element={<UpdateProduct/>}/>
    </Routes>
  )
}

export default AllRoutes