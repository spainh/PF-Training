import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import frontPic from "../sample_images/CBum.jpg"
const Home = () => {
  return (
    
    <section>
    <Row>
        <Col><h2><em>When you Train Right</em></h2></Col>
        <row>

        </row>
    </Row>
    <Row className="home">
    <h2><em>You see result's</em></h2>
    <div className="text-center">
    <img src={frontPic} alt= "frontpic"></img>
    </div>
        <Col className="text-center">
        </Col>
    </Row>
  </section>
  )
}

export default Home
