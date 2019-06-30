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

    static async add(provider) {
        return true;
    }

}