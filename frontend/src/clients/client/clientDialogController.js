import store from '../clientsVuex';

import Client from './client';
import ClientDB from './clientDB';
import ProviderDB from '../provider/providerDB';

export default class ClientDialogController {


    /* new client dialo */
    static showNewClientDialog() {
        store.commit("setShowNewClientDialog", true);
    }

    static hideNewClientDialog() {
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
        
        store.commit("setClientEdit", client);
        store.commit("setShowEditClientDialog", true);
    }

    static hideEditClientDialog() {
        store.commit("setClientEdit", null);
        store.commit("setShowEditClientDialog", false);
    }
    /* ----------------------------- */


    static async saveClient() {
        console.log(store.state.clientEdit);
    }


}
