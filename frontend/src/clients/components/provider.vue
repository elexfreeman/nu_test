<template>
  <div class="provider_row form-group">
    <div class="col-3 col-sm-12"></div>
    <div class="col-9 col-sm-12">
      <div class="columns">
        <div class="column col-6">
          <label v-bind:class="{ 'has-error': providerNameError }" class="form-checkbox">
            <input type="checkbox" v-model="item.check" />
            <i class="form-icon"></i>
            <span v-if="!isEdit">{{item.name}}</span>
            <input
              
              v-if="isEdit"
              v-model="item.name"
              class="form-input input_provider_edit"
              type="text"
            />
          </label>
        </div>

        <!-- !isEdit -->
        <div v-if="!isEdit" class="column col-1">
          <button v-on:click="setStartEdit" type="button" class="btn">
            <i class="icon icon-edit"></i>
          </button>
        </div>
        <div v-if="!isEdit" class="column col-1">
          <button v-on:click="remove" v-bind:provider_id="item.id" type="button" class="btn">
            <i v-bind:provider_id="item.id" class="icon icon-delete"></i>
          </button>
        </div>

        <!-- isEdit -->
        <div v-if="isEdit" class="column col-1">
          <button v-on:click="editDone" type="button" class="btn">
            <i v-bind:provider_id="item.id" class="icon icon-check"></i>
          </button>
        </div>
        <div v-if="isEdit" class="column col-1">
          <button v-on:click="editCansel" v-bind:provider_id="item.id" type="button" class="btn">
            <i v-bind:provider_id="item.id" class="icon icon-stop"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProviderController from "../provider/ProviderController";

export default {
  
  name: "provider",

  props: ["item"],

  data() {
    return {
      isEdit: false,
      providerNameError: false,
      oldName: ''
    };
  },

   mounted() {
     this.oldName = this.item.name;     
   }, // mounted


  methods: {
   
    remove(event) {
      ProviderController.remove(event.target.getAttribute("provider_id"));
    },

    setStartEdit(event) {
      this.isEdit = true;
    },

    editDone(event) {
      /* check item.name.lenght */
      if (this.item.name.length < 2) {
        this.providerNameError = true;
      } else {
        this.isEdit = false;
        ProviderController.save(this.item);
        this.providerNameError = false;
      }
    },

    editCansel(event) {
      /* return back old name */
      this.item.name = this.oldName;
      this.isEdit = false;
    }

  }, // methods

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
.provider_row {
  .form-checkbox {
    .input_provider_edit {
      width: auto;
      height: auto;
      /* overflow: auto; */
      overflow: visible;
      position: inherit;
    }
  }
}
</style>
