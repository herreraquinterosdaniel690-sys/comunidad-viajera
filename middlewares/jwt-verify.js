import jwt from 'jsonwebtoken'

export const validateJWT = (req, res, next) => {
    let token = req.headers['authorization'] || 
        (req.body && req.body.token) || 
        req.query.token

    if (!token) {
        console.log("❌ NO SE ENCONTRÓ TOKEN");
        return res.status(401).json({
            message: 'Es necesario el token de authorización'
        })
    }

    try {
        console.log("🎟️ TOKEN RECIBIDO:", token.substring(0, 20) + "...");
        token = token.replace(/^Bearer\s+/, "")
        const decoded = jwt.verify(token, process.env.TOKEN_KEY)
        console.log("✅ DECODED:", decoded)
        req.uid = decoded.uid
    } catch (error) {
        console.error("❌ ERROR VALIDATING JWT:", error.message);
        return res.status(401).json({
            message: 'Token no válido, rechazado ya que fue modificado'
        })
    }
    return next()
}