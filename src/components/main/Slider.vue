<template>
  <div class="slider">
    <div
      class="slider-container"
      :style="{ width: `${(allUsers.length + 1) * 100}%` }"
    >
      <div
        class="slide"
        v-for="(slide, index) in allUsers"
        :key="index"
        :style="{ width: `${100 / (allUsers.length + 1)}%` }"
      >
        <UserCard v-for="user in slide" :key="user.id" :userInfo="user" />
      </div>
      <div class="slide" :style="{ width: `${100 / (allUsers.length + 1)}%` }">
        <UserCard v-for="user in allUsers[0]" :key="user.id" :userInfo="user" />
      </div>
    </div>
  </div>
</template>
<script>
//PERSONAL COMPONENTS IMPORTS
import UserCard from "@/components/main/UserCard.vue";
//UTILITIES IMPORTS
import { chunkArray } from "@/utilities/index.js";

export default {
  name: "Slider",
  components: {
    UserCard
  },
  data() {
    return {
      slides: []
    };
  },
  computed: {
    allUsers() {
      return chunkArray(this.$store.getters.allUsers, 3);
    }
  },
  mounted() {
    const sliderInfos = chunkArray(this.slides, 3);
    this.slides = sliderInfos;
  }
};
</script>
<style scoped lang="scss">
.slider {
  @include absoluteCenter();
  width: 50%;
  overflow: hidden;
  backdrop-filter: blur(8px);
  background-color: rgba($color: white, $alpha: 0.3);
  border-radius: 10px;
  padding: 1rem 0;
  animation: entrance 2s linear;
  .slider-container {
    @include flexBox(row, none, center);
    animation: slide 30s linear infinite;
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
  @keyframes entrance {
    0% {
      max-width: 0px;
    }
    50% {
      max-width: 0px;
    }
    100% {
      max-width: 100%;
    }
  }
}
</style>
