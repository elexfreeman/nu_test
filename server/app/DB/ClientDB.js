import BaseDB from './BaseDB';

export default class ClientDB extends BaseDB {

    constructor() {
        super();

        this.list = this.list.bind(this);
        this.get = this.get.bind(this);
    }

    async list(offset, limit, search) {

        let res;

        let sql = 'SELECT * FROM clients c WHERE c.`name` LIKE :search LIMIT :offset, :limit;';
        try {
            res = (await this.db.raw(sql, {
                offset: offset,
                limit: limit,
                search: '%' + search + '%'
            }))[0];


        } catch (e) {
           console.log(e);
        }

        return res;

    }

    async get(clientId) {

        let res;

        let sql = 'SELECT * FROM clients c WHERE c.`id`= :clientId LIMIT 1;';
        try {
            res = (await this.db.raw(sql, {
                clientId: clientId               
            }))[0][0];


        } catch (e) {
           console.log(e);
        }

        return res;
    }

}