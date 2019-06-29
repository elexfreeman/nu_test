import store from '../clientsVuex';
import ProviderDB from './providerDB';

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

        console.log(providerName);
        /* add provider */
        await ProviderDB.add(providerName);
        /* reload list in store */
        await ProviderController.list();

        /* reload vizible client */
        if (store.state.client) {
            let client = { ...store.state.client };
            client.prepareProvider();
            store.commit("setClient", client);            
        }

    }


}



