const Router = require('express-promise-router').default;
 
const calificacionController = require('../controllers/calificacion.controller');
 
    const router = Router();
 
    router.get('/', calificacionController.getCalificaciones);
    router.get('/:id', calificacionController.getCalificacion);
    router.post('/',calificacionController.postCalificacion);
    module.exports = router;
 