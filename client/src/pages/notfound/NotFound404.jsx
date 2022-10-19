import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function NotFound404() {
  return (
     <Container>
         <Row>
             <Col>
                 <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center'>
                    <h2>Error<span style={{color:'red'}} >! 404</span> Not Found.</h2>
                 </div>
            </Col>
         </Row>
     </Container>
  )
}

export default NotFound404