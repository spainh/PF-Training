import React, { useState, useEffect } from "react"
import Axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { redirect, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { Form, Button, Row, Col } from "react-bootstrap"
import FormContainer from "../components/FormContainer"
import CheckoutSteps from "../components/CheckoutSteps"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { register } from "../actions/usersAction"


const UserDetailsPage = ({ location, history }) => {
  const [fName, setFName] = useState("")
  const [lName, setLName] = useState("")
  const [email, setEmail] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

// const redirect = location.search ? location.search.split('=')[1] : '/'
  

  // useEffect(() => {
  //   if (userInfo) {
  //     history.push(redirect)
  //   }
  // }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if (email !== confirmEmail) {
      setMessage("Email address does not match")
    } else {
      dispatch(register(fName, lName, email, phone))
    }
  }
  
  return (
    <div>
      <FormContainer>
        <CheckoutSteps step1 />
        <h1 className='pb-3'>User Details</h1>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
              {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='fName'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              value={fName}
              placeholder='Enter First Name'
              type='fname'
              onChange={(e) => setFName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='fName'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              value={lName}
              placeholder='Enter Last Name'
              type='lname'
              onChange={(e) => setLName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              value={email}
              placeholder='Enter email address'
              type='email'
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='confirmEmail'>
          <Form.Label>Confirm Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Confirm email'
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
          <Form.Group controlId='phone'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              value={phone}
              placeholder='Enter phone number'
              type='phone'
              onChange={(e) => setPhone(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type='submit' variant='primary'>
            Continue
          </Button>
        </Form>
      </FormContainer>
    </div>
  )
}

export default UserDetailsPage
