import React, { useState, useEffect } from "react"
import { Card, Button, Row, Col, Container } from "react-bootstrap"
import Plan from "../components/Plan.js"
import axios from "axios"
const Plans = () => {
  const [plans, setPlans] = useState([])

  useEffect(() => {
    const fetchPlans = async () => {
      const { data } = await axios.get('/api/plans')
    
    
      setPlans(data)
    }

    fetchPlans()
  }, [])
  return ( 
  <>
  <Container>
    <h1 className="ms-auto py-3 planCard">Plans</h1>
    <Row>
      {plans.map((plan) => (
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
