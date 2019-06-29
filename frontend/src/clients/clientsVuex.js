import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = {

    state: {
        onLoad: false,
        clients: [],
        providers: [],
        showNewClientDialog: false,
        showEditClientDialog: false,
     
        clientEdit: null

    },

    mutations: {

        setShowNewClientDialog(state, payload) {            
            state.showNewClientDialog = payload;
        },
        setShowEditClientDialog(state, payload) {
            state.showEditClientDialog = payload;
        },

        setClients(state, payload) {
            state.clients = payload;
        },
        setProviders(state, payload) {
            state.providers = payload;
        },

        setClientEdit(state, payload) {
            state.clientEdit = payload;
        },
        
    }
};

export default new Vuex.Store(store);
