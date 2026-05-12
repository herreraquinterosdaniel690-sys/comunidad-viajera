import { check } from 'express-validator'
import { validarCampos } from './validate-values.js'

export const createCountryValidator = [
    check('nombre', 'El nombre del país es obligatorio').not().isEmpty(),
    check('bandera', 'La bandera del país es obligatoria').not().isEmpty(),
    validarCampos
]
