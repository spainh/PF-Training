import React from "react"
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap"

const Footer = () => {
  return (
    <footer className="bookNow">
      {/* fullwidth blended in (grey) quickbook appointment navbar */}
      <Navbar>
        <Container>
          <Nav.Link>
            <p>Book Appointment</p>
          </Nav.Link>
          <h1>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </h1> 
          <Nav.Link>
            <p>Schedule Consultation</p>
          </Nav.Link>
          <h1>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </h1> 
          <Nav.Link>
            <p>Book Appointment</p>
          </Nav.Link>
          <h1>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </h1> 
          <Nav.Link>
            <p>Schedule Consultation</p>
          </Nav.Link>
          <h1>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </h1> 
          <Nav.Link>
            <p>Book Appointment</p>
          </Nav.Link>
        </Container>
      </Navbar>
      <Container>
        <div className='text-center'>
            <a href='http://www.twitter.com'>
              <i className='social-icon fa-brands fa-twitter'></i>
            </a>
            <a href='http://www.facebook.com'>
              <i className='social-icon fa-brands fa-facebook'></i>
            </a>
            <a href='http://www.instagram.com'>
              <i className='social-icon fa-brands fa-instagram'></i>
            </a>
            <a href='mailto: spainh@sunypoly.edu'>
              <i className='social-icon fa-solid fa-envelope'></i>
            </a>
            </div>
          <div className='text-center'>Copy &copy; Bulking Buddies Llc</div>
      </Container>
    </footer>
  )
}

export default Footer
