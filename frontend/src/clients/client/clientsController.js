import store from '../clientsVuex';
import ClientDB from './clientDB';
import ProviderDB from '../provider/providerDB';
import Client from './client';

export default class ClientsController {

    static async list(offset, limit, search) {

        let clients = [];
        let providers = [];

        try {
            /* get clients */
            let clientsFromDB = await ClientDB.list(offset, limit, search);
            providers = await ProviderDB.list();
            /* join with providers */
            for (let i = 0; i < clientsFromDB.length; i++) {
                clients.push(new Client(clientsFromDB[i], providers));
            }

        } catch (e) {
            console.log(e);
        }
       
        store.commit('setClients', clients);
    }

}



