<template>
  <div>
    <NcModal v-if="modal" @close="closeModal" title="Title inside modal">
      <div class="modal__content">
        <table>
          <thead>
            <tr>
              <th><NcButton class="tab"> Người dùng </NcButton></th>
              <th><NcButton class="tab"> Người thân </NcButton></th>
            </tr>
          </thead>
        </table>
        <h2>Please enter your name</h2>
        <NcTextField label="First Name" :value.sync="firstName" />
        <NcTextField label="Last Name" :value.sync="lastName" />
        <NcButton
          :disabled="!this.firstName || !this.lastName"
          @click="closeModal"
          type="primary"
        >
          Submit
        </NcButton>
      </div>
    </NcModal>
  </div>
</template>

<script>
import { NcModal, NcTextField, NcButton } from "@nextcloud/vue";

export default {
  name: "NewUser",
  components: {
    NcModal,
    NcButton,
    NcTextField,
  },
  data() {
    return {
      modal: true,
      firstName: "",
      lastName: "",
    };
  },
  methods: {
    showModal() {
      this.firstName = "";
      this.lastName = "";
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
  },
};
</script>
<style scoped>
table {
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;
}
.modal__content {
  margin: 50px;
  text-align: center;
}
</style>
