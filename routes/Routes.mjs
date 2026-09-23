import express from "express"
import { HomeGet, HomePost, RegisterGet, RegisterPost } from "../controllers/Controllers.mjs"

const router = express.Router()

router.get("/register",RegisterGet)
router.get("/home",HomeGet)


router.post("/register",RegisterPost)
router.post("/home",HomePost)

export default router