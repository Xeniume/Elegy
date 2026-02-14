<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import SocialCard from '@/components/SocialCard.vue'
</script>

<template>
  <NavBar title="Xeniume.BigShots" path="/big-shots" />
  <div class="content">
    <div class="text">
      <p>Humbly, I have my own admired individuals, each radiating their own unique spark.</p>
    </div>

    <div>
      <SocialCard
        name="Neo Peng"
        avatar="https://avatars.githubusercontent.com/wozulong"
        :links="{
          Home: { url: 'https://zhile.io/', icon: 'fas fa-house' },
          Github: { url: 'https://github.com/wozulong', icon: 'fab fa-github' },
        }"
      >
        Neo Peng is such a kind and generous fellow
        <s>who is well versed in the best programming language in the world, PHP</s>.
      </SocialCard>

      <SocialCard
        name="Xecades"
        avatar="https://avatars.githubusercontent.com/Xecades"
        :links="{
          Home: { url: 'https://xecades.xyz/', icon: 'fas fa-house' },
          Github: { url: 'https://github.com/Xecades', icon: 'fab fa-github' },
        }"
      >
        Xecades is my senior and is also considered exemplary.
      </SocialCard>
    </div>
  </div>
</template>
