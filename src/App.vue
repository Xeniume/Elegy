<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import cursor from '@/utils/cursor'

export default defineComponent({
  setup() {
    onMounted(() => {
      cursor.setup()
    })
  },
})
</script>
