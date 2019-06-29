import BaseDB from './BaseDB';

/**
 * work with providers table
 */
export default class ProviderDB extends BaseDB {

    constructor() {
        super();

        this.list = this.list.bind(this);
      
    }

    async list() {

        let res;

        let sql = 'SELECT * FROM provider p order by p.`name`;';
        try {
            res = (await this.db.raw(sql, {}))[0];


        } catch (e) {
           console.log(e);
        }

        return res;

    }


}