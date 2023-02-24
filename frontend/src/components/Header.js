import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import NavDropdown from "react-bootstrap/NavDropdown"
import logo from "../sample_images/SampleLogo.png"
// import index after navbar to take precedence
const Header = () => {
  return (
    <header className="p">
      {/* setting vairant to dark will make the text in nav bar light for readability */}
      <Navbar
        bg='primary'
        variant='dark'
        expand='lg'
        collapseOnSelect
        className='headerNav'
      >
        <Container>
          {/* because we are using react bootstrap for routes need to use */}
          {/* Link container for all routes */}
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img src={logo} alt='Logo' className='logo'></img>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/Plans'>
                <Nav.Link>
                  <i class='fa-solid fa-list-check'></i> Plans
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/Content'>
                <Nav.Link>
                  <i class='fa-brands fa-youtube'></i> Content
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/Blog'>
                <Nav.Link>
                  <i class='fa-solid fa-list-check'></i> Blog
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
