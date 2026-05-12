import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

// Cargar variables de entorno si no se han cargado aún
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log("☁️ Cloudinary Configured:", {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY ? "***" + process.env.CLOUDINARY_API_KEY.slice(-4) : "MISSING",
    has_secret: !!process.env.CLOUDINARY_API_SECRET
});

export default cloudinary;
