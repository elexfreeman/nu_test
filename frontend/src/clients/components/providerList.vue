<template>
  <div v-if="client">
    <div class="form-group">
      <div class="col-3 col-sm-12">
        <label class="form-label">Providers:</label>
      </div>
      <div class="col-9 col-sm-12">
        <div class="input-group">
          <input v-model="providerName" class="form-input input-lg" type="text" />
          <button
            type="button"
            v-on:click="add"
            class="btn btn-primary input-group-btn btn-lg"
          >Add provider</button>
        </div>
      </div>
    </div>

    <div v-bind:key="key1" v-for="(item, key1) in client.providerListListData">
      <provider v-bind:item="item"></provider>
    </div>
    
  </div>
</template>

<script>
import ProviderController from "../provider/ProviderController";
import provider from "./provider.vue";

export default {
  name: "providerList",

  data() {
    return {
      providerName: ""
    };
  },

  methods: {
    add(event) {
      ProviderController.add(this.providerName);
      this.providerName = "";
    },
    remove(event) {
      ProviderController.remove(event.target.getAttribute("provider_id"));
    }
  },

  computed: {
    onLoad() {
      return this.$store.state.onLoad;
    },
    client() {
      return this.$store.state.client;
    }
  },

  components: {
    provider
  }
};
</script>


<style lang="scss">
</style>
