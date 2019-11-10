const Router = require('express-promise-router').default;
 
const asignatureController = require('../controllers/asignatura.controller');
 
    const router = Router();
 
    router.get('/', asignatureController.getAsignatures);
    router.get('/:id', asignatureController.getAsignature);
 
    module.exports = router;
 