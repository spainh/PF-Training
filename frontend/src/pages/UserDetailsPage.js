import React, { useState, useEffect } from "react"
import Axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, Redirect, useNavigate, createSearchParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { Form, Button, Row, Col } from "react-bootstrap"
import FormContainer from "../components/FormContainer"
import CheckoutSteps from "../components/CheckoutSteps"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { register } from "../actions/usersAction"
import { useSearchParams } from "react-router-dom"

import axios from "axios"
const UserDetailsPage = ({ location, history }) => {
  const [fName, setFName] = useState("")
  const [lName, setLName] = useState("")
  const [email, setEmail] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const userRegister = useSelector((state) => state.userRegister)
  // const { loading, error, userInfo } = userRegister
  const [searchparams] = useSearchParams()

  console.log(searchparams.get("data"))

  const submitHandler = (e) => {
    e.preventDefault()
    if (email !== confirmEmail) {
      setMessage("Email address does not match")
    } else {
      console.log(fName, lName, confirmEmail, phone)
      const payload = {
        fName: fName,
        lName: lName,
        email: confirmEmail,
        phone: phone,
      }
      axios
        .post("/add", payload)
        .then(() => {
          console.log("added data from axios")
        })
        .catch((e) => {
          console.log("unable to add data from axios: " + e)
        })
        navigate({
          pathname:'/PlaceOrder',
          search: createSearchParams({
          first: fName,
          last: lName,
          emailIs: email,
          number: phone
          }).toString()
        })
    }
  }

  return (
    <div>
      <FormContainer>
        <CheckoutSteps step1 />
        <h1 className='pb-3'>User Details</h1>
        {message && <Message variant='danger'>{message}</Message>}
        {/* {error && <Message variant='danger'>{error}</Message>}
              {loading && <Loader />} */}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='fName'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              value={fName}
              placeholder='Enter first name'
              type='text'
              onChange={(e) => setFName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              value={lName}
              placeholder='Enter last name'
              type='text'
              onChange={(e) => setLName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={email}
              placeholder='Enter email address'
              type='email'
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm Email Address</Form.Label>
            <Form.Control
              value={confirmEmail}
              placeholder='Confirm email address'
              type='email'
              onChange={(e) => setConfirmEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              value={phone}
              placeholder='Enter phone number'
              type='tel'
              onChange={(e) => setPhone(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button onClick={submitHandler} variant='primary'>
            Continue
          </Button>
        </Form>
      </FormContainer>
    </div>
  )
}

export default UserDetailsPage
