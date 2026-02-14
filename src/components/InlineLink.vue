<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  to: string
  mode?: string
}

const props = defineProps<Props>()

const isInSite = computed(() => props.to.startsWith('/'))
const computedMode = computed(() => (props.mode ? props.mode : isInSite.value ? 'stay' : 'blank'))
</script>

<template>
  <template v-if="computedMode === 'stay'">
    <router-link v-if="isInSite" :to="encodeURI(props.to)" class="cursor">
      <slot />
    </router-link>
    <a v-else :href="props.to" class="cursor">
      <slot />
    </a>
  </template>
  <template v-else-if="computedMode === 'blank'">
    <a :href="props.to" target="_blank" class="cursor">
      <slot />
    </a>
  </template>
</template>

<style scoped>
a {
  text-decoration: none;
  display: inline-block;
  color: #1ba784;
  background: linear-gradient(to right, #3a4f66, #304142) no-repeat center bottom;
  background-size: 0 1px;
  transition: all 500ms cubic-bezier(0.215, 0.61, 0.355, 1);
}

a:hover {
  color: #192a3d;
  background-size: 100% 1px;
}
</style>
