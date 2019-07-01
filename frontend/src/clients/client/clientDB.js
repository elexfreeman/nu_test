import axios from 'axios';

export default class ClientDB {

    /**
     * list clients
     * @param {number} offset 
     * @param {number} limit 
     * @param {string} search 
     */
    static async list(offset, limit, search) {
        let res;
        try {
            res = await axios.get(window.server_url + '/client/list/' + offset + '/' + limit + '/' + search);
            if (res) {
                res = res['data'];
            }
        } catch (e) {
            console.log(e);
        }

        return res;
    }

    /**
     * Get client by clientId
     * @param {number} clientId 
     */
    static async get(clientId) {
        let res;
        try {
            res = await axios.get(window.server_url + '/client/' + clientId);
            if (res) {
                res = res['data'];
            }
        } catch (e) {
            console.log(e);
        }

        return res;
    }

    static async save(client) {
        let res;
        try {

            if (client.id) {
                /* update */
                res = await axios.put(window.server_url + '/client/' + client.id, client);
            } else {
                /* insert */
                res = await axios.post(window.server_url + '/client', client);
            }

            if (res) {
                res = res['data'];
            }
        } catch (e) {
            console.log(e);
        }

        return res;
    }

    static async remove(client) {
        try {
            if (!client.id) {
                throw 'empty client';
            }

            res = await axios.delete(window.server_url + '/client/' + client.id);

        } catch (e) {
            console.log(e);
        }

    }

    static async listTest() {
        return [
            {
                "id": 1,
                "name": "Test ",
                "email": "test1@email.com",
                "phone": "3021545465464",
                "providers": [
                    { "id": 1 }, { "id": 2 }
                ]
            },
            {
                "id": 2,
                "name": "Test 2",
                "email": "test2@email.com",
                "phone": "30215454654642",
                "providers": [
                    { "id": 1 }, { "id": 3 }
                ]
            },
            {
                "id": 3,
                "name": "Test 3",
                "email": "test3@email.com",
                "phone": "302154546546333",
                "providers": [
                    { "id": 2 }, { "id": 3 }
                ]
            }
        ];

    }
}