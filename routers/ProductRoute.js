import express from "express"
import { CreateProduct } from "../controllers/ProductController.js"

const router = express.Router()


router.post("/addProducts",CreateProduct)

export default router;