<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Link {
  url: string
  icon: string
}

interface Props {
  name: string
  avatar: string
  links: Record<string, Link>
}

const props = defineProps<Props>()

const card = ref<HTMLDivElement | null>(null)

onMounted(() => {
  const cardEle = card.value
  if (!cardEle) return

  cardEle.addEventListener('mousemove', (e: MouseEvent) => {
    const rect = cardEle.getBoundingClientRect()
    const left = rect.left
    const top = rect.top
    const w = cardEle.offsetWidth
    const h = cardEle.offsetHeight
    const k = 25
    const mouseX = e.clientX
    const mouseY = e.clientY
    const shadowX = Math.round((left + w / 2 - mouseX) / k)
    const shadowY = Math.round((top + h / 2 - mouseY) / k)
    // const shadowX = Math.round((mouseX - (mouseX - left) * (k + 1) / k + w / 2 * (k + 1) / k) - (left + w / 2))
    // const shadowY = Math.round((mouseY - (mouseY - top) * (k + 1) / k + h / 2 * (k + 1) / k) - (top + h / 2))
    cardEle.style.boxShadow = `${shadowX}px ${shadowY}px 10px ${Math.round(w / 2 / k)}px rgba(240, 240, 240, 0.8)`
  })

  cardEle.addEventListener('mouseout', () => {
    cardEle.style.boxShadow = 'none'
  })
})
</script>

<template>
  <div class="social-card" ref="card">
    <div class="avatar-container">
      <img :src="props.avatar" :alt="props.name" class="avatar" />
    </div>
    <div class="name">{{ props.name }}</div>
    <div class="social-links">
      <a
        v-for="(link, platform) in props.links"
        :key="platform"
        :href="link.url"
        class="social-link cursor"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i :class="link.icon"></i>
        <span class="tooltip">{{ platform }}</span>
      </a>
    </div>
    <p class="description">
      <slot />
    </p>
  </div>
</template>

<style scoped>
.social-card {
  margin: 1rem 1.5rem;
  padding: 1rem 2rem;
  width: auto;
  text-align: center;
  border-radius: 1.5rem;
  transition: scale 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
}

.social-card:hover {
  scale: 1.02;
}

.avatar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 9rem;
  width: 9rem;
  margin: 0.5rem auto;
  user-select: none;
}

.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0.2rem 0.2rem rgba(45, 60, 99, 0.3);
  transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
}

.avatar:hover {
  box-shadow: 0.2rem 0.4rem 0.3rem rgba(14, 9, 41, 0.5);
  transform: scale(1.02);
}

.name {
  margin: 0.5rem 0;
  font-size: 2rem;
  font-weight: 600;
}

.description {
  font-size: 0.9rem;
  margin: 1rem 0;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 0.5rem 0;
}

.social-link {
  font-size: 1.5rem;
  color: #9a9b90;
  text-decoration: none;
  background: linear-gradient(to right, #3a4f66, #304142) no-repeat center bottom;
  background-size: 0 0.1rem;
  transition: all 715ms cubic-bezier(0.215, 0.61, 0.355, 1);
  position: relative;
}

.social-link:hover {
  color: #192a3d;
  background-size: 100% 0.12rem;
}

.tooltip {
  position: absolute;
  top: 2.2rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #3c4547;
  color: #f5fdd1;
  padding: 0.3rem 0.6rem;
  border-radius: 0.4rem;
  font-size: 0.8rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 715ms cubic-bezier(0.215, 0.61, 0.355, 1);
}

.social-link:hover .tooltip {
  opacity: 1;
  visibility: visible;
}
</style>
