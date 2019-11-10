const TipoAsignaturaService = require('../../services/tipo_asignatura.service');
 
module.exports = {
  async getTipoAsignaturas(req, res, next) {
    const tipo_asignaturas = await TipoAsignaturaService.getAllTipoAsignaturas();

    return res.status(200).send({ tipo_asignaturas });
  },

  async getTipoAsignatura(req, res, next) {
    const { id } = req.params;

    const tipo_asignatura = await TipoAsignaturaService.getTipoAsignaturaById(id);

    return res.status(200).send({ tipo_asignatura });
  },
};
