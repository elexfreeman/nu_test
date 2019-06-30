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

    <div
      v-bind:key="key"
      v-for="(item, key) in client.providerEditorListData"
      class="provider_row form-group"
    >
      <div class="col-3 col-sm-12"></div>
      <div class="col-9 col-sm-12">
        <div class="columns">
          <div class="column col-6">
            <label class="form-checkbox">
              <input type="checkbox" v-model="item.check" />
              <i class="form-icon"></i>
              {{item.name}}
            </label>
          </div>
          <div class="column col-1">
            <button class="btn">
              <i class="icon icon-edit"></i>
            </button>
          </div>
          <div class="column col-1">
            <button type="button" v-on:click="remove" v-bind:provider_id="item.id" class="btn">
              <i  v-bind:provider_id="item.id" class="icon icon-delete"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- provider_row -->
  </div>
</template>

<script>
import ProviderController from "../provider/ProviderController";

export default {
  name: "providerEditor",

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
      ProviderController.remove(event.target.getAttribute('provider_id'));      
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

  components: {}
};
</script>


<style lang="scss">
</style>
