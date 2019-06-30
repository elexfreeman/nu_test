const assert = require('chai').assert;
const should = require('chai').should();
const expect = require('chai').expect;

import ClientDB from '../app/DB/ClientDB';

async function run() {

    await describe('Test ClientDB', () => {

        it('Test constructor', async () => {

            let clientDB = new ClientDB();                
            assert(clientDB);

        });

        it('Test list', async () => {

            let clientDB = new ClientDB();

            let data = await clientDB.list(0, 10, '');  
            console.log(data);         
            assert(data.length > 0);

        });

        it('Test getProviders', async () => {

            let clientDB = new ClientDB();

            let data = await clientDB.getProviders(1);           
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

        it('Test insert data', async () => {

            let clientDB = new ClientDB();

            let data = {
                name: 'test name',
                phone: 'test phone',
                email: 'test email'
            };
            
            let res = await clientDB.add(data);

            assert(res > 0);

        });


        it('Test update data', async () => {

            let clientDB = new ClientDB();

            let data = {
                id: 1,
                name: 'test name',
                phone: 'test phone',
                email: 'test email'
            };
            
            let res = await clientDB.update(data);

            assert(res);

        });


    });

}

run();

