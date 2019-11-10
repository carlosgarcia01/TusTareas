const bodyParser = require('body-parser');
const express = require('express');
const expressErrorHandler = require('@kazaar/express-error-handler');
const helmet = require('helmet');

const api = require('./api');
const { host, port, env,db } = require('./config');
const logger = require('./config/logger');

const { httpErrorHandler, handleServerError, celebrateErrorParser } = expressErrorHandler(logger);

/**
 * Express server initialization
 */
const app = express();
const mongoose = require('mongoose');

app.set('host', host);
app.set('port', port);

/**
 * Application configuration
 */
app.use(bodyParser.json());
app.use(helmet());

/**
 * API routes
 */
app.use('/api', api);

/**
 * Base route
 */
app.get('/', (req, res) => res.sendStatus(200));

/**
 * Error handling
 */
app.use(celebrateErrorParser);
app.use(httpErrorHandler);

/**
 * Server start
 */

mongoose.connect(db, (err, res) => {
  if (err) {
    return console.log('Error al conectar a la base de datos: '+err)
  }
  console.log('Conexión a la base de datos establecida...')
  
 
  app
  .listen(port, host, () => {
    logger.info(`App is running at ${host}:${port} in ${env} mode`);
  })
  .on('error', handleServerError);
 
})


module.exports = app;
