import Place from "./place.model.js";

export const createPlace = async (req, res) => {
    try {
        console.log("📦 BODY:", req.body);
        console.log("🖼️ FILE:", req.file);

        if (!req.body.nombre || !req.body.descripcion || !req.body.pais) {
            console.log("❌ FALTAN CAMPOS:", req.body);
            return res.status(400).json({
                success: false,
                message: "Faltan campos obligatorios (nombre, descripcion, pais)"
            });
        }

        if (!req.file) {
            console.log("❌ NO SE RECIBIÓ IMAGEN");
            return res.status(400).json({
                success: false,
                message: "La imagen es obligatoria"
            });
        }

        const data = req.body;
        if (req.file) {
            data.imagen = req.fileRelativePath || req.file.filename;
        }

        console.log("DATOS A GUARDAR:", {
            ...req.body,
            file: req.file
        });

        const place = await Place.create(data);

        return res.status(201).json({
            success: true,
            message: "Lugar turístico creado exitosamente",
            place
        });
    } catch (error) {
        console.log("💥 ERROR REAL DEL BACKEND:");
        console.log(error);
        console.log("STACK:", error.stack);

        return res.status(500).json({
            message: "Error interno",
            error: error.message
        });
    }
};

export const getPlacesByCountry = async (req, res) => {
    try {
        const { countryId } = req.params;
        const places = await Place.find({ pais: countryId }).populate('pais', 'nombre bandera');

        return res.status(200).json({
            success: true,
            places
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener los lugares turísticos",
            err
        });
    }
};

export const getPlaceById = async (req, res) => {
    try {
        const { id } = req.params;
        const place = await Place.findById(id).populate('pais', 'nombre bandera');

        if (!place) {
            return res.status(404).json({
                success: false,
                message: "Lugar turístico no encontrado"
            });
        }

        return res.status(200).json({
            success: true,
            place
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener el lugar turístico",
            err
        });
    }
};
