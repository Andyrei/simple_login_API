import axios from "axios";

export default axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true
})


/* 
      const csfr =await http.get('/sanctum/csrf-cookie');
      console.log(csfr)
*/