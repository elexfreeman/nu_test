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

        client: null,

        offset: 0,
        limit: 100,
        search: ''

    },

    mutations: {

        setOnLoad(state, payload) {
            state.onLoad = payload;
        },
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

        setClient(state, payload) {
            state.client = payload;
        },

    }
};

export default new Vuex.Store(store);
