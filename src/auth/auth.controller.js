import User from '../users/user.mode.js'
import { hash, verify } from 'argon2'
import { generarJWT } from "../../helpers/JWT-generate.js"

export const register = async (req, res) => {
    try {
        const data = req.body

        let profilePicture = req.file ? req.file.path : 'profiles/default-avatar.png'
        const encryptedPassword = await hash(data.password)

        const newUser = await User.create({
            name: data.name,
            surname: data.surname,
            username: data.username,
            email: data.email,
            password: encryptedPassword,
            profilePisture: profilePicture
        })
        return res.status(200).json({
            message: "Usuario registrado correctamente",
            userDetails: {
                User: newUser.username,
                email: newUser.email,
            },
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error al registrar el usuario',
            err: error.message
        })
    }
}
export const login = async (req, res) => {
    const { email, password, username } = req.body;

    try {
        const query = {};
        if (email) query.email = email.trim().toLowerCase();
        if (username) query.username = username.trim().toLowerCase();

        if (Object.keys(query).length === 0) {
            return res.status(400).json({ message: "Se requiere email o nombre de usuario" });
        }

        console.log("🔍 LOGIN QUERY:", query);

        const user = await User.findOne({
            $or: Object.entries(query).map(([key, value]) => ({ [key]: value })),
        });

        if (!user) {
            console.log("❌ USUARIO NO ENCONTRADO:", query);
            return res.status(401).json({ message: "Credenciales incorrectas" });
        }

        console.log("👤 USUARIO ENCONTRADO:", user.username);

        const validPassword = await verify(user.password, password);
        console.log("🔑 PASSWORD VÁLIDO:", validPassword);

        if (!validPassword) {
            return res.status(401).json({ message: "Credenciales incorrectas" });
        }

        const token = await generarJWT(user.id, user.email);
        console.log(token)

        return res.status(200).json({
            message: "inicio de sesión exitoso",
            userDetails: {
                username: user.username,
                token: token,
                profilePicture: user.profilePisture,
                uid: user.id
            },
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error del servidor",
            error: error.message,
        });
    }
};