const assert = require('chai').assert;
const should = require('chai').should();
const expect = require('chai').expect;

import ProviderDB from '../app/DB/ProviderDB';

async function run() {

    await describe('Test ProviderDB', () => {

        it('Test constructor', async () => {

            let providerDB = new ProviderDB();
            assert(providerDB);

        });

        it('Test list', async () => {

            let providerDB = new ProviderDB();

            let data = await providerDB.list();           
            assert(data.length > 0);

        });



    });

}

run();

