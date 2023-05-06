import React, { useState, useEffect } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { Form, Button, Row, Col, Card } from "react-bootstrap"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { useNavigate } from "react-router-dom"
import FormContainer from "../components/FormContainer"
import CheckoutSteps from "../components/CheckoutSteps"
import { PaypalButton } from "@paypal/react-paypal-js"
import { useSearchParams } from "react-router-dom"
import { First } from "react-bootstrap/esm/PageItem"
const PlaceOrderPage = () => {
  // const [sdkReady, setSdkReady] = useState(false)
  const [searchparams] = useSearchParams()
  console.log(searchparams.get("first"))
  console.log(searchparams.get("last"))
  console.log(searchparams.get("emailIs"))
  console.log(searchparams.get("number"))
  console.log(searchparams.get("data"))

  return (
    <div>
      <FormContainer>
        <CheckoutSteps step1 step2 />
        <div className='planCard'>
          <h1 className='pb-3'>Place Order</h1>
        </div>
        {/* {message && <Message variant='danger'>{message}</Message>} */}
        {/* {error && <Message variant='danger'>{error}</Message>}
             {loading && <Loader />} */}
        <Form onSubmit={"submitHandler"}>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <div>
              <h3>{searchparams.get("first")}</h3>
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <div>
              <h3>{searchparams.get("last")}</h3>
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <div>
              <h3>{searchparams.get("emailIs")}</h3>
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <div>
              <h3>{searchparams.get("number")}</h3>
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label>Plan</Form.Label>
            <div>
              <h3>{searchparams.get("data")}</h3>
            </div>
          </Form.Group>

          <Button onClick={"submitHandler"} variant='primary'>
            Sign Up!
          </Button>
        </Form>
      </FormContainer>
    </div>
  )
}

export default PlaceOrderPage
