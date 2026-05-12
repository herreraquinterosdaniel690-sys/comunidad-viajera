import rateLimit from "express-rate-limit";

const windowMs = 15 * 60 * 1000;
const max = 75;

export const publicLimiter = rateLimit({
    windowMs,
    max,
    message: `Demasiadas peticiones, intenta de nuevo mas tarde.`,
    standardHeaders: true,
    legacyHeaders: false,
})

export const loginLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minuto
    max: 5, // Solo 5 intentos
    message: "Demasiados intentos de inicio de sesión, intenta de nuevo en un minuto",
    standardHeaders: true,
    legacyHeaders: false,
});

export const authtenticatedLimiter = rateLimit({
    windowMs,
    max,
    message: `Demasiadas peticiones, intenta de nuevo mas tarde.`,
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: (req) => `uid:${req.uid}`
})
