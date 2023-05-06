// bring in express
import express from "express"
// bring in dotenv
import dotenv from "dotenv"
import { config } from "dotenv"
import connectDB from "./config/db.js"
import planRoutes from "./routes/planRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
import usersRoute from "./routes/usersRoute.js"
import cors from "cors"
import User from "./routes/usersRoute.js"
dotenv.config()
connectDB()

// init express
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.get("/", (req, res) => {
  res.send("API is running...")
})

// should figure out how to add this back into my routes folder then just call usersRoute
// like app.post("/add", usersRoute) but actually work
app.post("/add", (req, res) => {
  const payload = req.body
  const new_inst = new User(payload)
  new_inst
    .save()
    .then((data) => {
      console.log("data is : " + data)
    })
    .catch((e) => {
      console.log("error" + e)
    })
  // tests actions
  // res.status(401)
  // throw new Error('Not Authorized')
  // res.json(plans)
})

app.get("/show", (req, res) => {
  User.find()
    .then((data) => {
      console.log("data in table is : " + data)
    })
    .catch((e) => {
      console.log("error" + e)
    })
})

// app.get("/api/config/paypal", (req, res) => res.send(process.env.CLIENT_ID))

// const model = require("./models/usersModel.js")

// app.use(express.static("public"))

// anything that goes to /api/products will be linked to
// productedRoutes...
app.use("/api/plans", planRoutes)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
