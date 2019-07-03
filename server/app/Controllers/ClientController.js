const express = require('express');
const router = express.Router();

import ClientDB from '../DB/ClientDB';
import ClientProvidersDB from '../DB/ClientProvidersDB';

class ClientControler {

    constructor(req) {
        this.req = req;

        this.clientDB = new ClientDB();
        this.clientProvidersDB = new ClientProvidersDB();

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
    async list() {
        let res = [];
        let offset = 0;
        let limit = 20;
        let search = '';


        try {

            /* check params */
            if (this.req.params.offset) {
                offset = parseInt(this.req.params.offset)
            }

            if (this.req.params.limit) {
                limit = parseInt(this.req.params.limit);
            }

            if (limit > 1000) {
                limit = 20;
            }

            if (this.req.params.search) {
                search = this.req.params.search;
            }

            /* get clients */
            res = await this.clientDB.list(offset, limit, search);

            /* get providers for clients */
            for (let i = 0; i < res.length; i++) {
                res[i]['providers'] = await this.clientProvidersDB.get(res[i].id);
            }

        } catch (e) {
            console.log(e);
        }

        return res;
    }

    /**
     * get route
     */
    async get() {
        let res;
        let clientId;

        try {

            clientId = parseInt(this.req.params.id);
            /* check params */
            if (!clientId) {
                throw 'empty id';
            }           

            res = await this.clientDB.get(clientId);
            if (res) {
                res['providers'] = await this.clientProvidersDB.get(clientId);
            }

        } catch (e) {
            console.log(e);
        }

        return res;
    }

    /**
     * add new POST-route
     */
    async add() {
        let res;

        try {

            if (!this.req.body) {
                throw 'empty body';
            }
            if (!this.req.body['name']) {
                throw 'empty name';
            }

            res = await this.clientDB.add(this.req.body);

        } catch (e) {
            console.log(e);
        }
        return res;
    }

    /**
     * update client PUT-route
     */
    async update() {
        let res;
        let data;

        let clientId = parseInt(this.req.params.id);
        try {

            if (!this.req.body) {
                throw 'empty body';
            }

            data = this.req.body;
            data['id'] = clientId;

            res = await this.clientDB.update(data);
         
        } catch (e) {
            console.log(e);
        }
        return res;
    }

    /**
    * delete route
    */
    async remove() {
        let res;

        try {

            let clientId = parseInt(this.req.params.id);
            if(!clientId){
                throw 'empty client id';
            }
            
            /* delete client */
            res = await this.clientDB.remove(clientId);
            
        } catch (e) {
            console.log(e);
        }

        return res;
    }

}

/**
 * list clients
 */
router.get('/api/v1/client/list', async (req, res, next) => {
    const self = await ClientControler.init(req);
    res.json(await self.list())
});

/**
 * list clients
 */
router.get('/api/v1/client/list/:offset', async (req, res, next) => {
    const self = await ClientControler.init(req);
    res.json(await self.list())
});

/**
 * list clients
 */
router.get('/api/v1/client/list/:offset/:limit', async (req, res, next) => {
    const self = await ClientControler.init(req);
    res.json(await self.list())
});

/**
 * list clients
 */
router.get('/api/v1/client/list/:offset/:limit/:search', async (req, res, next) => {
    const self = await ClientControler.init(req);
    res.json(await self.list())
});

/**
 * get client by id
 */
router.get('/api/v1/client/:id', async (req, res, next) => {
    const self = await ClientControler.init(req);
    let data = await self.get();
    if (!data) {
        res.status(405).json({
            "errors": [
                {
                    "clientNotFound": true
                }
            ]
        })

    } else {
        res.json(data);
    }

});

/**
 * add new client
 */
router.post('/api/v1/client', async (req, res, next) => {
    const self = await ClientControler.init(req);

    let data = await self.add();
    if (!data) {
        res.status(404).json({
            "errors": [
                {
                    "some wrong": true
                }
            ]
        })

    } else {
        res.json({ id: data });
    }

});

/**
 * add new client
 */
router.put('/api/v1/client/:id', async (req, res, next) => {
    const self = await ClientControler.init(req);

    let data = await self.update();
    if (!data) {
        res.status(405).json({
            done: false,
            "errors": [
                {
                    "some wrong": true
                }
            ]
        })

    } else {
        res.json({ done: true });
    }

});


router.delete('/api/v1/client/:id', async (req, res, next) => {    
    const self = await ClientControler.init(req);
    await self.remove();
    res.json({ done: true });

}); 



export { router };