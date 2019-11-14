const TipoAsignaturaService = require('../../services/tipo_asignatura.service');
const TipoAsignatura= require('../models/tipo_asignatura'); 

module.exports = {
  async getTipoAsignaturas(req, res, next)
  {
    const tipo_asignaturas = await TipoAsignaturaService.getAllTipoAsignaturas();

    return res.status(200).send({ tipo_asignaturas });
  },

  async getTipoAsignatura(req, res, next) 
  {
    const { id } = req.params;

    const tipo_asignatura = await TipoAsignaturaService.getTipoAsignaturaById(id);

    return res.status(200).send({ tipo_asignatura });
  },


  async postTipoAsignatura(req, res, next) {
    let tipoAsignaturaRecibida = new TipoAsignatura()
    tipoAsignaturaRecibida.id =req.body.id;
    tipoAsignaturaRecibida.nombre =req.body.nombre;
    

    const tipo_Asignatura_nueva = await tipoAsignaturaRecibida.postTipoAsignatura(tipoAsignaturaRecibida);

    return res.status(200).send({ tipo_Asignatura_nueva});
  }

};
