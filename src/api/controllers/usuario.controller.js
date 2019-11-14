const UsuarioService = require('../../services/usuario.service');
const Usuario = require('../models/usuario');
module.exports = {
  async getUsuarios(req, res, next) 
  {
    const usuarios = await UsuarioService.getAllUsuarios();

    return res.status(200).send({ usuarios });
  },

  async getUsuario(req, res, next)
   {
    const { id } = req.params;

    const usuario = await UsuarioService.getUsuarioById(id);

    return res.status(200).send({ usuario });
  },

  async postUsuario(req,res,next)
  {

    let usuario_recibido = new Anuncio()
    usuario_recibido.identificación =req.body.identificación;
    usuario_recibido.nombre =req.body.nombre;
    usuario_recibido.apellidos =req.body.apellidos;
    usuario_recibido.contacto =req.body.contacto;
    usuario_recibido.ocupacion =req.body.ocupacion;
    usuario_recibido.correo =req.body.correo;
    usuario_recibido.contrasena =req.body.contrasena;
    usuario_recibido.calificacion =req.body.calificacion;
    usuario_recibido.notificacion =req.body.notificacion;
    usuario_recibido.anuncio =req.body.anuncio;

    const usuario_nuevo = await UsuarioService.postUsuario(usuario_recibido);

    return res.status(200).send({ usuario_nuevo });
  }

};
