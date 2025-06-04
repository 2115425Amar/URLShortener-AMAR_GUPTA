// D:\binmile-assignmant\URL_SHORTNER-master\URL_SHORTNER-master\BACKEND\src\utils\helper.js
import jsonwebtoken from "jsonwebtoken"

export const verifyToken = (token) =>{
    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET)
    console.log(decoded.id)
    return decoded.id
}