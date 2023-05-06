import React from "react"
import { Card, Container } from "react-bootstrap"
// import CardHeader from "react-bootstrap/esm/CardHeader"
// pass in plan from plan.js so this component knows what it is (descructuring)
const Arms = ({ plan }) => {
  return (
    <Container>
      <div>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/n3HN4NQdcqU'
          title='YouTube video player'
          allow='accelerometer; autoplay; '
          allowfullscreen
        ></iframe>
      </div>
    </Container>
  )
}

export default Arms
