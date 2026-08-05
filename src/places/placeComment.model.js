import { Schema, model } from 'mongoose';

const placeCommentSchema = new Schema({
    text: {
        type: String,
        required: true,
        trim: true
    },
    place: {
        type: Schema.Types.ObjectId,
        ref: 'Place',
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

export default model('PlaceComment', placeCommentSchema);
