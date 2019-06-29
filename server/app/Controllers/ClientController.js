const express = require('express');
const router = express.Router();

class ClientControler {

    constructor() { };

    static async init(req) {
        let self = new ClientControler();

        return self;

    }


    list() {

    }

}

/**
 * list clients
 */
router.get('/client/list', async (req, res, next) => {
    const self = ClientControler.init(req);
    res.json({ data: 22 })
});

/**
 * get client by id
 */
router.get('/client/:id', async (req, res, next) => {
    const self = ClientControler.init(req);
    res.json({ data: req.params.id })
});

export { router };