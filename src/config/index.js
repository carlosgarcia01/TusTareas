require('dotenv').config();

const { checkEnvironmentVariables } = require('../utils/env');

const envVariables = ['TUSTAREAS_JWT_SECRET'];

checkEnvironmentVariables(envVariables);

const env = process.env.NODE_ENV || 'development';
const isProduction = env === 'production';
const isDevelopment = !isProduction;
const isTest = env === 'test';

module.exports = {
  // Server options
  host: '0.0.0.0',
  port: parseInt(process.env.PORT, 10) || 8080,

  // Application environment
  env,
  isProduction,
  isDevelopment,
  isTest,
  db: process.env.MONGODB_URI || 'mongodb://carlosg:elclasicox1x@carloscluster-shard-00-00-pgwzh.mongodb.net:27017,carloscluster-shard-00-01-pgwzh.mongodb.net:27017,carloscluster-shard-00-02-pgwzh.mongodb.net:27017/TusTareas?ssl=true&replicaSet=CarlosCluster-shard-0&authSource=admin&retryWrites=true&w=majority',

  // JWT config
  JWT: {
    algorithm: 'HS256',
    accessTokenExpiryTime: 900, // 15 minutes
    refreshTokenExpiryTime: 3600, // 1 hour
    secret: process.env.TUSTAREAS_JWT_SECRET,
  },
};
