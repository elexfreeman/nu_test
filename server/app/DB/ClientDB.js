import BaseDB from './BaseDB';

export default class ClientDB extends BaseDB {

    constructor() {
        super();
    }

    async list(offset, limit, search) {

        let res;

        let sql = 'SELECT * FROM clients c WHERE c.`name` LIKE :search order by c.`name` LIMIT :offset , :limit ;';
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

    async getProviders(clientId) {

        let res;

        let sql = 'SELECT * FROM client_providers c WHERE c.`client_id`= :clientId;';
        try {
            res = (await this.db.raw(sql, {
                clientId: clientId
            }))[0];


        } catch (e) {
            console.log(e);
        }

        return res;
    }

    /**
     * add client to db
     * @param {*} client 
     */
    async add(client) {
        let res = 0;
        let insertData = {};
        try {
            if (!client) {
                throw 'empty client';
            }

            if (client.name) {
                insertData['name'] = client.name;
            }

            if (client.email) {
                insertData['email'] = client.email;
            }

            if (client.phone) {
                insertData['phone'] = client.phone;
            }

            res = (await this.db('clients')
                .insert(insertData))[0];


        } catch (e) {
            console.log(e);
        }

        return res;
    }


    /**
     * update client data
     * requre client.id
     * @param {*} client 
     */
    async update(client) {
        let res = true;
        let updateData = {};
        try {
            if (!client) {
                throw 'empty client';
            }

            if (!client.id) {
                throw 'empty id';
            }

            if (client.name) {
                updateData['name'] = client.name;
            }

            if (client.email) {
                updateData['email'] = client.email;
            }

            if (client.phone) {
                updateData['phone'] = client.phone;
            }

            res = await this.db('clients')
                .where({
                    id: client.id
                })
                .update(updateData);

        } catch (e) {
            console.log(e);
            res = false;
        }

        return res;
    }

    /**
     * Delete client from DB
     * @param {number} clientId 
     */
    async remove(clientId) {
        let res = true;
        let deleteData = {};
      
        try {

            deleteData = {
                id: clientId
            }            

            await this.db('clients')
                .where(deleteData)
                .del();

        } catch (e) {
            console.log(e);
            res = false;
        }

        return res;
    }

}