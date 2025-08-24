
import jwt from 'jsonwebtoken'
import Company from '../models/Company.js'
//decode the token that we will get from headers and fetch the company data

export const protectCompany = async (req, res, next) => {
    const token = req.headers.token
    if (!token) {
        return res.json({ success: false, message: "Not authorized, login Again" })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.company = await Company.findById(decoded.id).select('-password')
        next()

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}
