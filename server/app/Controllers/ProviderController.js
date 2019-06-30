const express = require('express');
const router = express.Router();


import ProviderDB from '../DB/ProviderDB';

class ProviderControler {

    constructor(req) {
        this.req = req;
        this.providerDB = new ProviderDB();
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
     * delete route
     */
    async remove() {
        let res;

        try {            
            res = await this.providerDB.remove(parseInt(this.req.params.id));
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
 * add new provider
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



router.delete('/provider/:id', async (req, res, next) => {    
    const self = await ProviderControler.init(req);
    await self.remove();
    res.json({ done: true });

}); 


export { router };