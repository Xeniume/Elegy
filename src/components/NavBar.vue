<script setup lang="ts">
interface Props {
  title?: string
  path?: string
}

const props = defineProps<Props>()

const title = props.title ?? 'Xeniume'
const path = props.path ?? '/'

const titleSegs = title.split('.')
const pathSegs = path.split('/').filter((seg) => seg)

function genPath(index: number) {
  const tSeg = pathSegs.slice(0, index)
  return `/${tSeg.join('/')}`
}
</script>

<template>
  <nav>
    <ol>
      <li v-for="(t, idx) in titleSegs" :key="idx">
        <router-link :to="genPath(idx)" class="cursor">{{ t }}</router-link>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
nav {
  height: 8rem;
  padding: 0 25vw;
  color: #726e70;
  background-color: #f7f7f7;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  user-select: none;
}

nav a {
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  background-size: 0 2.5px;
  background: linear-gradient(to right, #3a4f66, #304142) no-repeat center bottom;
  background-size: 0 1px;
  transition: all 500ms cubic-bezier(0.215, 0.61, 0.355, 1);
}

nav a:hover {
  color: #192a3d;
  background-color: #f0f0f0;
  border-radius: 5px;
  background-size: 100% 2.5px;
}

ol {
  list-style: none;
  display: flex;
  padding: 0 2rem;
}

ol li::after {
  content: '.';
  font-size: 1.5rem;
}

ol li:last-child::after {
  content: '';
}

@media (max-width: 800px) {
  nav {
    height: 6rem;
    padding: 0 5vw;
  }
}
</style>
