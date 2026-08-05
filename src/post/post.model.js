import { Schema, model} from "mongoose";



const postSchema = new Schema({

    title:{

        type:String,

        required: true,

        trim: true,

    },

    content:{

        type: String,

        required: true,

        trim: true

    },

    author:{

        type: Schema.Types.ObjectId,

        ref: 'User',

        required: true

    },

    image:{
        type: String,
        default: null
    },

    comments: [{

        type: Schema.Types.ObjectId,

        ref: 'Comment'

    }]

    },{

         timestamps: true,

        versionKey: false

})



export default model('Post', postSchema)