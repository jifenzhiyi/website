<template>
  <header>
    <nav>
      <router-link to="/home">home</router-link> | 
      <router-link to="/about">about</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
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
