const SugerenciaService = require('../../services/sugerencia.service');
const Sugerencia = require('../models/sugerencia');

module.exports = {
  async getSugerencias(req, res, next) {
    const sugerencias = await SugerenciaService.getAllSugerencias();

    return res.status(200).send({ sugerencias });
  },

  async getSugerencia(req, res, next) {
    const { id } = req.params;

    const sugerencia = await SugerenciaService.getSugerenciaById(id);

    return res.status(200).send({ sugerencia });
  },

  async postSugerencia(req,res,next)
  {

    let sugerencia_recibida = new Sugerencia();
    sugerencia_recibida.comentario =req.body.comentario;


    const sugerencia_nueva = await SugerenciaService.postSugerencia(sugerencia_recibida);

    return res.status(200).send({ sugerencia_nueva });
  }
};
