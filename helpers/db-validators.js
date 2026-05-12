import User from '../src/users/user.mode.js'
import Post from '../src/post/post.model.js'

export const emailExist = async (email = '') => {
  const existe = await User.findOne({ email })

  if (existe) {
    throw new Error('El email ya está registrado')
  }
}

export const existePost = async (id = '') => {
  const existe = await Post.findById(id)
  if (!existe) {
    throw new Error(`El post con ID ${id} no existe`)
  }
}

