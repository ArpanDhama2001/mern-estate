import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import Profile from '../src/pages/Profile'
import About from '../src/pages/About'
import Signin from '../src/pages/SignIn'
import Signup from '../src/pages/SignUp'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        {/* add routes to singin and about page */}
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
