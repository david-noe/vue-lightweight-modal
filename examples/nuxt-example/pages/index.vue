<template>
  <div>
    <button @click="showModal = true">Show Modal</button>
    <Modal
      :show="showModal"
      title="Hello World"
      :radius="6"
      @close="showModal = false"
    >
      <h2>Some Content</h2>
      <p>Add whatever you want</p>
    </Modal>
  </div>
</template>
<script>
import Modal from "vue-lightweight-modal";

export default {
  data() {
    return {
      showModal: false
    };
  },
  components: {
    Modal
  }
};
</script>
