const assert = require('chai').assert;
const should = require('chai').should();
const expect = require('chai').expect;

import ClientDB from '../app/DB/ClientDB';

async function run() {

    await describe('Test ClientDB', () => {

        it('Test constructor', async () => {

            let clientDB = new ClientDB();

            let data = await clientDB.list(0, 10, '');           
            assert(clientDB);

        });

        it('Test list', async () => {

            let clientDB = new ClientDB();

            let data = await clientDB.list(0, 10, '');           
            assert(data.length > 0);

        });


        it('Test get true', async () => {

            let clientDB = new ClientDB();

            let data = await clientDB.get(1);           
            assert(data);

        });

        it('Test get wrong', async () => {

            let clientDB = new ClientDB();

            let data = await clientDB.get(-1);           
            assert(!data);

        });


    });

}

run();

