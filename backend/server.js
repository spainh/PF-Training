// bring in express
import express from "express"
// bring in dotenv
import dotenv from "dotenv"
import { config } from "dotenv"
import connectDB from "./config/db.js"
import planRoutes from "./routes/planRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
import usersRoute from './routes/usersRoute.js'
import cors from "cors"

dotenv.config()
connectDB()

// init express
const app = express()
app.use(express.json())

app.use(cors())
app.get("/", (req, res) => {
  res.send("API is running...")
})

app.get("/api/config/paypal", (req, res) => res.send(process.env.CLIENT_ID))

app.use('/users/create', usersRoute)


app.use(express.static("public"))

// anything that goes to /api/products will be linked to
// productedRoutes...
app.use("/api/plans", planRoutes)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
