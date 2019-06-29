import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = {
    state: {
        onLoad: false,
        clients: [],
        showNewClientDialog: false,
        showEditClientDialog: false

    },
    mutations: {

        setShowNewClientDialog(state, payload) {            
            state.showNewClientDialog = payload;
        },
        setShowEditClientDialog(state, payload) {
            state.showEditClientDialog = payload;
        }
        
    }
};

export default new Vuex.Store(store);
