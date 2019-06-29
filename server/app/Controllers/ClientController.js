const express = require('express');
const router = express.Router();

class ClientControler {

    constructor(req) {
        this.req = req;

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

        return res;
    }

    /**
     * get route
     */
    async get() {
        return null;
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
 * get client by id
 */
router.get('/client/:id', async (req, res, next) => {
    const self = await ClientControler.init(req);
    res.json(await self.get())
});

export { router };