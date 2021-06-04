<template>
  <div class="page">
    <banner
      text="让真正高性价比的好商品<br />走进千家万户"
      desc="———— 临期优选" />
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
.banner {
  height: 400px;
  position: relative;
  background: url(/images/banner2.jpg) center no-repeat;
  .content {
    height: 100%;
    overflow: hidden;
    position: relative;
    .desc { 
      color: #fff;
      position: absolute;
      transition: all 2s;
      &.desc1 { font-size: 48px; }
      &.desc2 { font-size: 24px; }
    } 
  }
}
.center {
  display: flex;
  align-items: center;
  flex-direction: column;
  .title {
    color: #333;
    font-size: 30px;
    font-weight: 400;
    padding-top: 80px;
    position: relative;
    padding-bottom: 20px;
    &::after {
      left: 50%;
      bottom: 0;
      width: 40px;
      content: ' ';
      position: absolute;
      margin-left: -20px;
      border-bottom: solid 2px #d83119;
    }
  }
  .ad { margin-top: 80px; width: 1200px; }
  .line { height: 80px; }
}
</style>
