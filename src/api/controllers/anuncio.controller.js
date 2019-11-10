const AnuncioService = require('../../services/anuncio.service');
 
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
    };

 
 