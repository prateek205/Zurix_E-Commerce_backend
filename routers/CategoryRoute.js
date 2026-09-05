import express from "express"
import { createCategory } from "../controllers/CategoryController.js"

const router = express.Router()

router.post("/createCategory", createCategory)

export default router;