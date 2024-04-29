import React from 'react'
import Nav from './Bar/Nav'
import {Routes , Route } from "react-router-dom"
import Home from './components/Home'
import Create from './components/Create'

import Login from './auth/Login'
import Register from './auth/Register'
import Profile from './icons/Profile'
import Notify from './icons/Notify'
import Message from './icons/Message'





function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/creates' element={<Create />}></Route>
        <Route path='/msg' element={<Message></Message>}></Route>
        <Route path='/notify' element={<Notify></Notify>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>

        {/* Login and Register */}
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </div>
  )
}

export default App