import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import logo from '../images/logo.png'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar
        bg='dark'
        variant='dark'
        expand='lg'
        collapseOnSelect
        className='py-3'
      >
        <Container>
          <Navbar.Brand href='/'>
            <img src={logo} alt='ProShop' />
            PhraseCamp
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto d-flex'>
              {/* <Form className='d-flex '>
                <Form.Control
                  type='search'
                  placeholder='Search'
                  className='me-2 '
                  aria-label='Search'
                />
              </Form> */}
              <LinkContainer to='/cart'>
                <Nav.Link href='/cart'>
                  <FaShoppingCart /> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link href='/login'>
                  <FaUser /> Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
