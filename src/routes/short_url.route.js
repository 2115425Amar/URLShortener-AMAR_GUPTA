// D:\binmile-assignmant\URL_SHORTNER-master\URL_SHORTNER-master\BACKEND\src\routes\short_url.route.js
import express from 'express';
import { createShortUrl } from '../controller/short_url.controller.js';
const router = express.Router();

router.post("/",createShortUrl);

export default router;