import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import ErrorPage from './Pages/ErrorPage'
import Login from "./Pages/Login"
import Signup from './Components/Signup'
function Path() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </>
  )
}

export default Path