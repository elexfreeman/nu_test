const express = require('express');
const router = express.Router();


import ProviderDB from '../DB/ProviderDB';

class ProviderControler {

    constructor(req) {
        this.req = req;

        this.providerDB = new ProviderDB();

        this.list = this.list.bind(this);
        this.get = this.get.bind(this);
        this.add = this.add.bind(this);
    };

    /**
     * async constructor
     * @param {*} req  - express reques fnc
     */
    static async init(req) {
        let self = new ProviderControler(req);

        /* important place */
        /* here we can insert some async code */

        return self;
    }


    /**
     * list route
     */
    async list() {
        let res = [];

        try {

            /* get providers */
            res = await this.providerDB.list();

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



        return res;
    }

    /**
     * add new POST-route
     */
    async add() {
        let res;

        try {
            res = await this.providerDB.add(this.req.body);
        } catch (e) {
            console.log(e);
        }

        return res;
    }

}

/**
 * list providers
 */
router.get('/provider/list', async (req, res, next) => {
    const self = await ProviderControler.init(req);
    res.json(await self.list())
});



/**
 * get client by id
 */
router.get('/provider/:id', async (req, res, next) => {
    const self = await ProviderControler.init(req);
    let data = await self.get();
    if (!data) {
        res.status(404).json({
            "errors": [
                {
                    "providerNotFound": true
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
router.post('/provider', async (req, res, next) => {
    const self = await ProviderControler.init(req);

    let data = await self.add();
    if (!data) {
        res.status(404).json({
            "errors": [
                {
                    "emptyName": true
                }
            ]
        })

    } else {
        res.json({ id: data });
    }

});



export { router };