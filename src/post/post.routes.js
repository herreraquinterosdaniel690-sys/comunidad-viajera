import { Router } from 'express'
import { createPost,
     getAllPost, 
     getPostById
} from './post.controller.js'
import { createPostValidator, getPostValidator } from '../../middlewares/post-validator.js'

const router = Router()

router.post('/', createPostValidator, createPost)

router.get('/', getAllPost)

router.get('/:id', getPostValidator, getPostById)

export default router
