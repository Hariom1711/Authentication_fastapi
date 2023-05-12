import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
  <>
  <Routes>
 <Route path='/' element={<Homepage />} ></Route>
 <Route path='/login' element={<Login/>} ></Route>
 <Route path='/register' element={<Register />} ></Route>
 
   </Routes>
  </>
  )
}

export default App