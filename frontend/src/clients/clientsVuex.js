import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = {
    state: {
        onLoad: false,
        clients: [],
        showNewClientDialog: false

    },
    mutations: {
        setShowNewClientDialog(state, payload) {
            state.showNewClientDialog = payload.showNewClientDialog;
        }
    }
};

export default new Vuex.Store(store);
