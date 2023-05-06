import React, { useEffect } from "react"
// calls an action / used to select part of the state 
import { useDispatch, useSelector } from "react-redux"
import { Card, Button, Row, Col, Container } from "react-bootstrap"
import Plan from "../components/Plan.js"
import Message from "../components/Message.js"
import Loader from "../components/Loader.js"
import { listPlans } from "../actions/planActions.js"
import CheckoutSteps from "../components/CheckoutSteps.js"

const Plans = () => {
  const dispatch = useDispatch()
  
  // plan list part of the state 
  const planList = useSelector((state) => state.planList)
  
  // pull out the loading, possible errors, and plans
  const { loading, error, plans } = planList

  // makes request to backend to get plans
  useEffect(() => {
    dispatch(listPlans())
  }, [dispatch])

  return (
    <>
      <Container>

        <h1 className='py-3 planCard'>Plans</h1>
        {/* if loading display loading, else if error display error, else
        display plans */}
        {loading ? (
          <div className="planCard">
          <Loader/>
          </div>
        ) : error ? (
          <div>
          <Message variant='danger'>{error}</Message>
          </div>
        ) : (
          <Row>
            {plans.map((plan) => (
              <Col key={plan._id} sm={12} md={6} lg={4} xl={3}>
                {/* renders Plan component then, passes in a
              plan from plans.js for each column */}
                <Plan plan={plan} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  )
}

export default Plans
