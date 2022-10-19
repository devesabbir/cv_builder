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
import Home from './pages/home/Home';
import NotFound404 from './pages/notfound/NotFound404';



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
       
       dispatch(login(res.data.data))
    }) 

   }
     
  },[token, dispatch])
 
  return (
    <> 
    <Routes>
         <Route path='/template-one'  element={ <AuthenticetUser> <TemplateOne/> </AuthenticetUser>} />
         <Route path='/login'  element={ <AuthRedirect> <Login/> </AuthRedirect>  } />
         <Route path='/registration'  element={ <AuthRedirect> <Registration/> </AuthRedirect> } />
         <Route path='/' element={ <AuthenticetUser> <Home/> </AuthenticetUser>  } />
         <Route path='*'  element={ <NotFound404/>} />
   </Routes>
    </>
   
  );
}

export default App;
