<script setup lang="ts">
import InlineLink from '@/components/InlineLink.vue'
import NavBar from '@/components/NavBar.vue'
import SocialCard from '@/components/SocialCard.vue'
</script>

<template>
  <NavBar />
  <div class="content">
    <div>
      <SocialCard
        name="Xeniume"
        avatar="/favicon.jpg"
        :links="{
          Blog: { url: 'https://blog.xeniu.me/', icon: 'fas fa-blog' },
          GitHub: { url: 'https://github.com/Xeniume', icon: 'fab fa-github' },
          Email: { url: 'mailto:ohmyxeniume@gmail.com', icon: 'fas fa-envelope' },
          'PGP Public Key': {
            url: 'https://keys.openpgp.org/vks/v1/by-fingerprint/0FCC70B9B087CF16D415898CA6985A5F72D873A8',
            icon: 'fas fa-key',
          },
        }"
      >
        One Last Dance.
      </SocialCard>
    </div>

    <div class="text">
      <p>
        Hi there! 🖖<br />
        This is Xeniume /'zenɪəm/.
      </p>

      <p>
        I'm quite keen on <strong>tech</strong>, though I'd rather not be labelled an otaku.<br />
        At the same time, I take great pleasure in reading <strong>sci-fi</strong>, and sometimes I
        simply sit back, gaze at the stars, and let my mind wander in peaceful
        <strong>rumination</strong>.
      </p>

      <p>
        If you try to get in touch, don't be surprised if it takes a while to hear back.<br />
        But fear not, I shall endeavour to reply—eventually (if I feel like it 😏).
      </p>

      <p>
        As I go about my day, I occasionally come across
        <InlineLink to="/blogroll">intriguing people</InlineLink> who really capture my attention,
        prompting me to connect them with others.<br />
        It's remarkable how even brief encounters can make life feel a touch richer.
      </p>

      <p>
        In a modest way, I also have <InlineLink to="/big-shots">figures</InlineLink> I hold in
        admiration, each shining with their own distinctive light.<br />
        Observing them from afar keeps me inspired… or at least marginally less idle.
      </p>

      <p>
        At the end of the day, I'm just an ordinary chap, perfectly content with life's little
        trivialities—and perhaps that is quite enough.
      </p>
    </div>
  </div>
</template>
