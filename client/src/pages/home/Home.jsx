import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'
import img from '../../assets/Screenshot_1.png'
import './Home.css'

function Home() {

  return (
     <> 
     <Container className='p-5'>
          <Row>
              <Col lg={3} >
                  <Link to={'/template-one'}>
                        <div className='template'>
                             <img src={img} alt="" />
                        </div>
                  </Link>
              </Col> 
              <Col lg={3} >
                  <Link to={'/template-one'}>
                        <div className='template'>
                             <img src={img} alt="" />
                        </div>
                  </Link>
              </Col>
              <Col lg={3} >
                  <Link to={'/template-one'}>
                        <div className='template'>
                             <img src={img} alt="" />
                        </div>
                  </Link>
              </Col>
              <Col lg={3} >
                    <Link to={'/template-one'}>
                        <div className='template'>
                             <img src={img} alt="" />
                        </div>
                     </Link>
              </Col>
          </Row>
     </Container>
     </>
   
  )
}

export default Home