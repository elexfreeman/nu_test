<template>
  <div class="clients-app container grid-lg">
    <h1>Clients</h1>
    <div class="new_client text-right">
      <button v-on:click="showNewClientDialog" class="btn">New client</button>
    </div>
    <editClientDialog></editClientDialog>
    <newClientDialog></newClientDialog>
    <clientsTable></clientsTable>
  </div>
</template>

<script>
import clientsTable from "./clientsTable.vue";
import editClientDialog from "./editClientDialog.vue";
import newClientDialog from "./newClientDialog.vue";


import ClientController from "../client/ClientController";

export default {
  name: "main",
  data() {
    return {};
  },

  mounted() {
    ClientController.list(this.$store.state.offset, this.$store.state.limit, this.$store.state.search);
  },

  methods: {
    onRemoveFromFavorite() {
      ClientsController.newClientDialog(true);
    },

    showNewClientDialog(event) {
      ClientController.showNewClientDialog();
    }
  },
  computed: {
    onLoad() {
      /*признак отправи сообщения на сервер*/
      return this.$store.state.onLoad;
    }
  },
  components: {
    clientsTable,
    editClientDialog,
    newClientDialog
  }
};
</script>


<style lang="scss">
@import "node_modules/spectre.css/src/spectre";
@import "node_modules/spectre.css/src/spectre-icons";

.clients-app {
  
  padding-top:2rem;

  .modal-header {
    border-bottom: 1px solid #ddd;
  }

  .clients_table {
    padding-top: 1rem;

    .edit_client_link {
      cursor: pointer;
      text-decoration: underline;
      color: $primary-color;
    }

  }

} /* clients-app */
</style>
