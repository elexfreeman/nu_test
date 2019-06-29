<template>
  <div class="modal">
    <a class="modal-overlay"></a>
    <div class="modal-container">
      <div class="modal-header">
        <button class="btn btn-clear float-right"></button>
        <div class="modal-title h5">Edit Client</div>
      </div>
      <div class="modal-body">
        <div class="content">
          <form class="form-horizontal">
            <div class="form-group">
              <div class="col-3 col-sm-12">
                <label class="form-label">Name:</label>
              </div>
              <div class="col-9 col-sm-12">
                <input class="form-input" type="text" />
              </div>
            </div>

            <div class="form-group">
              <div class="col-3 col-sm-12">
                <label class="form-label">Email:</label>
              </div>
              <div class="col-9 col-sm-12">
                <input class="form-input" type="text" />
              </div>
            </div>

            <div class="form-group">
              <div class="col-3 col-sm-12">
                <label class="form-label">Phone:</label>
              </div>
              <div class="col-9 col-sm-12">
                <input class="form-input" type="text" />
              </div>
            </div>

            <div class="form-group">
              <div class="col-3 col-sm-12">
                <label class="form-label">Providers:</label>
              </div>
              <div class="col-9 col-sm-12">
               <div class="input-group">
                  <input class="form-input input-lg" type="text">
                  <button class="btn btn-primary input-group-btn btn-lg">Add provider</button>
                </div>
              </div>
            </div>

            <!-- form structure -->
          </form>
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
