import { check } from 'express-validator'
import {validarCampos} from './validate-values.js'
import {validateJWT} from './jwt-verify.js'
import { authtenticatedLimiter, publicLimiter} from "./request-limit.js";
import { existePost } from '../helpers/db-validators.js'

export const createPostValidator = [
    validateJWT,
    authtenticatedLimiter,
    (req, res, next) => {
        if (req.is('multipart/form-data')) {
            if (!req.body.title) {
                return res.status(400).json({ message: 'El titulo es obligatorio' });
            }
            if (req.body.title.length > 100) {
                return res.status(400).json({ message: 'El titulo no debe de exceder los 100 caracteres' });
            }
            if (!req.body.content) {
                return res.status(400).json({ message: 'El contenido es obligatorio' });
            }
            return next();
        } else {
            next();
        }
    },
    check('title', 'El titulo es obligatorio') .not ().isEmpty(),
    check('title', 'El titulo no debe de exceder los 100 caracteres').isLength({max: 100}),
    check('content', 'El contenido es obligatorio').not().isEmpty(),
    (req, res, next) => {
        if (req.is('multipart/form-data')) {
            return next();
        }
        return validarCampos(req, res, next);
    }
];

export const getPostValidator = [
  publicLimiter,
  check("id", "El ID del post es obligatorio").not().isEmpty(),
  check("id", "El ID debe ser un ObjectId válido").isMongoId(),
  check("id").custom(existePost),
  validarCampos,
];