import React from "react"
import  { Container } from 'react-bootstrap'
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import Plans from "./pages/Plans"
import Content from "./pages/Content"
import Blog from "./pages/Blog"
function App() {
  return (
    <>
      <Header/>
      {/* padding top and bottom */}
      <main className="py-3">
        <Home/>
        <Plans/>
        <Content/>
        <Blog/>
        {/* <Container/>
        {/* <h1>Welcome to Bulking Buddies</h1> */}
        {/* <Container/> */}
      </main>
      <Footer />
    </>
  )
}

export default App
