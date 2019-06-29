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

import ClientsController from "../clientsController";
import ClientDialogController from "../clientDialogController";

export default {
  name: "main",
  data() {
    return {};
  },
  methods: {
    onRemoveFromFavorite() {
      ClientsController.newClientDialog(true);
    },

    showNewClientDialog(event) {      
      ClientDialogController.showNewClientDialog();
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
</style>
