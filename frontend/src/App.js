import React from "react"
import  { Container } from 'react-bootstrap'
import Footer from "./components/Footer"
import Header from "./components/Header"
function App() {
  return (
    <>
      <Header/>
      {/* padding top and bottom */}
      <main className="py-3">
        <Container/>
        <h1>Welcome to Bulking Buddies</h1>
        <Container/>
      </main>
      <Footer />
    </>
  )
}

export default App
