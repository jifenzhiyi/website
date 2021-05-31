<template>
  <div class="swiper-list-stack swiper-list">
    <div class="swiper-main-stack swiper-main"></div>
  </div>
</template>

<script>
import Swiper from '@/utils/sliderCard';

export default {
  name: 'SwiperCard',
  data() {
    return {
      imgArr: [
        { url: '#', imgPath: 'images/1.jpg' },
        { url: '#', imgPath: 'images/2.jpg' },
        { url: '#', imgPath: 'images/3.jpg' },
        { url: '#', imgPath: 'images/4.jpg' },
        { url: '#', imgPath: 'images/5.jpg' },
        { url: '#', imgPath: 'images/6.jpg' },
      ],
      swiper: null,
    };
  },
  mounted() {
    if (!this.swiper) {
      this.swiper = new Swiper({
        gap: -100,
        scale: 0.8,
        imgWidth: 300,
        aniTime: 1000,
        autoplay: true,
        intervalTime: 3000,
        imgArr: this.imgArr,
        clsSuffix: '-stack',
      }).init();
    }
  },
};
</script>

<style lang="less">
.swiper-list{
  height: 200px;
  overflow: hidden;
  position: relative;
  padding: 10px 0 50px;
}
.swiper-main {
  height: 100%;
  position: relative;
}
.swiper-main span{
  top: 0px;
  display: block;
  overflow: hidden;
  border-radius: 5px;
  position: absolute;
  border-radius: 4px;
  transition: all 0.5s;
  display: inline-block;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  .bgblack {
    opacity: 1;
    position: absolute;
    background: #000;
    top: 0; left: 0; right: 0; bottom: 0;
  }
  img {
    display: block;
  }
}
</style>
