import ClientMDB from '../DB/mongoDB/ClientMDB';
import ProviderMDB from '../DB/mongoDB/ProviderMDB';

export default class InstallController {

    constructor() {      

        this.clientMDB = new ClientMDB();
        this.providerMDB = new ProviderMDB();

    };

    /**
     * install testDB data
     */
    async install() {

        let res = {
            providers: [],
            clients: []
        };

        try {

            res.providers = [
                {
                    name: 'Test provider 1'
                },
                {
                    name: 'Test provider 2'
                },
                {
                    name: 'Test provider 3'
                },
            ];

            /* add providers */
            for (let i = 0; i < res.providers.length; i++) {
                res.providers[i]['_id'] = await this.providerMDB.add(res.providers[i]);
            }

            res.clients = [
                {
                    name: 'Client 1',
                    email: 'Client1@emailcom',
                    phone: 'Client 1 phone',
                    providers: [
                        { _id: res.providers[0]._id },
                        { _id: res.providers[2]._id },
                    ]
                },
                {
                    name: 'Client 2',
                    email: 'Client2@emailcom',
                    phone: 'Client 2 phone',
                    providers: [
                        { _id: res.providers[1]._id },
                        { _id: res.providers[2]._id },
                    ]
                },
                {
                    name: 'Client 3',
                    email: 'Client3@emailcom',
                    phone: 'Client 3 phone',
                    providers: [
                        { _id: res.providers[0]._id },
                        { _id: res.providers[1]._id },
                    ]
                },
            ];

             /* add clients */
             for (let i = 0; i < res.clients.length; i++) {
                res.clients[i]['_id'] = await this.clientMDB.add(res.clients[i]);
            }


        } catch (e) {
            console.log(e);
        }

        return res;
    }

}
