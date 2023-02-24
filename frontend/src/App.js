import React from "react"
import { Container } from "react-bootstrap"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/HomePage"
import Plans from "./pages/PlansPage"
import Content from "./pages/ContentPage"
import Blog from "./pages/BlogPage"
import {Route, Routes } from "react-router-dom"
function App() {
  return (
    <body>
      {/* padding top and bottom */}
      <main className="home">
      <Header />
          {/* set routes for each page */}
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/Content' element={<Content />} />
            <Route path='/Blog' element={<Blog />} />
            <Route path='/Plans' element={<Plans />} />
          </Routes>
      </main>
      <Footer />
    </body>
  )
}

export default App
