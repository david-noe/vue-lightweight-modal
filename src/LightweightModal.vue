<template>
  <div>
    <div class="modal">
      <transition name="fade-up" appear>
        <div class="inner" :style="modalStyle" v-if="show">
          <div class="header">
            <h3>{{ title }}</h3>
            <div class="close" @click="closeModal">
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  width="15"
                  height="1.5"
                  rx="0.75"
                  transform="rotate(45 2 0)"
                  fill="black"
                />
                <rect
                  x="1"
                  y="10.6066"
                  width="15"
                  height="1.5"
                  rx="0.75"
                  transform="rotate(-45 1 10.6066)"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <slot v-if="!video" />
          <div class="scale-video" v-else><slot /></div>
        </div>
      </transition>
    </div>
    <transition name="fade" appear>
      <div v-if="show" class="outerclick" @click="closeModal"></div>
    </transition>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    show: {
      required: true,
      default: false,
      type: Boolean,
    },
    video: {
      required: false,
      default: false,
      type: Boolean,
    },
    title: {
      required: false,
      type: String,
    },
    radius: {
      required: false,
      default: 0,
      type: Number,
    },
  },
  computed: {
    modalStyle() {
      return `border-radius: ${this.radius}px`
    },
  },

  methods: {
    closeModal(): void {
      this.$emit('close')
    },
  },
})
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  min-width: 400px;
  max-width: 1200px;
  width: 98%;
  z-index: 9999;
}

.modal .inner {
  padding: 1rem;
  background: #fff;
}

// Header

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
}

h3 {
  margin: 0;
}

// Close

.close {
  height: 20px;
  width: 20px;
  cursor: pointer;
}

.outerclick {
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 9998;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 1;
}

// Animation

.fade-up-enter-active {
  animation: fade-up 900ms cubic-bezier(0.075, 0.82, 0.165, 1);
}
.fade-up-leave-active {
  animation: fade-down 800ms cubic-bezier(0.075, 0.82, 0.165, 1);
}

@keyframes fade-up {
  from {
    opacity: 0;
    visibility: hidden;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: 0;
    visibility: visible;
  }
}

@keyframes fade-down {
  from {
    opacity: 1;
    transform: 0;
    visibility: visible;
  }
  to {
    opacity: 0;
    visibility: hidden;
    transform: translateY(50px);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
<style lang="scss">

// Video

.scale-video {
  width: 100%;
  padding-top: 56.25%;
  position: relative;
}

.scale-video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
