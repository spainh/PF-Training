// bring in express
import express from "express"
// bring in dotenv
import dotenv from "dotenv"
import connectDB from './config/db.js'
import planRoutes from './routes/planRoutes.js'
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"

dotenv.config()

connectDB()
// init express
const app = express()

app.get("/", (req, res) => {
  res.send("API is running...")
})

// anything that goes to /api/products will be linked to
// productedRoutes...
app.use('/api/plans', planRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
