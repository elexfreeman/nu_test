import Vue from 'vue';
import main from "./components/main.vue";
import store from './clientsVuex';

let clients_vue = document.getElementById('clients_vue');

if (clients_vue) {

    new Vue({
        el: '#clients_vue',
        store: store,
        render: h => h(main)
    });

}
