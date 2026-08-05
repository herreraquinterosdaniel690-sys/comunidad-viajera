import { Schema, model } from "mongoose";

const placeSchema = Schema({
    nombre: {
        type: String,
        required: [true, "El nombre del lugar turístico es obligatorio"]
    },
    descripcion: {
        type: String
    },
    imagen: {
        type: String
    },
    pais: {
        type: Schema.Types.ObjectId,
        ref: 'Country',
        required: [true, "El país es obligatorio"]
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'PlaceComment'
    }]
}, {
    timestamps: true,
    versionKey: false
});

export default model("Place", placeSchema);
