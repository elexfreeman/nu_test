import store from '../clientsVuex';
import ProviderDB from './providerDB';
import Client from '../client/client';

/**
 * Work with provider store data
 */
export default class ProviderController {

    /**
     * list providers 
     */
    static async list() {
        let resp = [];

        try {
            resp = await ProviderDB.list();
        } catch (e) {
            console.log(e);
        }

        store.commit("setProviders", resp);

    }

    /**
     * add new provider
     * @param {string} providerName 
     */
    static async add(providerName) {

        let providers;

        try {
            /* add provider */
            await ProviderDB.add({ name: providerName });
            /* reload list in store */
            providers = await ProviderDB.list();
            store.commit("setProviders", providers);

            /* reload vizible client */
            if (store.state.client) {
                let client = new Client(store.state.client.get(), providers);                                                
                store.commit("setClient", client);                  
            }

        } catch (e) {
            console.log(e);
        }

    }

    
    /**
     * delete provider
     * @param {number} providerId 
     */
    static async remove(providerId) {        

        let providers;

        try {
            /* delete provider */
            await ProviderDB.remove(providerId);
            /* reload list in store */
            providers = await ProviderDB.list();
            store.commit("setProviders", providers);

            /* reload vizible client */
            if (store.state.client) {
                let client = new Client(store.state.client.get(), providers);                                                
                store.commit("setClient", client);                  
            }

        } catch (e) {
            console.log(e);
        }

    }

    
    /**
     * delete provider
     * @param {number} providerId 
     */
    static async save(providerId) {        

        let providers;

        try {
            /* delete provider */
            await ProviderDB.remove(providerId);
            /* reload list in store */
            providers = await ProviderDB.list();
            store.commit("setProviders", providers);

            /* reload vizible client */
            if (store.state.client) {
                let client = new Client(store.state.client.get(), providers);                                                
                store.commit("setClient", client);                  
            }

        } catch (e) {
            console.log(e);
        }

    }


}



