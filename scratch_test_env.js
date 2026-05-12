import dotenv from 'dotenv';
const result = dotenv.config();
console.log('Dotenv result:', result);
console.log('PORT:', process.env.PORT);
console.log('TOKEN_KEY:', process.env.TOKEN_KEY);
console.log('CLOUDINARY_CLOUD_NAME:', process.env.CLOUDINARY_CLOUD_NAME);
