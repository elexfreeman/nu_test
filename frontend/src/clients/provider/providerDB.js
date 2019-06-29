
export default class ProviderDB {

    static async list() {
        return [
            { "id": 1, "name": "Provider 1" },
            { "id": 2, "name": "Provider 2" },
            { "id": 3, "name": "Provider 3" },
            { "id": 4, "name": "Provider 4" }
        ]
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