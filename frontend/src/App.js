import React from "react"
import { Container } from "react-bootstrap"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import Plans from "./pages/Plans"
import Content from "./pages/Content"
import Blog from "./pages/Blog"
import {Route, Routes } from "react-router-dom"
function App() {
  return (
    <>
      <Header />
      {/* padding top and bottom */}
      <main className='py-3'>
          {/* set routes for each page */}
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/Content' element={<Content />} />
            <Route path='/Blog' element={<Blog />} />
            <Route path='/Plans' element={<Plans />} />
          </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
