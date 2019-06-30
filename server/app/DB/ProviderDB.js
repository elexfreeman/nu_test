import BaseDB from './BaseDB';

/**
 * work with providers table
 */
export default class ProviderDB extends BaseDB {

    constructor() {
        super();
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


    async add(provider) {
        let res = 0;
        let insertData = {};
        try {
            if (!provider) {
                throw 'empty provider';
            }

            if (!provider.name) {
                throw 'empty name';
            }

            insertData['name'] = provider.name;

            res = (await this.db('provider')
                .insert(insertData))[0];


        } catch (e) {
            console.log(e);
        }

        return res;
    }



    async update(provider) {
        let res = true;
        let updateData = {};
        try {
            if (!provider) {
                throw 'empty provider';
            }

            if (!provider.id) {
                throw 'empty id';
            }

            if (provider.name) {
                updateData['name'] = provider.name;
            }

            res = await this.db('provider')
                .where({
                    id: provider.id
                })
                .update(updateData);

        } catch (e) {
            console.log(e);
            res = false;
        }

        return res;
    }

    /**
     * 
     * @param {number} providerId 
     */
    async remove(providerId) {
        let res = true;
        let deleteData = {};
      
        try {

            deleteData = {
                id: providerId
            }            

            await this.db('provider')
                .where(deleteData)
                .del();

        } catch (e) {
            console.log(e);
            res = false;
        }

        return res;
    }



}