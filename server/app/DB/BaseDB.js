import config from '../config'
const coreDBSys = require('knex')(config.mysql);

/**
 * base DB access class
 */
export default class BaseDB {

    constructor() {
        /* our DB driver */
        this.db = coreDBSys;
    }
}