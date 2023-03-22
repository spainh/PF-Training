import express from "express"
import plans from "../data/plans.js"
import asyncHandler from "express-async-handler"
const router = express.Router()
import Plan from "../models/plansModel.js"

// @desc all plan
// @route GET /api/plans
// @access Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const plans = await Plan.find({})

    res.json(plans)
  })
)
// @desc single plan
// @route GET /api/plans/:id
// @access Public

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const plan = await Plan.findById(req.params.id)

    if (plan) {
      res.json(plan)
    } else {
      // will format due to error handling middleware
      res.status(404)
      throw new Error('Product not found')
    }
    
    res.json(plans)
  })
)

export default router