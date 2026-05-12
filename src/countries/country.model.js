import { Schema, model } from "mongoose";

const countrySchema = Schema({
    nombre: {
        type: String,
        required: [true, "El nombre del país es obligatorio"],
        unique: true
    },
    bandera: {
        type: String
    }
}, {
    timestamps: true,
    versionKey: false
});

export default model("Country", countrySchema);
