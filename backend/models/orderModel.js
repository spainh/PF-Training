import mongoose from "mongoose"

const orderSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  orderItem: [
    {
      name: { type: String, required: true },
      qty: { type: String, required: true },
      price: { type: String, required: true },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Plan",
      },
    },
  ],
  paymentMethod: {
    type: String,
    required: true,
  },
  paymentResult: {
    id: { type: String },
    status: { type: String },
    update_time: { type: String },
    email_address: { type: String },
  },
  taxPrice: {
    type: Number,
    required: true,
    default: 0.0,
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0.0,
  },
  isPaid: {
    type: Boolean,
    required: true,
    default: false,
  },
  paidAt: {
    type: Date,
  },
  // name: 'Annual',
  // description: '(12 Months)',
  // price: 1.00.toFixed(2),
  // features: 'Lorem ipsum',
})

const Order = mongoose.model("Order", orderSchema)

export default Order
