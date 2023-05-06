import React from "react"
// import { Card, Button } from "react-bootstrap"
// import CardHeader from "react-bootstrap/esm/CardHeader"
// import { Link } from "react-router-dom"
import { Row, Col, Container } from "react-bootstrap"
import Sidebar from "../components/Sidebar"
// pass in plan from plan.js so this component knows what it is (descructuring)
const ChestPage = () => {
  return (
    <>
      <div>
      <Sidebar/>
        <Container>
          <h1 className='planCard'>Chest</h1>
          <Row>
            <Col className="planCard py-3">
              <div>
                <iframe
                  width='360'
                  title='Arms'
                  src='https://www.youtube.com/embed/n3HN4NQdcqU'
                  height='315'
                  allow='accelerometer; autoplay; '
                  allowfullscreen='true'
                ></iframe>
              </div>
            </Col>
            <Col className="planCard py-3 ">
              <div>
                <iframe
                  width='360'
                  title='Arms'
                  src='https://www.youtube.com/embed/n3HN4NQdcqU'
                  height='315'
                  allow='accelerometer; autoplay; '
                  allowfullscreen='true'
                ></iframe>
              </div>
            </Col>
            <Col className="planCard py-3">
              <div>
                <iframe
                  width='360'
                  title='Arms'
                  src='https://www.youtube.com/embed/n3HN4NQdcqU'
                  height='315'
                  allow='accelerometer; autoplay; '
                  allowfullscreen='true'
                ></iframe>
              </div>
            </Col>
            <Col className="planCard py-3 px-3">
              <div>
                <iframe
                  width='360'
                  title='Arms'
                  src='https://www.youtube.com/embed/n3HN4NQdcqU'
                  height='315'
                  allow='accelerometer; autoplay; '
                  allowfullscreen='true'
                ></iframe>
              </div>
            </Col>
            <Col className="planCard py-3 px-3">
              <div>
                <iframe
                  width='360'
                  title='Arms'
                  src='https://www.youtube.com/embed/n3HN4NQdcqU'
                  height='315'
                  allow='accelerometer; autoplay; '
                  allowfullscreen='true'
                ></iframe>
              </div>
            </Col>
            <Col className="planCard py-3 px-3">
              <div>
                <iframe
                  width='360'
                  title='Arms'
                  src='https://www.youtube.com/embed/n3HN4NQdcqU'
                  height='315'
                  allow='accelerometer; autoplay; '
                  allowfullscreen='true'
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ChestPage
