<template>
  <div>
    <button @click="showModal = true">Show Modal</button>
    <Modal
      :show="showModal"
      :video="true"
      title="Hello World"
      :radius="6"
      @close="showModal = false"
    >
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/JltjT4UaxbY"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
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
