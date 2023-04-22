import React, { useState, useEffect } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { Form, Button, Row, Col, Card } from "react-bootstrap"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { useNavigate } from "react-router-dom"
import FormContainer from "../components/FormContainer"
import CheckoutSteps from "../components/CheckoutSteps"
import {PaypalButton} from '@paypal/react-paypal-js'
const PlaceOrderPage = () => {
  // const [sdkReady, setSdkReady] = useState(false)
return(
<>
<h1>Place Order Page</h1>
</>
  
)}

  // specify plan in here
  // const handleCheckout = async (e) => {
  //   await axios
  //     .post("http://localhost:5000/create-checkout-session")
  //     .then((res) => {
  //       // if (res.data.url) {
  //       //   window.location.href = res.data.url
  //       // }
  //     })
  //     .catch((err) => console.log(err.message))
  // }
//   useEffect(() => {
//     const addPaypalScript = async () => {
//       const { data: clientId } = await axios.get("/api/config/paypal")
//       // console.log(clientId)
//       const script = document.createElement("script")
//       script.type = "text/javascript"
//       script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
//       script.async = true
//       script.onload = () => {
//         setSdkReady(true)
//       }
//       document.body.appendChild(script)
//     }

//     addPaypalScript()
//   })
//   const successPaymentHandler = () =
//   return (
//     <div>
//       <CheckoutSteps step1 step2 step3 step4 />
//       <h1>start of place order screen</h1>
//       <Form>
//         <PaypalButton amount onSuccess={successPaymentHandler}/>
//         {/* <button onClick={() => handleCheckout()}>Checkout</button> */}
//       </Form>
//     </div>
//   )
// }

export default PlaceOrderPage
