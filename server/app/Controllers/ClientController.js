const express = require('express');
const router = express.Router();

import ClientDB from '../DB/ClientDB';

class ClientControler {

    constructor(req) {
        this.req = req;

        this.clientDB = new ClientDB();

        this.list = this.list.bind(this);
        this.get = this.get.bind(this);
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

            res = this.clientDB.list(offset, limit, search);

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

        let id = 0;

        try {
            /* check params */
            if (!this.req.params.id) {
                throw 'empty id';
            }

            res = this.clientDB.get(parseInt(this.req.params.id));


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
                    "userNotFound": true
                }
            ]
        })

    } else {
        res.json(data);
    }


});

export { router };