const express = require('express');
const router = express.Router();

import ProviderMDB from '../DB/mongoDB/ProviderMDB';

class ProviderControler {

    constructor(req) {
        this.req = req;
        this.providerMDB = new ProviderMDB();
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
            res = await this.providerMDB.list();

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
            let providerId = this.req.params.id;          
            res = await this.providerMDB.remove(providerId);
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
            res = await this.providerMDB.add(this.req.body);
        } catch (e) {
            console.log(e);
        }

        return res;
    }

    /**
     * add new POST-route
     */
    async update() {
        let res;

        let providerId = this.req.params.id;

        try {

            let data = this.req.body;          
            data['id'] = providerId;

            res = await this.providerMDB.update(data);
           
        } catch (e) {
            console.log(e);
        }

        return res;
    }

}

/**
 * list providers
 */
router.get('/api/v1/provider/list', async (req, res, next) => {
    const self = await ProviderControler.init(req);
    res.json(await self.list())
});


/**
 * add new provider
 */
router.post('/api/v1/provider', async (req, res, next) => {
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



/**
 * update provider
 */
router.put('/api/v1/provider/:id', async (req, res, next) => {
    const self = await ProviderControler.init(req);

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



router.delete('/api/v1/provider/:id', async (req, res, next) => {    
    const self = await ProviderControler.init(req);
    await self.remove();
    res.json({ done: true });

}); 


export { router };