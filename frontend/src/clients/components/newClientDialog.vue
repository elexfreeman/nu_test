<template>
  <div v-bind:class="{ active: show }" class="modal">
    <a v-on:click="closeDialog" class="modal-overlay"></a>
    <div v-if="client" class="modal-container">

      <div class="modal-header">
        <button v-on:click="closeDialog" class="btn btn-clear float-right"></button>
        <div class="modal-title h5">New Client</div>
      </div>

      <div class="modal-body">
        <div class="content">
          <form class="form-horizontal">

            <div class="form-group">
              <div class="col-3 col-sm-12">
                <label class="form-label">Name:</label>
              </div>
              <div v-bind:class="{ 'has-error': clientNameError }" class="col-9 col-sm-12">
                <input v-model="client.name" class="form-input" type="text" />
              </div>
            </div>

            <div class="form-group">
              <div class="col-3 col-sm-12">
                <label class="form-label">Email:</label>
              </div>
              <div class="col-9 col-sm-12">
                <input v-model="client.email" class="form-input" type="text" />
              </div>
            </div>

            <div class="form-group">
              <div class="col-3 col-sm-12">
                <label class="form-label">Phone:</label>
              </div>
              <div class="col-9 col-sm-12">
                <input v-model="client.phone" class="form-input" type="text" />
              </div>
            </div>

            <providerList></providerList>
            
          </form>
        </div>
      </div>

      <div class="modal-footer">
        <div class="columns">
          <div class="column col-6 text-left"></div>
          <div class="column col-6 text-right">
            <button v-on:click="closeDialog" class="btn">Cancel</button>
            <button v-on:click="saveClient" class="btn btn-success">Add Client</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import providerList from "./providerList.vue";

import ClientController from "../client/ClientController";

export default {
  
  name: "newClientDialog",

  data() {
    return {
      clientNameError: false
    };
  },

  methods: {
    closeDialog(event) {
      ClientController.hideNewClientDialog();
    },
    saveClient(event) {
      console.log(this.$store.state.client);
      if (this.$store.state.client.name.length < 3) {
        this.clientNameError = true;
      } else {
         this.clientNameError = false;
        ClientController.saveClient();
      }
    }
  },

  computed: {
  
    onLoad() {
      return this.$store.state.onLoad;
    },

    show() {
      return this.$store.state.showNewClientDialog;
    },

    client() {
      return this.$store.state.client;
    }

  },
  components: {
    providerList
  }
};
</script>


<style lang="scss">
</style>
