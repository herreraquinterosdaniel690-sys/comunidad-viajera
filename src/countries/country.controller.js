import Country from "./country.model.js";

export const getCountries = async (req, res) => {
    try {
        const countries = await Country.find();
        return res.status(200).json({
            success: true,
            countries
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener los países",
            err
        });
    }
};

export const createCountry = async (req, res) => {
    try {
        const data = req.body;
        const country = await Country.create(data);
        return res.status(201).json({
            success: true,
            message: "País creado exitosamente",
            country
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error al crear el país",
            err
        });
    }
};
