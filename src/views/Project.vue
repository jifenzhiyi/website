<template>
  <div class="page">
    <banner
      text="让真正高性价比的好商品<br />走进千家万户"
      desc="———— 临期优选"
      bg="/images/banner2.jpg" />
    <div class="content">
      <div class="center">
        <div class="title">项目介绍</div>
        <img
          class="ad"
          src="@/assets/images/project.jpg" />
        <div class="line" />
      </div>
    </div>
  </div>
</template>

<script>
import Banner from 'comps/public/Banner.vue';

export default {
  name: 'Project',
  components: { Banner },
};
</script>

<style lang="less" scoped>
.center {
  .ad { margin-top: 80px; width: 1200px; }
  .line { height: 80px; }
}
</style>
