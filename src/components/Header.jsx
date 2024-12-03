import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';








function Header() {
  return (
    
    <>

<Navbar expand="lg" className=" bg-white h-5 align-items-center justify-content-center  top-0 " style={{zIndex:'1'}} >
      <Container style={{height:'100px'}} className='shadow '>
        <img style={{width:'50px'}} src="https://th.bing.com/th/id/OIP.4liyZCNZZw1SPovOsEk9XQHaFY?w=282&h=205&c=7&r=0&o=5&pid=1.7 '" alt="" />
        <Navbar.Brand href="#home" className='fw-bold travel'style={{fontSize:'30px',Color:'lightskyblue'}}>TRAVEL GUIDE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fs-5 ms-5 ">
            <Nav.Link href="#home" style={{color:'lightskyblue'}}>Home</Nav.Link>
            <Nav.Link href="#link"  style={{color:'lightskyblue'}}>About</Nav.Link>
            <Nav.Link href="#home"  style={{color:'lightskyblue'}}>Packages</Nav.Link>
            <Nav.Link href="#link"  style={{color:'lightskyblue'}}>Locations</Nav.Link>
            

            <Form inline className='ms-5'>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="find destinations"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button style={{backgroundColor:'lightskyblue'}} type="submit">search</Button>
          </Col>
        </Row>
        </Form>



          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </>
 
  
  )
}

export default Header