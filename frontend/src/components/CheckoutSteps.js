import React from "react"
import { Nav } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const CheckoutSteps = ({ step1, step2 }) => {
  return (
    <Nav className='justify-content-center mb-4 py-2'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/Credentials'>
            <Nav.Link>Credentials</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Credentials</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/PlaceOrder'>
            <Nav.Link>PlaceOrder</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps
