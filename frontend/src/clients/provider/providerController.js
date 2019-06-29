import store from '../clientsVuex';
import ProviderDB from './providerDB';

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


}



