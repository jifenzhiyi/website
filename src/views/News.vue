<template>
  <div class="page">
    <banner
      text="中国食品新零售<br />千亿市值独角兽企业"
      desc="———— 企业愿景" />
    <div class="content">
      <div class="list">
        <div class="one">1</div>
        <div class="one">2</div>
        <div class="one">3</div>
        <div class="one">4</div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from 'comps/public/Banner.vue';

export default {
  name: 'News',
  components: { Banner },
};
</script>

<style lang="less" scoped>
.list {
  width: 100%;
  padding: 160px 0;
  .one {
    width: 100%;
    height: 180px;
    display: flex;
    margin-bottom: 40px;
    border-bottom: dotted 2px #ccc;
  }
}
</style>
