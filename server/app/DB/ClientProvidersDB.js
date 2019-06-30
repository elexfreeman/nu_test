import BaseDB from './BaseDB';

/**
 * work with providers table
 */
export default class ProviderDB extends BaseDB {

    constructor() {
        super();
    }

    async add(data) {
        let res = true;
        let insertData = {};

        try {
            if (!data.client_id) {
                throw 'empty client_id';
            }
            if (!data.provider_id) {
                throw 'empty provider_id';
            }

            insertData = {
                client_id: data.client_id,
                provider_id: data.provider_id
            }

            await this.db('client_providers')
                .insert(insertData);


        } catch (e) {
            console.log(e);
            res = false;
        }

        return res;
    }


    async delete(data) {
        let res = true;
        let deleteData = {};

        try {
            if (!data.client_id) {
                throw 'empty client_id';
            }
            if (!data.provider_id) {
                throw 'empty provider_id';
            }

            deleteData = {
                client_id: data.client_id,
                provider_id: data.provider_id
            }

            await this.db('client_providers')
                .where(deleteData)
                .del();


        } catch (e) {
            console.log(e);
            res = false;
        }

        return res;
    }



}