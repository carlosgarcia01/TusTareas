const AsignaturaService = require('../../services/asignatura.service');
const Asignatura = require('../models/asignatura');

    module.exports = {
      async getAsignatures(req, res, next) {
        const asignatures = await AsignaturaService.getAllAsignatures();
 
        return res.status(200).send({ asignatures });
      },
 
      async getAsignature(req, res, next) {
        const { id } = req.params;
 
        const asignature = await AsignaturaService.getAsignatureById(id);
 
        return res.status(200).send({ asignature });
      },

      async postAsignatura(req, res, next) {
        let asignaturaRecibida = new Asignatura()
        asignaturaRecibida.codigo =req.body.codigo;
        asignaturaRecibida.nombre =req.body.nombre;
        asignaturaRecibida.tipo_asignatura =req.body.tipo_asignatura;
 
        const asignatura_nueva = await AsignaturaService.postAsignatura(asignaturaRecibida);
 
        return res.status(200).send({ asignatura_nueva});
      }

      
      

    };
