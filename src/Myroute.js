import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Second from './components/Second'
import First from './components/First'
import { Test, Third } from './components/Third'
import Layout from './components/Layout'
import Homepage from './pages/Homepage'
import ProductPage from './pages/ProductPage'
import ProductDetial from './pages/ProductDetial'
import Cart from './pages/Cart'
import Register from './pages/Register'

const Myroute = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path='/' element={<First/>}/>
            <Route path='/second' element={<Second/>}/>
            <Route path='/third' element={<Third/>}/>
            <Route path='/test' element={<Test/>}/> */}


          <Route path='/' element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path='product' element={<ProductPage/>}/>
            <Route path='productdetail/:productId' element={<ProductDetial/>}/>
            <Route path='cart' element={<Cart/>} />
            <Route path='register' element={<Register/>}/> 

          </Route>

        </Routes>
      </Router>
    </>
  )
}

export default Myroute
