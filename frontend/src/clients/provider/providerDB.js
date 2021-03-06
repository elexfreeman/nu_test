import axios from 'axios';

export default class ProviderDB {

    static async list() {
        let res;
        try {
            res = await axios.get(window.server_url + '/provider/list');
            if (res) {
                res = res['data'];
            }
        } catch (e) {
            console.log(e);
        }

        return res;
    }

    static async listTest() {
        return [
            { "id": 1, "name": "Provider 1" },
            { "id": 2, "name": "Provider 2" },
            { "id": 3, "name": "Provider 3" },
            { "id": 4, "name": "Provider 4" }
        ]
    }


    static async save(provider) {
        let res;
        try {

            if (provider._id) {
                /* update */
                res = await axios.put(window.server_url + '/provider/' + provider._id, provider);
            } else {
                /* insert */
                res = await axios.post(window.server_url + '/provider', provider);
            }

            if (res) {
                res = res['data'];
            }
        } catch (e) {
            console.log(e);
        }

        return res;
    }

    static async remove(providerId) {
        let res;
        try {
            res = await axios.delete(window.server_url + '/provider/' + providerId);
            if (res) {
                res = res['data'];
            }
        } catch (e) {
            console.log(e);
        }

        return res;
    }

}