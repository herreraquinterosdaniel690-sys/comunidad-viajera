import PlaceComment from './placeComment.model.js';
import Place from './place.model.js';

export const createPlaceComment = async (req, res) => {
    try {
        const { text, place } = req.body;
        const authorId = req.uid;

        const comment = await PlaceComment.create({
            text,
            place,
            author: authorId
        });

        // Agregar el comentario al array de comentarios del lugar
        await Place.findByIdAndUpdate(place, {
            $push: { comments: comment._id }
        });

        const populatedComment = await PlaceComment.findById(comment._id)
            .populate('author', 'username name surname profilePicture')
            .populate('place', 'nombre');

        return res.status(201).json({
            message: "Comentario creado exitosamente",
            comment: populatedComment,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error al crear el comentario",
            error: error.message,
        });
    }
};

export const getPlaceComments = async (req, res) => {
    try {
        const { placeId } = req.params;
        const comments = await PlaceComment.find({ place: placeId }).populate(
            "author",
            "username name surname profilePicture"
        ).sort({ createdAt: -1 });
        
        return res.status(200).json({
            message: "Comentarios obtenidos exitosamente",
            comments,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al obtener los comentarios",
            error: error.message,
        });
    }
};
