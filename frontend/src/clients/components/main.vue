<template>
  <div class="clients-app container grid-lg">
    <h1>Clients</h1>
    <div class="new_client text-right">
      <button class="btn">New client</button>
    </div>
    <editClientDialog></editClientDialog>
    <clientsTable></clientsTable>
  </div>
</template>

<script>
import clientsTable from "./clientsTable.vue";
import editClientDialog from "./editClientDialog.vue";

import clientsController from '../clientsController';



export default {
  name: "main",
  data() {
    return {};
  },
  methods: {
    /*     onRemoveFromFavorite() {
      this.$store.commit("removeFromFavorite", { test: "test" });
    } */
  },
  computed: {
    onLoad() {
      /*признак отправи сообщения на сервер*/
      return this.$store.state.onLoad;
    },

  },
  components: {
    clientsTable,
    editClientDialog
  }
};
</script>


<style lang="scss">
@import "node_modules/spectre.css/src/spectre";
</style>
