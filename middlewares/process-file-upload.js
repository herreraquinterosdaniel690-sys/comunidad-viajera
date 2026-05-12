   import { basename } from 'path';

export const processFileUpload = (req, res, next) => {
    if (req.file) {
        // Con Cloudinary, no existe "destination" sino "path" que trae la URL directa
        if (req.file.destination) {
            const subFolder = basename(req.file.destination);
            req.fileRelativePath = `${subFolder}/${req.file.filename}`
        } else {
            req.fileRelativePath = req.file.path;
        }
    }
    next()
}
