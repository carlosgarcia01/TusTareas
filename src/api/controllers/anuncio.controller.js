const AnuncioService = require('../../services/anuncio.service');
const Anuncio = require('../models/anuncio');

    module.exports = {
      async getAnuncios(req, res, next) {
        const anuncios = await AnuncioService.getAllAnuncios();
 
        return res.status(200).send({ anuncios });
      },
 
      async getAnuncio(req, res, next) {
        const { id } = req.params;
 
        const anuncio = await AnuncioService.getAnuncioById(id);
 
        return res.status(200).send({ anuncio });
      },

      async postAnuncio(req,res,next)
      {

        let anuncio_recibido = new Anuncio();
        anuncio_recibido.título_anuncio =req.body.título_anuncio;
        anuncio_recibido.descripcion =req.body.descripcion;
        anuncio_recibido.tarifa_hora =req.body.tarifa_hora;
        anuncio_recibido.asignatura =req.body.asignatura;

        const anuncio_nuevo = await AnuncioService.postAnuncio(anuncio);

        return res.status(200).send({ anuncio_nuevo });
      }

    };

 
 