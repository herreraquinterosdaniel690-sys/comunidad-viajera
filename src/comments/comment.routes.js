import { Router } from "express";
import { createComment, getComments } from "./comment.controller.js";
import { createCommentValidator } from "../../middlewares/comment-validator.js";
import { validateJWT } from "../../middlewares/jwt-verify.js";
import { publicLimiter, authtenticatedLimiter } from "../../middlewares/request-limit.js";

const router = Router();

// Crear comentario
router.post("/", validateJWT, authtenticatedLimiter, createCommentValidator, createComment);

// Obtener comentarios de una publicación
router.get("/:postId", publicLimiter, getComments);

export default router;