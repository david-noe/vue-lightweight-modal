<template>
  <div>
    <div class="vue-lightweight-modal" :style="cssProps">
      <transition name="fade-up" appear>
        <div class="inner" v-if="show">
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
          <div class="header" v-if="title">
            <h3>{{ title }}</h3>
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
    max: {
      required: false,
      default: '1000px',
      type: String,
    },
    min: {
      required: false,
      default: '0',
      type: String,
    },
    duration: {
      required: false,
      default: '900ms',
      type: String,
    },
  },
  computed: {
    cssProps() {
      return {
        '--border-radius': `${this.radius}px`,
        '--max-width': `${this.max}`,
        '--min-width': `${this.min}`,
        '--duration': `${this.duration}`,
      }
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
.vue-lightweight-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: var(--max-width);
  min-width: var(--min-width);
  width: 98%;
  z-index: 9999;
}

.vue-lightweight-modal .inner {
  padding: 1rem;
  background: #fff;
  border-radius: var(--border-radius);
  overflow: scroll;
  max-height: 90vh;
  position: relative;
}

// Header

.header {
  margin-bottom: 1em;
  width: 100%;
}

h3 {
  margin: 0;
}

// Close

.close {
  height: 20px;
  width: 20px;
  cursor: pointer;
  position: absolute;
  right: 10px;
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
  animation: fade-up var(--duration) cubic-bezier(0.075, 0.82, 0.165, 1);
}
.fade-up-leave-active {
  animation: fade-down calc(var(--duration) - 400ms) ease;
}

.outerclick.fade-leave-to {
  pointer-events: none;
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
