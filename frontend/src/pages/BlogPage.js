import React from "react"
import { Container } from "react-bootstrap"
import Slider from '../components/Slider'

const Blog = () => {
  return (
    <div>
      <Container>
        <h1 className='text-center py-3'>About Us</h1>
        <div className="text-center">
        <Slider/>
        </div>
      </Container>
    </div>
  )
}

export default Blog
