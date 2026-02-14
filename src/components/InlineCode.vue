<template>
  <code class="inline-code">
    <slot />
  </code>
</template>

<style scoped>
.inline-code {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.95em;
  color: #489620;
  padding: 0.1rem 0.3rem;
  border-radius: 0.3rem;
  white-space: nowrap;
  transition: background-color 0.2s;
}

.inline-code:hover {
  background-color: #f5f5f5;
}
</style>
