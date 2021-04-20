<template>
  <div class="user-card">
    <img :src="userInfo.avatar" :alt="userInfo.first_name" />
    <p>{{ userInfo.first_name }}</p>
    <p>{{ userInfo.last_name }}</p>
  </div>
</template>
<script>
export default {
  name: 'UserCard',
  props: ['userInfo']
}
</script>
<style scoped lang="scss">
.user-card {
  img {
    width: 150px;
    height: 150px;
  }
  p{
    text-align: center;
  }
}
</style>
