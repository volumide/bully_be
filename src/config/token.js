import jwt from "jsonwebtoken"
import jwt_decode from "jwt-decode"

const accessToken = (user) => jwt.sign(user, "token", { expiresIn: "2h" })

const authenticate = (req, res, next) => {
  const auth = req.headers["authorization"]
  const token = auth ? auth.split(" ")[1] : ""
  if (!token)
    return res.status(401).json({
      "message": "unauthorized"
    })

  jwt.verify(token, "token", (err, user) => {
    if (err) {
      return res.status(403).json({
        "message": err.message
      })
    } else {
      req.user = user
      next()
    }
  })
}

const decodeToken = (reqs) => {
  let token = reqs.headers.authorization
  if (!token) return false
  token = token.split(" ")[1]
  return jwt_decode(token)
}

const token = { accessToken, authenticate, decodeToken }
export default token
