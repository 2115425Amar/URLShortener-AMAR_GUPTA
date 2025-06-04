// D:\binmile-assignmant\URL_SHORTNER-master\URL_SHORTNER-master\BACKEND\src\routes\user.routes.js
import express from "express"
import { getAllUserUrls } from "../controller/user.controller.js"
import { authMiddleware } from "../middleware/auth.middleware.js"

const router = express.Router()

router.post("/urls",authMiddleware, getAllUserUrls)

export default router