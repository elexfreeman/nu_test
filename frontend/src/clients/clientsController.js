import store from './clientsVuex';

class ClientsController {

    newClientDialog(show) {
        store.commit("setShowNewClientDialog", show);
    }

    editClientDialog(show) {
        store.commit("setShowEditClientDialog", show);
    }
}

const clientsController = new ClientsController();

export default clientsController;

