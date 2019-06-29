export default class ClientDB {

    /**
     * list clients
     * @param {number} offset 
     * @param {number} limit 
     * @param {string} search 
     */
    static async list(offset, limit, search) {
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

    /**
     * Get client by clientId
     * @param {number} clientId 
     */
    static async get(clientId) {
        return {
            "id": 1,
            "name": "Test ",
            "email": "test1@email.com",
            "phone": "3021545465464",
            "providers": [
                { "id": 1 }, { "id": 2 }
            ]
        };
    }

    static async save(client) {

    }

    static async delete(client) {

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