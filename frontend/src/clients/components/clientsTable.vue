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
      <template slot="table-row" slot-scope="props">{{props.formattedRow[props.column.field]}}</template>
    </vue-good-table>
  </div>
</template>

<script>
import { VueGoodTable } from "vue-good-table";

export default {
  name: "clientsTable",
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
          field: "providers"
        },
        {
          label: "",
          field: "edit"
        }
      ];
    }
  },
  components: {
    VueGoodTable
  }
};
</script>


<style lang="scss">
@import "vue-good-table/src/styles/style.scss";

.clients_table {
  padding-top: 1rem;
}
</style>
