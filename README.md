# Super Lightweight Modal Nuxt & Vue

> A Nuxt / Vue JS Modal, no dependency, no BS.

## 💥 Installation

NPM:

```bash
npm i vue-lightweight-modal
```

Yarn:

```
yarn add vue-lightweight-modal
```

## 🍭 Usage

In Component

```javascript
import Modal from 'vue-lightweight-modal'

export default {
  components: {
    Modal,
  },
}
```

## 🍿 Props

| name     | type    | default  |                                       |
| -------- | ------- | -------- | ------------------------------------- |
| show     | Boolean | false    | show/hide modal                       |
| video    | Boolean | false    | add responsive 16:9 scaling to iframe |
| title    | String  | null     | add title to modal header             |
| radius   | Number  | 0        | add border radius to modal container  |
| max      | String  | '1000px' | max-width of modal window             |
| min      | String  | '0'      | min-width of modal window             |
| duration | String  | '900ms'  | animation duration                    |

## 🍾 Example

💬 Regular Usage:

```vue
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
import Modal from 'vue-lightweight-modal'

export default {
  data() {
    return {
      showModal: false,
    }
  },
  components: {
    Modal,
  },
}
</script>
```

🎥 Embed Video (iframe):

```vue
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
import Modal from 'vue-lightweight-modal'

export default {
  data() {
    return {
      showModal: false,
    }
  },
  components: {
    Modal,
  },
}
</script>
```
