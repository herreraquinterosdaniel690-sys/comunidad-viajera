import { check } from 'express-validator'
import { validarCampos } from './validate-values.js'

export const createPlaceValidator = [
    check('nombre', 'El nombre del lugar es obligatorio').not().isEmpty(),
    check('pais', 'El ID del país es obligatorio').not().isEmpty(),
    check('pais', 'El ID del país debe ser un ObjectId válido').isMongoId(),
    check('descripcion', 'La descripción del lugar es obligatoria').not().isEmpty(),
    check('descripcion', 'La descripción del lugar no debe de exceder los 500 caracteres').isLength({max: 500}),
    validarCampos
]
