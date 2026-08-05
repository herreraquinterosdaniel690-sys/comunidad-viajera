import multer from "multer";

import { CloudinaryStorage } from "multer-storage-cloudinary";

import cloudinary from "../configs/cloudinary.js";

import { extname } from 'path';

import { v4 as uuidv4 } from 'uuid';



const MIMETYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"]

const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB



const createMulterConfig = (folderName) => {

    return multer({

        storage: new CloudinaryStorage({

            cloudinary: cloudinary,

            params: {

                folder: folderName,

                allowed_formats: ['jpeg', 'jpg', 'png', 'webp'],

                public_id: (req, file) => {

                    const fileExtension = extname(file.originalname)

                    const fileName = file.originalname.split(fileExtension)[0]

                    const shortUuid = uuidv4().substring(0, 8)

                    return `${fileName}-${shortUuid}`

                },

            },

        }),

        fileFilter: (req, file, cb) => {

            if (MIMETYPES.includes(file.mimetype)) cb(null, true)

            else cb(new Error('Tipo de archivo no permitido'))

        },

        limits: {

            fileSize: MAX_FILE_SIZE

        }

    })

}



// Almacenamiento organizado por carpetas dentro de Cloudinary

export const uploadProfilePicture = createMulterConfig("infacee/profiles")

export const uploadPlaceImage = createMulterConfig("infacee/places")

export const uploadPostImage = createMulterConfig("infacee/posts")

