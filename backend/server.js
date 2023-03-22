// bring in express
import express from "express"
// bring in dotenv
import dotenv from "dotenv"
import plans from "./data/plans.js"
import connectDB from './config/db.js'

dotenv.config()

connectDB()
// init express
const app = express()

app.get("/", (req, res) => {
  res.send("API is running...")
})
// route to get plans
app.get("/api/plans", (req, res) => {
  res.json(plans)
})
// route to get plan by id
app.get("/api/plans/:id", (req, res) => {
  // get single product
  const plan = plans.find((p) => p._id === req.params.id)
  //   return single product
  res.json(plan)
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
