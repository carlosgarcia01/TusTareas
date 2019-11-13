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

  async saveTipoAsignatura(req,res,next)
  {
    let newAsignatureType=new TipoAsignatura();
    newAsignatureType.nombre_tipo= req.body.descripcion;
    const typeAsignature= await TipoAsignaturaService.saveTipoAsignatura(newAsignatureType);

  }

};
