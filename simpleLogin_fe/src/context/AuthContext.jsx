import { createContext, useContext, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const csfr = async ()=>{axios.get('/sanctum/csrf-cookie')};


  /* 
    * returning the user
  */
/*   const getUser = async () => {
    const { data } = await axios.get('/api/user');
    setUser(data)
  } */
  const getUser = async () => {
      axios.get('/api/user')
        .then(res=>console.log(res))
        .then((data)=> [...data, setUser(data)])
        

  }

  /* 
    * posting data to the login api
  */
  const login = async ({...data}) => {
    await csfr();

    try {
      await axios.post('/api/auth/login', data);
      getUser();
      navigate('/');
      console.log('You have been logged');
    } catch (e){
        if(e.response.status === 401){
          setErrors(e.response.data.errors)
        }
    }
  }

  /* 
    * posting data to the register api
  */
  const register = async ({...data}) => {
    await csfr();
    try {
      await axios.post('/api/auth/register', data );
      getUser();
      navigate('/');
      console.log('you have been registered');
    }
    catch (e){
      console.log(e)
      if(e.response.status === 401){
        setErrors(e.response.data.errors)
      }
    }
  }


  return <AuthContext.Provider value = {{user, errors, getUser, login, register}}>
      {children}
  </AuthContext.Provider>
}

export default function useAuthContext() {
  return useContext(AuthContext);
}