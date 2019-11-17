const CalificacionService = require('../../services/calificacion.service');
const Calificacion = require('../models/calificacion');
    module.exports = {
      async getCalificaciones(req, res, next) {
        const calificaciones = await CalificacionService.getAllCalificationes();
 
        return res.status(200).send({ calificaciones });
      },
 
      async getCalificacion(req, res, next) {
        const { id } = req.params;
 
        const calificacion = await CalificacionService.getCalificacionById(id);
 
        return res.status(200).send({ calificacion });
      },

      async postCalificacion(req,res,next)
      {

        let calificacion_recibida = new Calificacion();
        calificacion_recibida.puntaje =req.body.puntaje;
        calificacion_recibida.comentario =req.body.comentario;
        

        const calificacion_nueva = await CalificacionService.postCalificacion(calificacion_recibida);

        return res.status(200).send({ calificacion_nueva });
      }
    };

 