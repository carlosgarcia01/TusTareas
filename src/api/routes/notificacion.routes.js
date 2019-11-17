const Router = require('express-promise-router').default;
 
const notificacionController = require('../controllers/notificacion.controller');
 
    const router = Router();
 
    router.get('/', notificacionController.getNotificaciones);
    router.get('/:id', notificacionController.getNotificacion);
    router.post('/',notificacionController.postNotificacion);
 
    module.exports = router; 
 