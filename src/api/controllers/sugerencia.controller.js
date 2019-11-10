const SugerenciaService = require('../../services/sugerencia.service');
 
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
};
