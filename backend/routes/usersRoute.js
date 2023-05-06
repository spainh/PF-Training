import express from "express"
import asyncHandler from "express-async-handler"
const router = express.Router()
import User from "../models/usersModel.js"

// @desc all plan
// @route GET /api/plans
// @access Public
router.post(
  "/add",
  asyncHandler(async (req, res) => {
    const user = await req.body// tests actions
    // res.status(401)
    // throw new Error('Not Authorized')
    .res
      .json(user)
  })
)
// router.post(
//   "/add",
//   asyncHandler(async (req, res) => {
//     const payload = await req.body
//     const new_inst = new User(payload)
//     new_inst
//       .save()
//       .then((data) => {
//         console.log("data is : " + data)
//       })
//       .catch((e) => {
//         console.log("error" + e)
//       })
//     // tests actions
//     // res.status(401)
//     // throw new Error('Not Authorized')
//     res.json(plans)
//   })
// )
export default User
