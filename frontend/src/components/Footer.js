import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            {/* <button type="button" class="btn btn-success">Book now</button><button type="button" class="btn btn-success">Book now</button><button type="button" class="btn btn-success">Book now</button><button type="button" class="btn btn-success">Book now</button><button type="button" class="btn btn-success">Book now</button><button type="button" class="btn btn-success">Book now</button><button type="button" class="btn btn-success">Book now</button><button type="button" class="btn btn-success">Book now</button><button type="button" class="btn btn-success">Book now</button><button type="button" class="btn btn-success">Book now</button> */}
          </Col>
        </Row>
        <Row>
          <Col className='text-center'>
            <a href='http://www.twitter.com'>
              <i className='social-icon fa-brands fa-twitter'></i>
            </a>
            <a href='http://www.facebook.com'>
            <i className='social-icon fa-brands fa-facebook'></i>
          </a>
          <a href='http://www.instagram.com'>
            <i className='social-icon fa-brands fa-instagram'></i>
          </a>
          <a href="mailto: spainh@sunypoly.edu">
          <i className="social-icon fa-solid fa-envelope"></i>
          </a>
          </Col>
        </Row>
        <Row>
          <Col className='text-center'>
            Copy &copy; Bulking Buddies Llc
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
