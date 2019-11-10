const { Router } = require('express');
const { NotFound } = require('http-errors');
const morgan = require('morgan');

const logger = require('../config/logger');


//owns imports routes
const anuncio_routes = require('./routes/anuncio.routes');
const notificacion_routes= require('./routes/notificacion.routes');
const asignature_routes=require('./routes/asignatura.routes');
const calificacion_routes=require('./routes/calificacion.routes');
const tipo_asignatura_routes=require('./routes/tipo_asignatura.routes');
const sugerencia_routes=require('./routes/sugerencia.routes');
const usuario_routes=require('./routes/usuario.routes');





const router = Router();

/**
 * Router configuration
 */
router.use(
  morgan(
    '[:date[clf]] ":method :url HTTP/:http-version" :status - :remote-addr - :remote-user ":referrer" ":user-agent"',
    {
      stream: {
        write: message => logger.info(message),
      },
    }
  )
);

/**
 * API routes
 */
router.get('/', (req, res) => res.sendStatus(200));

//owns routes
router.use('/anuncios', anuncio_routes);
router.use('/notificaciones',notificacion_routes);
router.use('/asignatures',asignature_routes);
router.use('/calificaciones',calificacion_routes);
router.use('/sugerencias',sugerencia_routes);
router.use('/tipo_asignatures',tipo_asignatura_routes);
router.use('/users',usuario_routes);


/**
 * 404 error handling
 */
router.use((req, res, next) => {
  const { baseUrl, url, method } = req;

  next(new NotFound(`The route '${method} ${baseUrl}${url}' doesn't exist.`));
});

module.exports = router;
