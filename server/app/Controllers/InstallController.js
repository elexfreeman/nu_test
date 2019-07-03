const express = require('express');
const router = express.Router();

import ClientMDB from '../DB/mongoDB/ClientMDB';
import ProviderMDB from '../DB/mongoDB/ClientMDB';

class InstallController {

    constructor(req) {
        this.req = req;

        this.clientMDB = new ClientMDB();
        this.providerMDB = new ProviderMDB();

    };

    /**
     * async constructor
     * @param {*} req  - express reques fnc
     */
    static async init(req) {
        let self = new ClientControler(req);

        /* important place */
        /* here we can insert some async code */

        return self;
    }


    /**
     * list route
     */
    async install() {

        let res = {
            providers: [],
            clients: []
        };

        try {

            res.providers = [
                {
                    name: 'Test provider 1'
                },
                {
                    name: 'Test provider 2'
                },
                {
                    name: 'Test provider 3'
                },
            ];

            /* add providers */
            for (let i = 0; i < res.providers.length; i++) {
                res.providers[i]['_id'] = await this.providerMDB.add(res.providers[i]);
            }

            res.clients = [
                {
                    name: 'Client 1',
                    email: 'Client1@emailcom',
                    phone: 'Client 1 phone',
                    providers: [
                        { _id: res.providers[0]._id },
                        { _id: res.providers[2]._id },
                    ]
                },
                {
                    name: 'Client 2',
                    email: 'Client2@emailcom',
                    phone: 'Client 2 phone',
                    providers: [
                        { _id: res.providers[1]._id },
                        { _id: res.providers[2]._id },
                    ]
                },
                {
                    name: 'Client 3',
                    email: 'Client3@emailcom',
                    phone: 'Client 3 phone',
                    providers: [
                        { _id: res.providers[0]._id },
                        { _id: res.providers[1]._id },
                    ]
                },
            ];

             /* add clients */
             for (let i = 0; i < res.client.length; i++) {
                res.client[i]['_id'] = await this.clientMDB.add(res.client[i]);
            }


        } catch (e) {
            console.log(e);
        }

        return res;
    }

}


/**
 * add new client
 */
router.put('/api/v1/install', async (req, res, next) => {
    const self = await InstallController.init(req);
    res.json({ data: await self.install() });
});



export { router };