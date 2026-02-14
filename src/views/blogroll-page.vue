<script setup lang="ts">
import InlineCode from '@/components/InlineCode.vue'
import NavBar from '@/components/NavBar.vue'
import SocialCard from '@/components/SocialCard.vue'
</script>

<template>
  <NavBar title="Xeniume.Blogroll" path="/blogroll" />
  <div class="content">
    <div class="text">
      Roaming the net~
      <br />
      All links are sorted chronologically by their addition, and I may implement a random shuffling
      feature in the future.
    </div>

    <div>
      <SocialCard
        name="終わり群星"
        avatar="https://gcore.jsdelivr.net/gh/talentestors/cdn@latest/img/custom/avatar.jpg"
        :links="{
          Blog: { url: 'https://yuhiri.me/', icon: 'fas fa-blog' },
          GitHub: { url: 'https://github.com/talentestors', icon: 'fab fa-github' },
        }"
      >
        愿此行，终抵群星！
      </SocialCard>
    </div>

    <div>
      <SocialCard
        name="JustPureH2O"
        avatar="https://pic.imgdb.cn/item/667f85b1d9c307b7e9ef9f2c.jpg"
        :links="{
          Blog: { url: 'https://justpureh2o.cn/', icon: 'fas fa-blog' },
          GitHub: { url: 'https://github.com/JustPureH2O/', icon: 'fab fa-github' },
        }"
      >
        穷方圆平直之情，尽规矩准绳之用。
      </SocialCard>
    </div>

    <div>
      <SocialCard
        name="Elvish"
        avatar="https://www.elvish.me/img/avatar/logo_c.webp"
        :links="{
          Home: { url: 'https://www.elvish.me/', icon: 'fas fa-home' },
          Blog: { url: 'https://blog.elvish.me/', icon: 'fas fa-blog' },
          GitHub: { url: 'https://github.com/Elvish064', icon: 'fab fa-github' },
        }"
      >
        Meow~
      </SocialCard>
    </div>

    <hr />

    <div class="text">
      <p>
        Feel free to swap blog links with me.
        <br />
        But before doing so, please take a moment to read the following requirements (The final
        version shall prevail):
      </p>

      <ul>
        <li>
          Your blog should feature <strong>original content</strong>, meaning I don't accept scraped
          or rewritten material.
        </li>
      </ul>

      <p>Here's a bit about my own site:</p>

      <ul>
        <li>name: <InlineCode>Xeniume</InlineCode></li>
        <li>url: <InlineCode>https://xeniu.me/</InlineCode></li>
        <li>slogan: <InlineCode>One Last Dance.</InlineCode></li>
        <li>
          avatar: <InlineCode>https://xeniu.me/favicon.jpg</InlineCode> (Well, I know it's not a
          good way to host images. )-;
        </li>
      </ul>

      <p>
        If your site meets these requirements and you'd like it included here, just drop me an
        email.
      </p>
    </div>
  </div>
</template>
