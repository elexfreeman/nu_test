const assert = require('chai').assert;
const should = require('chai').should();
const expect = require('chai').expect;

import config from '../app/config';

/* php like global variables for mongoose. cry */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(config.mongodb.connection)
    .then(() => console.log('connection mongoDB succesful'))
    .catch((err) => console.error('error mongoDB connect ',err));

import ClientMDB from '../app/DB/mongoDB/ClientMDB';

async function run() {

    await describe('Test ClientMDB', () => {

        it('Test constructor', async () => {

            let clientMDB = new ClientMDB();
            assert(clientMDB);

        });

        it('Test list', async () => {

            let clientMDB = new ClientMDB();

            let data = await clientMDB.list(0, 10, '');
            console.log(data);
            assert(data.length > 0);

        });

/*         it('Test getProviders', async () => {

            let clientMDB = new ClientMDB();

            let data = await clientMDB.getProviders(1);
            assert(data.length > 0);

        });
 */

        it('Test get true', async () => {

            let clientMDB = new ClientMDB();
            let list = await clientMDB.list(0, 10, '');
            let data = await clientMDB.get(list[0]._id);
            assert(data);

        });

        it('Test get wrong', async () => {

            let clientMDB = new ClientMDB();
            try{
                let data = await clientMDB.get(-1);
            } catch(e) {
                assert(e);
            }

        });

        it('Test insert data', async () => {

            let clientMDB = new ClientMDB();

            let data = {
                name: 'test name',
                phone: 'test phone',
                email: 'test email'
            };

            let res = await clientMDB.add(data);
            assert(res);

        });


        it('Test update data', async () => {

            let clientMDB = new ClientMDB();
            let list = await clientMDB.list(0, 10, '');
            let data = {
                id: list[0]._id,
                name: 'test name',
                phone: 'test phone',
                email: 'test email'
            };

            let res = await clientMDB.update(data);

            assert(res);

        });


    });

}

run();

