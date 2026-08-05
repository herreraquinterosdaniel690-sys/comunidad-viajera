import { Router } from "express";
import { createPlaceComment, getPlaceComments } from "./placeComment.controller.js";
import { validateJWT } from "../../middlewares/jwt-verify.js";
import { publicLimiter, authtenticatedLimiter } from "../../middlewares/request-limit.js";

const router = Router();

// Crear comentario en lugar turístico
router.post("/", validateJWT, authtenticatedLimiter, createPlaceComment);

// Obtener comentarios de un lugar turístico
router.get("/:placeId", publicLimiter, getPlaceComments);

export default router;
