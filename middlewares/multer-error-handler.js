export const handleMulterError = (err, req, res, next) => {
    if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({
            success: false,
            message: 'No se pudo subir la imagen. Verifica el tamaño o el formato.'
        });
    }

    if (err.code === 'LIMIT_UNEXPECTED_FILE') {
        return res.status(400).json({
            success: false,
            message: 'No se pudo subir la imagen. Verifica el tamaño o el formato.'
        });
    }

    if (err.message === 'Tipo de archivo no permitido') {
        return res.status(400).json({
            success: false,
            message: 'No se pudo subir la imagen. Verifica el tamaño o el formato.'
        });
    }

    // Otros errores de Multer
    if (err.name === 'MulterError') {
        return res.status(400).json({
            success: false,
            message: 'No se pudo subir la imagen. Verifica el tamaño o el formato.'
        });
    }

    // Si no es un error de Multer, pasar al siguiente middleware
    next(err);
};
