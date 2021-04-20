<template>
  <div class="slider">
    <div class="slider-container" :style="{ width: `${(slides.length + 1) * 100}%` }">
      <div class="slide" v-for="(slide, sI) in slides" :key="sI" :style="{ width: `${100 / (slides.length + 1)}%` }">
        <UserCard v-for="user in slide" :key="user.id" :userInfo="user" />
      </div>
      <div class="slide" :key="sI" :style="{ width: `${100 / (slides.length + 1)}%` }">
        <UserCard v-for="user in slides[0]" :key="user.id" :userInfo="user" />
      </div>
    </div>
  </div>
</template>
<script>
//PERSONAL COMPONENTS IMPORTS
import UserCard from '@/components/main/UserCard.vue'
//UTILITIES IMPORTS
import { chunkArray, getFetch } from '@/utilities/index.js'

export default {
  name: 'Slider',
  components: {
    UserCard
  },
  data() {
    return {
      slides: []
    }
  },
  mounted() {
    ;(async () => {
      const result = await getFetch('/users', null)
      if (result.total_pages > 0) {
        let allResults = []
        for (let i = 0; i < result.total_pages; i++) {
          const result2 = await getFetch('/users', i + 1)
          allResults = [...allResults, ...result2.data]
        }
        const usersList = chunkArray(allResults, 3)
        this.slides = usersList
      }
    })()
  }
}
</script>
<style scoped lang="scss">
.slider {
  @include absoluteCenter();
  width: 50%;
  overflow: hidden;
  .slider-container {
    @include flexBox(row, none, center);
    animation: slide 20s linear infinite;
    .slide {
      @include flexBox(row, space-evenly, center);
    }
    @keyframes slide {
      0% {
      }
      100% {
        margin-left: -400%;
      }
    }
  }
}
</style>
