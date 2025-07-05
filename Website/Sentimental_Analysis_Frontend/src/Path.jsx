import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import ErrorPage from './Pages/ErrorPage'

function Path() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </>
  )
}

export default Path