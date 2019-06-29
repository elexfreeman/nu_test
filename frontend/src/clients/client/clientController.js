import store from '../clientsVuex';

import Client from './client';
import ClientDB from './clientDB';
import ProviderDB from '../provider/providerDB';

/**
 * control client store an make Client entity
 */
export default class ClientController {

    static async makeEmptyClient() {

        let client;

        try {
            /* get providers */
            providers = await ProviderDB.list();

            if (clientData) {
                /* construct client */
                client = new Client({
                    id: null,
                    name: '',
                    email: '',
                    phone: '',
                    providers: []
                }, providers);
            }

        } catch (e) {
            console.log(e);
        }

        store.commit("setClient", client);

    }

    /* new client dialo */
    static showNewClientDialog() {
        ClientController.makeEmptyClient();
        store.commit("setShowNewClientDialog", true);
    }

    static hideNewClientDialog() {
        store.commit("setClient", null);
        store.commit("setShowNewClientDialog", false);
    }
    /* ----------------------------- */


    /* edit client dialog */
    static async showEditClientDialog(clientId) {
        /* loading client info */
        let clientData;
        let client;
        let providers = [];

        try {
            /* get providers */
            providers = await ProviderDB.list();
            /* get client data */
            clientData = await ClientDB.get(clientId);
            if (clientData) {
                /* construct client */
                client = new Client(clientData, providers);
            }

        } catch (e) {
            console.log(e);
        }

        store.commit("setClient", client);
        store.commit("setShowEditClientDialog", true);
    }

    static hideEditClientDialog() {
        store.commit("setClient", null);
        store.commit("setShowEditClientDialog", false);
    }
    /* ----------------------------- */


    static async saveClient() {
        console.log(store.state.client);
    }

    static async deleteClient() {
        console.log(store.state.client);
    }


}
