import React from "react"
import Sidebar from "../components/Sidebar"
import Ratio from "react-bootstrap/Ratio"
import { Container } from "react-bootstrap"
const Content = () => {
  return (
    <main>
      <div>
      <Sidebar />
        <Container>
          <h1 className='text-center py-3'>Content</h1>
          {/* <div className='ratio ratio-21x9'>
            <iframe src="https://www.youtube.com/embed/gozU3CUIizs" allowFullScreen>
            </iframe>
          </div> */}
        </Container>
      </div>
    </main>
  )
}

export default Content
