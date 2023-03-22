/*
 * Program to add or delete sample data to database
 */
import mongoose from "mongoose"
import dotenv from "dotenv"
import plans from "./data/plans.js"
import Plan from "./models/plansModel.js"
// import Order from "./models/orderModel.js"
import connectDB from "./config/db.js"

dotenv.config()

connectDB()

const importData = async () => {
  try {
    // await Order.deleteMany()
    await Plan.deleteMany()

    // const createdPlans = await Plan.insertMany(plans)

    const samplePlans = plans.map((plan) => {
      return { ...plan }
    })

    await Plan.insertMany(samplePlans)

    console.log("Data Imported!")
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    // await Order.deleteMany()
    await Plan.deleteMany()

    console.log("Data Destroyed!")
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

// allows us to run command in terminal to use functions
// check package.json scripts for data:import/destory commands...
if (process.argv[2] === "-d") {
  destroyData()
} else {
  importData()
}
