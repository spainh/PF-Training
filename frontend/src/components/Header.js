import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import NavDropdown from "react-bootstrap/NavDropdown"
import logo from "./SampleLogo.png"
const Header = () => {
  return (
    <header>
      {/* setting vairant to dark will make the text in nav bar light for readability */}
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect className="headerNav">
        <Container>
        <Navbar.Brand href="/"><img src={logo} alt="Logo"></img></Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className="ms-auto">
              <Nav.Link href='/plan'><i class="fa-solid fa-list-check"></i> Plans</Nav.Link>
              <Nav.Link href='/content'><i class="fa-brands fa-youtube"></i> Content</Nav.Link>
              <Nav.Link href='/about us'><i class="fa-solid fa-circle-info"></i> Blog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
