const Router = require('express-promise-router').default;
 
const anuncioController = require('../controllers/anuncio.controller');
 
    const router = Router();
 
    router.get('/', anuncioController.getAnuncios);
    router.get('/:id', anuncioController.getAnuncio);
    router.post('/',anuncioController.postAnuncio);
    module.exports = router;
 