import User from '../src/users/user.mode.js'

export const emailExist = async (email = '') => {
    const existe = await User.findOne({email})

    if(existe){
        throw new Error ('El email ya está registrado')
    }
}

