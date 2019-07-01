<template>
  <div class="clients_table">

    <vue-good-table
      :pagination-options="{
            enabled: true,
            mode: 'pages' ,           
            perPage: 20,
            perPageDropdown: [20, 50]
          }"
      :columns="columns"
      :rows="rows"
      :sort-options="{
       
          }"
      :search-options="{
          enabled: true,
           placeholder: 'Search...'      
    }"
    >
      <div slot="emptystate">...</div>
      <template slot="table-row" slot-scope="props">

        <div v-if="props.column.field!='id'">{{props.formattedRow[props.column.field]}}</div>

        <div class="text-center" v-if="props.column.field=='id'">
          <span v-on:click="onShowEditDialog" :client_id="props.formattedRow['id']" class="edit_client_link">Edit</span>
        </div>
        
      </template>
    </vue-good-table>

  </div>
</template>

<script>
import { VueGoodTable } from "vue-good-table";

import ClientController from '../client/ClientController';

export default {
  
  name: "clientsTable",

  data() {
    return {};
  },

  methods: {
    onShowEditDialog(event) {
      ClientController.showEditClientDialog(event.target.getAttribute('client_id'));      
    }
  },

  computed: {
    onLoad() {
      return this.$store.state.onLoad;
    },
    rows() {
      return this.$store.state.clients;
    },
    columns() {
      return [
        {
          label: "Name",
          field: "name"
        },
        {
          label: "Email",
          field: "email"
        },
        {
          label: "Phone",
          field: "phone"
        },
        {
          label: "Providers",
          field: "providersString"
        },
        {
          label: "",
          field: "id"
        }
      ];
    }
  }, // computed

  components: {
    VueGoodTable
  }

};
</script>


<style lang="scss">
@import "vue-good-table/src/styles/style.scss";
</style>
