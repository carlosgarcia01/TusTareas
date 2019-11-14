const AsignaturaService = require('../../services/asignatura.service');


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
      
      

    };
