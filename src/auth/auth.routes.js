import { Router } from "express";
import express from "express";
import { register,login } from "./auth.controller.js"
import { publicLimiter, loginLimiter } from "../../middlewares/request-limit.js"
import { uploadProfilePicture } from "../../middlewares/file-uploader.js";
import { loginValidator, registerValidator } from "../../middlewares/auth-validator.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { handleMulterError } from "../../middlewares/multer-error-handler.js";

const CURRENT_DIR = dirname(fileURLToPath(import.meta.url));

const router = Router()

router.post('/register',
  publicLimiter,
    uploadProfilePicture.single('profilePicture'),
    handleMulterError,
    registerValidator,
    register
)

router.post('/login', loginLimiter, loginValidator,login)

router.use(
    "/getImage",
    express.static(join(CURRENT_DIR, "../../assets/img"))
  );

export default router