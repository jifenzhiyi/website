<template>
  <div class="layouts">
    <base-header />
    <div class="main">
      <router-view />
    </div>
    <!-- <base-footer v-show="$route.name !== 'Home'" /> -->
  </div>
</template>

<script>
import BaseHeader from 'comps/base/Header';
// import BaseFooter from 'comps/base/Footer';

export default {
  name: 'Layouts',
  components: {
    BaseHeader,
    // BaseFooter,
  },
};
</script>

<style lang="less" scoped>
.layouts {
  height: 100%;
  display: flex;
  flex-direction: column;
  .main {
    flex: 1;
    overflow: hidden;
  }
}
</style>
