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


        it('Test insert data', async () => {

            let providerDB = new ProviderDB();

            let data = {
                name: 'test name',              
            };
            
            let res = await providerDB.add(data);

            assert(res > 0);

        });


        it('Test update data', async () => {

            let providerDB = new ProviderDB();

            let data = {
                id: 1,
                name: 'test name',               
            };
            
            let res = await providerDB.update(data);

            assert(res);

        });



    });

}

run();

