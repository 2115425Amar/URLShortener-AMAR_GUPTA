// D:\binmile-assignmant\URL_SHORTNER-master\URL_SHORTNER-master\BACKEND\src\controller\user.controller.js
import wrapAsync from "../utils/tryCatchWrapper.js"
import { getAllUserUrlsDao } from "../dao/user.dao.js"

export const getAllUserUrls = wrapAsync(async (req, res) => {
    const {_id} = req.user
    const urls = await getAllUserUrlsDao(_id)
    res.status(200).json({message:"success",urls})
})