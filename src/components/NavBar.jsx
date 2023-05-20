import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <div>
    <Navbar bg="dark" variant='dark'>
        <Container>
          <Navbar.Brand>Movie Search</Navbar.Brand>
        </Container>
    </Navbar>
    </div>
  )
}

export default NavBar