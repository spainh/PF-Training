import React from "react"
import { Card, Button, Row, Col, Container } from "react-bootstrap"
import plan from "../plan.js"
import Plan from "../components/Plan.js"
const Plans = () => {
  return ( 
  <>
  <Container>
    <h1 className="ms-auto py-3 planCard">Plans</h1>
    <Row>
      {plan.map((plan) => (
        <Col sm={13} md={6} lg={4} xl={3}>
          {/* renders Plan component then, passes in a
              plan from plans.js for each column */}
          <Plan plan={plan}/>
        </Col>
      ))}
    </Row>
    </Container>
  </>
  )
}

export default Plans
