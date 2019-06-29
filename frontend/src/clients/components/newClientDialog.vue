<template>
  <div class="container grid-lg">
    <h1>Clients</h1>
    <div class="new_client text-right">
       <button class="btn">New client</button> 
       <clientsTable></clientsTable>
    </div>
  </div>
</template>

<script>

import clientsTable from "./clients_table.vue";

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
    }
  },
  components: {
      clientsTable
  }
};
</script>


<style lang="scss">
@import "node_modules/spectre.css/src/spectre";
</style>
