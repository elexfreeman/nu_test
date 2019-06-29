/* require('babel-core/register')({
    presets: ['@babel/preset-env']
});
require('@babel/polyfill'); */

const assert = require('chai').assert;
const should = require('chai').should();
const expect = require('chai').expect;

import Client from '../src/clients/client/client';
import ClientDB from '../src/clients/client/clientDB';
import ProviderDB from '../src/clients/provider/providerDB';

async function run() {

    await describe('Test Client class', () => {

        it('Test constructor', async () => {
            let cDB = await ClientDB.listTest();
            let pDB = await ProviderDB.listTest();

            let client = new Client(cDB[0], pDB);

            assert(client.providersString == 'Provider 1, Provider 2');


        });


    });

}

run();

