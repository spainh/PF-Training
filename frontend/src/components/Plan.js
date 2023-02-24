import React from "react"
import { Card,Button } from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"
// pass in plan from plan.js so this component knows what it is (descructuring)
const Plan = ({ plan }) => {
  return (
    <>
      {/* margin 3 padding 3 and rounded */}
      <Card className='m-3 p-3 rounded planCard border-primary'>
        {/* may not need but for specifying each plan (for purchasing) */}
        {/* <Link to={`/Plan/${plan._id}`}/> */}
        <Card.Body>
          {/* will put plans name in a div and display */}
          <Card.Title as='h3'>
            {/* <div className="card-header">{plan.name}</div> */}
            <div className="">{plan.name}</div>
          </Card.Title>
          {/* description of each plan (can edit later to add benefits maybe) */}
          <Card.Text as='div'>
            <div className='my-1 '><em>{plan.description}</em></div>
          </Card.Text>    
          {/* each plans price */}
          <Card.Text as='h3'>
            <div className="my-3">${plan.price}</div>
            </Card.Text>
          <Button className="btn-primary rounded">Get Started</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Plan
