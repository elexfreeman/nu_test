import {mysql} from '../config'

const coreDBSys = require('knex')(mysql);

/**
 * base DB access class
 */
export default class BaseDB {

    constructor() {
        /* our DB driver */
        this.db = coreDBSys;
    }
}