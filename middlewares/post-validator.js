import { check } from 'express-validator'
import {validarCampos} from './validate-values.js'
import {validateJWT} from './jwt-verify.js'

export const createPostValidator = [
    validateJWT,
    check('tittle', 'El titulo es obligatorio') .not ().isEmpty(),
    check('tittle', 'El titulo no debe de exceder los 100 caracteres').isLength({max: 100}),
    check('content', 'El contenido es obligatorio').not().isEmpty(),
    validarCampos
]
