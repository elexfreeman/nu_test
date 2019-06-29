<template>
  <div class="modal active">
    <a class="modal-overlay"></a>
    <div class="modal-container">
      <div class="modal-header">
        <button class="btn btn-clear float-right"></button>
        <div class="modal-title h5">Edit Client</div>
      </div>
      <div class="modal-body">
        <div class="content">
          <!-- content here -->
        </div>
      </div>
      <div class="modal-footer">
        <div class="columns">
          <div class="column col-6 text-left">
            <button class="btn btn-error">Delete Client</button>
          </div>
          <div class="column col-6 text-right">
            <button class="btn">Cancel</button>
            <button class="btn btn-success">Save Client</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "editClientDialog",
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
  components: {}
};
</script>


<style lang="scss">
.clients-app {
  .modal-header {
    border-bottom: 1px solid #ddd;
  }
}
</style>
