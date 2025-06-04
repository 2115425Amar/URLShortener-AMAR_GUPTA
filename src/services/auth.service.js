// D:\binmile-assignmant\URL_SHORTNER-master\URL_SHORTNER-master\BACKEND\src\services\auth.service.js
import { createUser, findUserByEmail, findUserByEmailByPassword } from "../dao/user.dao.js"
import { ConflictError } from "../utils/errorHandler.js"
import jsonwebtoken from "jsonwebtoken";

const signToken = (payload) => {
    return jsonwebtoken.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
};

export const registerUser = async (name, email, password) => {
    const user = await findUserByEmail(email)
    if(user) throw new ConflictError("User already exists")

    const newUser = await createUser(name, email, password)
    const token = await signToken({id: newUser._id})

    return {token,user}
}

export const loginUser = async (email, password) => {
    const user = await findUserByEmailByPassword(email)
    if(!user) throw new Error("Invalid email or password")

    const isPasswordValid = await user.comparePassword(password)
    if(!isPasswordValid) throw new Error("Invalid email or password")

    const token = signToken({id: user._id})

    return {token,user}
}