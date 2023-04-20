import { useEffect, useState } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'



import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import http from './api/axios'

function App() {
  const navigate = useNavigate();
  useEffect(()=>{
    const csfr = http.get('/sanctum/csrf-cookie');
  })  
  async function loginUser(email, password,setErrors, goTo){
      try {
        await http.post('/api/auth/login', {
          email: email, 
          password: password,
        })
        navigate(goTo)
        console.log('You have been logged')
      } catch (e){
          if(e.response.status === 401){
            setErrors(e.response.data.errors)
          }
      }
  }

  async function registerUser(name, email, password, passwordConfirm, goTo ){
    try {
      await http.post('/api/auth/register',{
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordConfirm
      });
      navigate(goTo);
      console.log('you have been registered')
    }
    catch (e){
      console.log(e)
    }
  }

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
          <Route path='/register' element={<Register registerUser={registerUser}/>}  />
          <Route path='/login' element={<Login loginUser={loginUser} />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
