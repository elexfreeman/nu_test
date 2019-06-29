import store from './clientsVuex';

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
    static showEditClientDialog(clientId) {
        store.commit("setShowEditClientDialog", true);
    }

    static hideEditClientDialog() {
        store.commit("setShowEditClientDialog", false);
    }
    /* ----------------------------- */


}
