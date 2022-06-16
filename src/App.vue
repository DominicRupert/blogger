<template>
  <header>
    <Navbar />
  </header>
  <main class="">
    <router-view />
  </main>
  <Modal id="blog-modal">
    <template #header> Blog details </template>
    <template #body>
      <ActiveBlog />
    </template>
  </Modal>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
