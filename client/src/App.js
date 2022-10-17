import axios from 'axios';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import TemplateOne from './components/resume/TemplateOne';
import AuthenticetUser from './middlewares/AuthenticetUser';
import AuthRedirect from './middlewares/AuthRedirect';
import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import Cookies  from 'js-cookie';
import { useDispatch } from 'react-redux';
import { login } from './redux/login/loginSlice';


function App() {
  const dispatch = useDispatch()

  let token = Cookies.get('token') ? Cookies.get('token') : ''
  useEffect( () => {

    if (token) {
      axios({
        method: 'GET',
        url: 'http://localhost:5000/api/v1/cb/me',
        headers: {
         authorization:`Bearer ${token}`
        }
    
       }).then( res => {
       dispatch(login(res.data.user_info))
    }) 

   }
     
  },[token, dispatch])

  return (
    <Routes>
         <Route path='*'  element={ <h2>404 Not Found!</h2>} />
         <Route path='/'  element={ <AuthenticetUser> <TemplateOne/> </AuthenticetUser>} />
         <Route path='/login'  element={ <AuthRedirect> <Login/> </AuthRedirect>  } />
         <Route path='/registration'  element={ <AuthRedirect> <Registration/> </AuthRedirect>  } />
   </Routes>
  );
}

export default App;
