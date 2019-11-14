const Router = require('express-promise-router').default;
 
const tipoAsignaturaController = require('../controllers/tipo_asignatura.controller');
 
    const router = Router();
 
    router.get('/', tipoAsignaturaController.getTipoAsignaturas);
    router.get('/:id', tipoAsignaturaController.getTipoAsignatura);
    router.get('/', tipoAsignaturaController.postTipoAsignatura);
 
    module.exports = router; 
 