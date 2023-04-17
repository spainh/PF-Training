import express from "express"
import asyncHandler from "express-async-handler"
const router = express.Router()
import User from "../models/usersModel.js"

// @desc all plan
// @route GET /api/plans
// @access Public
router.post(
  "/users/create",
  asyncHandler(async (req, res) => {
    const user = await req.body.
    // tests actions
    // res.status(401)
    // throw new Error('Not Authorized')
    res.json(plans)
  })
)

export default User