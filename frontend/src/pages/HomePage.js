import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import frontPic from "../sample_images/CBum.jpg"
const Home = () => {
  return (
    <section>
      <Container>
        <div className='ms-auto py-3'>
          <h2><em>When you Train Right</em></h2>
            <h2 className=''><em>&nbsp;You see result's</em></h2>
            <div className='text-center'>
              <img src={frontPic} alt='frontpic'></img>
            </div>
        </div>
      </Container>
    </section>
  )
}

export default Home
