import Cookies from 'js-cookie';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/login/loginSlice';

function SiteNav() {
   const dispatch = useDispatch()

   const logOutHandler = () => {
      Cookies.remove('token')
      dispatch(logout()) 
   }

  return (
    <Navbar className='sticky-top' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <button onClick={logOutHandler}>Log Out</button>
        </Container>
     </Navbar>
      
  )
}

export default SiteNav