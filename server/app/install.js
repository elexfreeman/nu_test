import config from './config';

/* ************************************************* */
/* mongoose */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
/* try fix all deprecation warnings, if we can   */
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(config.mongodb.connection)
  .then(() => console.log('connection mongoDB succesful'))
  .catch((err) => console.error('error mongoDB connect ', err));


import InstallController from './Controllers/InstallController.js';

async function run() {
  console.log('');
  console.log('');
  console.log('##########################');
  console.log('');
  console.log('Install app');

  const installController = new InstallController();
  await installController.install();
  
  console.log('App install done');
  console.log('');
  console.log('##########################');
  console.log('');
  process.exit(0);
}


run();