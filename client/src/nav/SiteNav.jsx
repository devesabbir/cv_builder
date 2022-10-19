import Cookies from 'js-cookie';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/login/loginSlice';
import { Link,NavLink} from 'react-router-dom';
import './SiteNav.css'

import logo from '../assets/142-1423821_cvs-logo-jpeg-mcgregor-graham-advertising-agency.png'



function SiteNav() {

   const dispatch = useDispatch()

   const logOutHandler = () => {
      Cookies.remove('token')
      dispatch(logout()) 
  
   }

   


  return (
    <Navbar className='sticky-top' bg="dark" variant="dark">
        <Container>
          <Link className='logo' to={''}><img src={logo} alt="" /> <span>Builder</span></Link>
          <div className="ms-auto">

               <ul className='nav'>
                  <li> <NavLink  to='/' >Home</NavLink></li>
                  <li> <NavLink to='/template-one' >Features</NavLink></li>
                  <li> <NavLink to='/template-two' >Pricing</NavLink></li>
               </ul>
                       
          </div>
          <button className='ms-3 button-50' onClick={logOutHandler} >Log Out</button>
        </Container>
     </Navbar>
      
  )
}

export default SiteNav