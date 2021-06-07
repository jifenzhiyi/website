<template>
  <div class="page">
    <banner
      text="专业 感恩 协作 共赢"
      desc="———— 临期优选"
      bg="/images/banner_join.jpg" />
    <div class="content">
      <div class="center">
        <div class="title">加盟优势</div>
        <img
          class="ad"
          src="@/assets/images/join1.jpg" />
        <div class="title">签约现场</div>
        <div class="imglist">
          <swiper-card />
        </div>
        <div class="line" />
      </div>
    </div>
  </div>
</template>

<script>
import Banner from 'comps/public/Banner.vue';
import SwiperCard from 'comps/public/SwiperCard.vue';

export default {
  name: 'Join',
  components: { Banner, SwiperCard },
};
</script>

<style lang="less" scoped>
.imglist {
  width: 100%;
  margin-top: 80px;
}
</style>
