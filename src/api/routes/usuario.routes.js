const Router = require('express-promise-router').default;
 
const usuarioController = require('../controllers/usuario.controller');
 
    const router = Router();
 
    router.get('/', usuarioController.getUsuarios);
    router.get('/:id', usuarioController.getUsuario);
    router.get('/', usuarioController.postUsuario);
    module.exports = router; 
 