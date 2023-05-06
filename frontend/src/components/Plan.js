import React from "react"
import { Card, Button, Container } from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"
import { Link, useNavigate, createSearchParams } from "react-router-dom"
// pass in plan from plan.js so this component knows what it is (descructuring)
const Plan = ({ plan }) => {
  const navigate = useNavigate()

  const onSubmitHandler = (e) => {
    if (plan.name === "Annual") {
      navigate({
        search: createSearchParams({
          data: plan.price,
        }).toString(),
      })
    }
    if (plan.name === "Seasonal") {
      navigate({
        search: createSearchParams({
          data: plan.price,
        }).toString(),
      })
    }
    if (plan.name === "Quarterly") {
      navigate({
        search: createSearchParams({
          data: plan.price,
        }).toString(),
      })
    }
    if ((plan.name = "Monthly")) {
      navigate({
        search: createSearchParams({
          data: plan.price,
        }).toString(),
      })
    }
  }

  return (
    <Container onSubmit={onSubmitHandler}>
      {/* margin 3 padding 3 and rounded */}
      <Card className='m-3 p-3 rounded planCard border-primary'>
        {/* may not need but for specifying each plan (for purchasing) */}
        {/* <Link to={`/Plan/${plan._id}`}/> */}
        <Card.Body>
          {/* will put plans name in a div and display */}
          <Card.Title as='h3'>
            {/* <Card.Title as='h3'>
            {/* <div className="card-header">{plan.name}</div> */}
            {/* <Link to={`/Plan/${plan._id}`} className="text-decoration-none hover">{plan.name}</Link> */}
            {/* </Card.Title> */}

            {/* <div className="card-header">{plan.name}</div> */}
            <div className=''>{plan.name}</div>
          </Card.Title>
          {/* description of each plan (can edit later to add benefits maybe) */}
          <Card.Text as='div'>
            <div className='my-1 '>
              <em>{plan.description}</em>
            </div>
          </Card.Text>
          {/* each plans price */}
          <Card.Text as='h3'>
            <div className='my-3'>${plan.price}</div>
          </Card.Text>
          <Link to='/Credentials'>
            <Button onClick={onSubmitHandler} className='btn-success rounded'>
              Get Started
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Plan
