import React from "react"
import { Container } from "react-bootstrap"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/HomePage"
import Plans from "./pages/PlansPage"
import Content from "./pages/ContentPage"
import Blog from "./pages/BlogPage"
import UserDetailsPage from "./pages/UserDetailsPage"
import {Route, Routes } from "react-router-dom"
import PlanPage from "./pages/PlanPage"
import PlaceOrderPage from "./pages/PlaceOrderPage"
import ArmsPage from "./pages/ArmsPage"
import ShouldersPage from "./pages/ShouldersPage"
import AbsPage from "./pages/AbsPage"
import BackPage from "./pages/BackPage"
import LegsPage from "./pages/LegsPage"
import ChestPage from "./pages/ChestPage"
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
            {/* <Route path='/Plan/:id' element={<PlanPage/>} /> */}
            <Route path='/Credentials' element={<UserDetailsPage/>}/>
            <Route path='/PlaceOrder' element={<PlaceOrderPage/>}/>
            <Route path="/Content/arms" element={<ArmsPage/>}/>
            <Route path="/Content/shoulders" element={<ShouldersPage/>}/>
            <Route path="/Content/abs" element={<AbsPage/>}/>
            <Route path="/Content/back" element={<BackPage/>}/>
            <Route path="/Content/legs" element={<LegsPage/>}/>
            <Route path="/Content/chest" element={<ChestPage/>}/>
          </Routes>
      </main>
      <Footer />
    </body>
  )
}

export default App
