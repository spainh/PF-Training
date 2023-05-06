import mongoose from "mongoose"

const usersSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
})
// should "User" be switched to users to match mongo db collection name??
const User = mongoose.model("users", usersSchema)

export default User
