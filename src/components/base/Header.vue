<template>
  <header>
    <nav>
      <router-link
        v-for="item in nav"
        :key="item"
        :to="'/' + item.toLowerCase()">{{item}}</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      nav: ['Home', 'About', 'History', 'Project', 'News', 'Join', 'Entrance', 'Other'],
    };
  },
};
</script>

<style lang="less" scoped>
header {
  width: 100%;
  height: 40px;
  display: flex;
  background: #ccc;
  align-items: center;
  justify-content: center;
  nav {
    color: #fff;
    display: flex;
    a {
      width: 100px;
      color: #fff;
      text-align: center;
      &.router-link-active {
        color: #f00;
      }
    }
  }
}
</style>
