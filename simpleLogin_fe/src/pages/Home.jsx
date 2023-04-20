import React, { useEffect } from 'react'
import useAuthContext from '../context/AuthContext'

export default function Home() {
  const {user, getUser } = useAuthContext();

  useEffect(()=>{
    if(!user){
      getUser();
    }
  },[])

  return (
    <div>
      <h1>{user?.name}</h1>
    </div>
  )
}
