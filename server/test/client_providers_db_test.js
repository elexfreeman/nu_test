const assert = require('chai').assert;
const should = require('chai').should();
const expect = require('chai').expect;

import ClientProvidersDB from '../app/DB/ClientProvidersDB';

async function run() {

    await describe('Test ClientProvidersDB', () => {

        it('Test constructor', async () => {

            let clientProvidersDB = new ClientProvidersDB();
            assert(clientProvidersDB);

        });    


        it('Test add - delete data', async () => {

            let clientProvidersDB = new ClientProvidersDB();

            let data = {
                client_id: 1,
                provider_id: 101               
            };
            
            await clientProvidersDB.add(data);

            let res = await clientProvidersDB.delete(data);

            assert(res);

        });



    });

}

run();

