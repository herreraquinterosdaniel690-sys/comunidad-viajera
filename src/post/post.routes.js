import { Router } from 'express'
import { createPost,
     getAllPost, 
     getPostById
} from './post.controller.js'
import { createPostValidator, getPostValidator } from '../../middlewares/post-validator.js'
import { validateJWT } from "../../middlewares/jwt-verify.js";
import { publicLimiter, authtenticatedLimiter } from "../../middlewares/request-limit.js";

const router = Router()

router.post('/', validateJWT, authtenticatedLimiter, createPostValidator, createPost)

router.get('/', publicLimiter, getAllPost)

router.get('/:id', publicLimiter, getPostValidator, getPostById)

export default router
