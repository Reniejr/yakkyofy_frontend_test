<template>
  <div :style="{ paddingBottom: '2rem' }">
    <h2>Link with the other VUEsers</h2>
    <div id="users-pagination">
      <UserCard v-for="user in pages[index]" :key="user.id" :userInfo="user" />
    </div>
    <div class="impagination">
      <button
        v-for="(u, uI) in pages"
        :key="uI"
        @click="changePage(uI)"
        :style="{ backgroundColor: index === uI ? '#34495E' : '' }"
      >
        {{ uI + 1 }}
      </button>
    </div>
  </div>
</template>
<script>
import { chunkArray } from "@/utilities";
import UserCard from "@/components/main/UserCard";

export default {
  name: "AllUsers",
  data() {
    return {
      index: 0
    };
  },
  components: {
    UserCard
  },
  computed: {
    pages() {
      const otherUsers = this.$store.getters.allUsers.filter(
        user => user.id !== this.$store.getters.currentUser.id
      );
      return chunkArray(otherUsers, 6);
    }
  },
  methods: {
    changePage(page) {
      this.index = page;
    }
  }
};
</script>
<style lang="scss">
h2 {
  font-size: 2.5rem;
  text-align: center;
  margin: 1rem 2rem;
  margin-top: 0;
  padding: 1rem 0;
  border-bottom: 1px solid $secondary;
  color: $primary;
  font-weight: 700;
}
#users-pagination {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem;
  .user-card {
    @include flexBox(column, none, center);
    cursor: pointer;
    transition: all 0.3s ease;
    img {
      box-shadow: 0px 8px 20px -10px $primary;
    }
    &:hover {
      scale: 1.1;
      img {
        box-shadow: 0px 8px 20px -5px $secondary;
      }
    }
  }
}
.impagination {
  @include flexBox(row, center, center);
  width: 100%;
  button {
    @include iconed-btn();
    margin-right: 0.5rem;
    background-color: $primary;
    color: #fff;
    border-color: $primary;
    cursor: pointer;
    &:hover {
      background-color: $secondary;
    }
    &:nth-last-of-type(1) {
      margin-right: 0;
    }
  }
}
</style>
