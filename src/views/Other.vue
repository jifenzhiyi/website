<template>
  <div class="page">
    <div class="banner1"></div>
    <div class="banner2body">
      <div
        ref="ban"
        class="banner2">
        <div class="title">千城万店</div>
      </div>
    </div>
    <h3>MORE</h3>
    <div class="banner3">
      <div class="sub sub1">
        <img
          class="img1"
          src="/images/ob1.jpg" />
        <img
          class="img2"
          src="/images/ob2.jpg"  />
      </div>
      <div class="sub sub2">
        <img
          class="img1"
          src="/images/ob1.jpg" />
        <img
          class="img2"
          src="/images/ob2.jpg"  />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Other',
  data() {
    return {
      tempInterval: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      const mainDom = document.getElementById('main');
      mainDom.addEventListener('scroll', this.bodyScroll);
    });
  },
  methods: {
    bodyScroll(e) {
      const mainDom = document.getElementById('main');
      if (e.target.scrollTop > 1300) {
        this.$refs.ban.classList.add('ops');
        mainDom.removeEventListener('scroll', this.bodyScroll);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.page {
  display: flex;
  padding-top: 1040px;
  min-height: 1000px;
  position: relative;
  flex-direction: column;
  background: url(/images/banner_other.jpg) top center no-repeat;
  background-size: 100% auto;
  .banner1 {
    width: 1414px;
    height: 614px;
    margin: 0 auto;
    cursor: pointer;
    background: #fff;
    position: relative;
    transition: all 1s;
    border-radius: 10px;
    box-shadow: 5px 5px 5px #ddd;
    background: url(/images/other1.jpg) center no-repeat;
    &:hover {
      transition: all 1s;
      background: url(/images/other2.jpg) center no-repeat;
    }
    &::before {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: ' ';
      position: absolute;
      border-radius: 10px;
      box-shadow: -5px 5px 5px #ddd;
    }
  }
  .banner2body {
    width: 1420px;
    height: 1253px;
    margin: 0 auto;
    padding-top: 100px;
    .banner2 {
      height: 0;
      opacity: 0;
      width: 1420px;
      margin: 0 auto;
      transition: all 5s;
      background: url(/images/other2.png) bottom center no-repeat;
      &.ops { opacity: 1; height: 1253px; }
      .title {
        color: #333;
        font-size: 30px;
        font-weight: 400;
        padding-top: 80px;
        position: relative;
        text-align: center;
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
    }
  }
  h3 {
    width: 100%;
    font-size: 30px;
    font-weight: 400;
    text-align: center;
    line-height: 180px;
  }
  .banner3 {
    width: 100%;
    height: 290px;
    overflow: hidden;
    position: relative;
    background: #ccc;
    margin-bottom: 50px;
    .sub {
      width: 3840px;
      height: 290px;
      display: flex;
      top: 0; left: 0;
      position: absolute;
      &.sub1 {
        transform: translateX(0%);
        animation: scrols 15s infinite linear;
      }
      &.sub2 {
        transform: translateX(100%);
        animation: scrols2 15s infinite linear;
      }
      .img1 { width: 1920px; }
      .img2 { width: 1920px; }
    }
    @keyframes scrols {
      from {
          transform: translateX(0%);
      }
      to {
         transform: translateX(-100%);
      }
    }
    @keyframes  scrols2 {
      from {
          transform: translateX(100%);
      }
      to {
         transform: translateX(0);
      }
    }
  }
}
</style>
