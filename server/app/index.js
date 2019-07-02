import config from './config';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

/* ************************************************* */
/* mongoose */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(config.mongodb.connection)
  .then(() => console.log('connection mongoDB succesful'))
  .catch((err) => console.error('error mongoDB connect ',err));


/* fix all deprecation warnings   */
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

/* ************************************************* */

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.use(cors());
app.options('*', cors());


/* client ctrl */
import * as ClientControler from './Controllers/ClientController.js';
app.use(ClientControler.router);

/* provider ctrl */
import * as ProviderController from './Controllers/ProviderController.js';
app.use(ProviderController.router);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


console.log('server start at http://localhost:' + config.server.port);
app.listen(config.server.port);

