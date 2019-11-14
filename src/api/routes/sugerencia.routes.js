const Router = require('express-promise-router').default;
 
const sugerenciaController = require('../controllers/sugerencia.controller');
 
    const router = Router();
 
    router.get('/', sugerenciaController.getSugerencias);
    router.get('/:id', sugerenciaController.getSugerencia);
    router.post('/',sugerenciaController.postSugerencia);
    module.exports = router; 
 