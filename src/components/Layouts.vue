<template>
  <div class="layouts">
    <base-header />
    <div
      id="main"
      class="main">
      <router-view />
      <base-footer v-show="$route.name !== 'Home'" />
    </div>
  </div>
</template>

<script>
import BaseHeader from 'comps/base/Header';
import BaseFooter from 'comps/base/Footer';

export default {
  name: 'Layouts',
  components: {
    BaseHeader,
    BaseFooter,
  },
};
</script>

<style lang="less" scoped>
.layouts {
  height: 100%;
  display: flex;
  min-width: 1200px;
  flex-direction: column;
  .main {
    flex: 1;
    overflow: auto;
  }
}
</style>
