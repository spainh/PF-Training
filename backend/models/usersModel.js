import mongoose from "mongoose"

const usersSchema = new mongoose.Schema({
fname: {
    type: String,
    required: true,
  },
lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },

})

const User = mongoose.model("User", usersSchema)

export default User
