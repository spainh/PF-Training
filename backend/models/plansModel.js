import mongoose from "mongoose"

const planSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  features: {
    type: String,
    required: true,
  },
//   // name: 'Annual',
//   // description: '(12 Months)',
//   // price: 1.00.toFixed(2),
//   // features: 'Lorem ipsum',
})

const Plan = mongoose.model("Plan", planSchema)

export default Plan
