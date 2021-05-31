<template>
  <div class="page">
    <h1>首页</h1>
    <!--只能固定3个图片轮播(鸡肋)-->
    <!-- <div class="carousel">
      <el-carousel
        type="card"
        height="300px"
        :arrow="'never'"
        :interval="5000"
        :autoplay="false"
        :indicator-position="'none'">
        <el-carousel-item
          v-for="item in 6"
          :key="item">
          <img :src="'images/'+item+'.jpg'" />
        </el-carousel-item>
      </el-carousel>
    </div> -->
    <div class="carousel">
      <swiper-card />
    </div>
  </div>
</template>

<script>
import SwiperCard from 'comps/public/SwiperCard.vue';

export default {
  name: 'Home',
  components: {
    SwiperCard,
  },
  methods: {
    test1() {
      this.$notice_success({
        minfo: 'success',
        func: () => {
          // TODO 待定
        },
      });
    },
    test2() {
      this.$notice_error({
        minfo: 'error',
        func: () => {
          // TODO 待定
        },
      });
    },
    test3() {
      this.$notice_confirm({
        minfo: '是否确定 XXX ?',
        func: () => {
          // TODO 待定
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.carousel {
  width: 1000px;
  margin: 0 auto;
}
</style>
