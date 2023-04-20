import { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {

  return (
    <div className="min-h-screen">
      <div className="bg-indigo-900">
        <nav className="navbar bg-indigo-900 container mx-auto">
          <div className="flex-1">
            <div className="btn normal-case text-xl">Simple Login</div>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/login'>
                  Login
                </Link>
              </li>
              <li>
                <Link to='/register'>
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto mt-6">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Register />}  />
          <Route path='/login' element={<Login />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
