const UsuarioService = require('../../services/usuario.service');
 
module.exports = {
  async getUsuarios(req, res, next) {
    const usuarios = await UsuarioService.getAllUsuarios();

    return res.status(200).send({ usuarios });
  },

  async getUsuario(req, res, next) {
    const { id } = req.params;

    const usuario = await UsuarioService.getUsuarioById(id);

    return res.status(200).send({ usuario });
  },
};
