<template>
  <div>
    <div class="form-group">
      <div class="col-3 col-sm-12">
        <label class="form-label">Providers:</label>
      </div>
      <div class="col-9 col-sm-12">
        <div class="input-group">
          <input class="form-input input-lg" type="text" />
          <button class="btn btn-primary input-group-btn btn-lg">Add provider</button>
        </div>
      </div>
    </div>

    <div class="provider_row form-group">
      <div class="col-3 col-sm-12"></div>
      <div class="col-9 col-sm-12">
        <div class="columns">
          <div class="column col-6">
            <label class="form-checkbox">
              <input type="checkbox" />
              <i class="form-icon"></i> Provider 1
            </label>
          </div>
          <div class="column col-1">
            <button class="btn">
              <i class="icon icon-edit"></i>
            </button>
          </div>
          <div class="column col-1">
            <button class="btn">
              <i class="icon icon-delete"></i>
            </button>
          </div>
        </div>
      </div>
    </div> <!-- provider_row -->


  </div>
</template>

<script>
import ProviderController from "../ProviderController";

export default {
  name: "providerEditor",
  data() {
    return {};
  },
  methods: {},
  computed: {
    onLoad() {
      return this.$store.state.onLoad;
    }
  },
  components: {}
};
</script>


<style lang="scss">
</style>
