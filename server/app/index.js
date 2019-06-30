const port = 3005;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

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


console.log('server start at http://localhost:' + port);
app.listen(port);

