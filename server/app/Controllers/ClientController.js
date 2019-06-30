const express = require('express');
const router = express.Router();

import ClientDB from '../DB/ClientDB';
import ClientProvidersDB from '../DB/ClientProvidersDB';

class ClientControler {

    constructor(req) {
        this.req = req;

        this.clientDB = new ClientDB();
        this.clientProvidersDB = new ClientProvidersDB();

        this.list = this.list.bind(this);
        this.get = this.get.bind(this);
        this.add = this.add.bind(this);
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

        try {
            /* check params */
            if (!this.req.params.id) {
                throw 'empty id';
            }

            res = await this.clientDB.get(parseInt(this.req.params.id));
            if (res) {
                res['providers'] = await this.clientProvidersDB.get(parseInt(this.req.params.id));
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
            
            /* add providers */
            if (this.req.body.providers) {
                
                for (let i = 0; i < this.req.body.providers.length; i++) {
                   
                    await this.clientProvidersDB.add({
                        client_id: res,
                        provider_id: this.req.body.providers[i].id
                    })

                }
            }

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

        let clientId = parseInt(this.req.params.id);
        try {

            if (!this.req.body) {
                throw 'empty body';
            }          

            let data = this.req.body;
          
            data['id'] = clientId;

            res = await this.clientDB.update(this.req.body);
            
            /* add providers */
             if (this.req.body.providers) {
                 /* dellete all client providers */
                await this.clientProvidersDB.deleteByClientId(clientId);
                
                for (let i = 0; i < this.req.body.providers.length; i++) {
                   
                    await this.clientProvidersDB.add({
                        client_id: clientId,
                        provider_id: this.req.body.providers[i].id
                    })

                }
            } 

        } catch (e) {
            console.log(e);
        }
        return res;
    }

}

/**
 * list clients
 */
router.get('/client/list', async (req, res, next) => {
    const self = await ClientControler.init(req);
    res.json(await self.list())
});

/**
 * list clients
 */
router.get('/client/list/:offset', async (req, res, next) => {
    const self = await ClientControler.init(req);
    res.json(await self.list())
});

/**
 * list clients
 */
router.get('/client/list/:offset/:limit', async (req, res, next) => {
    const self = await ClientControler.init(req);
    res.json(await self.list())
});

/**
 * list clients
 */
router.get('/client/list/:offset/:limit/:search', async (req, res, next) => {
    const self = await ClientControler.init(req);
    res.json(await self.list())
});

/**
 * get client by id
 */
router.get('/client/:id', async (req, res, next) => {
    const self = await ClientControler.init(req);
    let data = await self.get();
    if (!data) {
        res.status(404).json({
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
router.post('/client', async (req, res, next) => {
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
router.put('/client/:id', async (req, res, next) => {
    const self = await ClientControler.init(req);

    let data = await self.update();
    if (!data) {
        res.status(404).json({
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



export { router };