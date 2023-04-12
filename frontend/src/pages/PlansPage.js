import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Card, Button, Row, Col, Container } from "react-bootstrap"
import Plan from "../components/Plan.js"
import Message from "../components/Message.js"
import Loader from "../components/Loader.js"
import { listPlans } from "../actions/planActions.js"

const Plans = () => {
  const dispatch = useDispatch()

  const planList = useSelector((state) => state.planList)
  const { loading, error, plans } = planList
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
          <Message variant='danger'>{error}</Message>
        ) : (
          <Row>
            {plans.map((plan) => (
              <Col sm={12} md={6} lg={4} xl={3}>
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
