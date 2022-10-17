import axios from "axios";
import Cookies from 'js-cookie'
import { login } from "./loginSlice";


export const registrationAction = (payload) => {
   return axios({
        method: 'POST',
        url: 'http://localhost:5000/api/v1/cb/registration',
        data: payload
    }).then( res => {
         console.log(res);
    }) 
}

export const loginAction = (payload, navigate) => (dispatch) => {
     return axios({
          method: 'POST',
          url: 'http://localhost:5000/api/v1/cb/login',
          data: payload
      }).then( res => {
         Cookies.set('token', res.data.token)
         dispatch(login(res.data.user_info))
         navigate('/')
      })  
}


