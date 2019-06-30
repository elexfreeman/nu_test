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
            let providers = await ProviderDB.list();


            /* construct client */
            client = new Client({
                id: null,
                name: '',
                email: '',
                phone: '',
                providers: []
            }, providers);


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
        store.commit('setOnLoad', true);

        if (store.state.client) {
            await ClientDB.save(store.state.client.get());
            ClientController.hideNewClientDialog();
            ClientController.hideEditClientDialog();
            ClientController.list(store.state.offset, store.state.limit, store.state.search);
        }

        store.commit('setOnLoad', false);
    }

    static async deleteClient() {
        console.log(store.state.client);
    }


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
