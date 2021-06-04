<template>
  <div
    id="homePage"
    class="page">
    <el-carousel
      ref="carousel"
      direction="vertical"
      indicator-position="none"
      :height="height"
      :autoplay="false">
      <el-carousel-item class="bg1">
        <img
          src="/images/text.png"
          class="text" />
      </el-carousel-item>
      <el-carousel-item class="bg2">
        <canvas id="cas" />
        <div class="item2">
          <h3>部分合作品牌<span>SOME COOPERATIVE BRANDS</span></h3>
          <img
            src="@/assets/images/itembg.png"
            class="itembg" />
        </div>
      </el-carousel-item>
      <el-carousel-item class="bg3">
        <div class="item2">
          <h3>联系我们<span>您可以通过以下方式与我们取得联系，感谢您的关注。</span></h3>
          <div class="center">
            <a class="one btn1"></a>
            <a class="one btn2"></a>
            <a class="one btn3"></a>
            <a class="one btn4"></a>
          </div>
          <div class="bottom">
            <span>@ 2021 杭州昌盛恒驰供应链科技有限公司</span>
            <span>备案号：[浙123456789]</span>
            <span>技术支持：浙江杭州</span></div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="left">
      <div
        v-for="item in 3"
        :key="item"
        :class="['one', indexNow === item - 1 && 'now']">
        <span class="line" />
        <span v-show="indexNow === item - 1">{{ itemList[indexNow] }}</span>
      </div>
    </div>
    <div class="right">
      <div
        v-for="item in 3"
        :key="item"
        :class="['one', indexNow === item - 1 && 'now']" ></div>
      <div class="num">0{{ indexNow + 1 }}<span>/03</span></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-continue */
export default {
  name: 'Home',
  data() {
    return {
      indexNow: 0,
      height: null,
      itemList: ['临期优选', '部分合作品牌', '联系我们'],
    };
  },
  mounted() {
    const homePage = document.getElementById('homePage');
    this.height = `${homePage.clientHeight}px`;
    const canvas = document.getElementById('cas');
    window.addEventListener('resize', () => {
      this.height = `${homePage.clientHeight}px`;
      canvas.width = homePage.clientWidth;
      canvas.height = homePage.clientHeight;
    });
    window.carousel = this.$refs.carousel;
    window.addEventListener('mousewheel', this.debounce(this.handleScroll1, 200), true) 
      || window.addEventListener('DOMMouseScroll', this.debounce(this.handleScroll2, 200), false);
    this.init();
  },
  methods: {
    debounce(func, wait) {
      let timeout;
      // eslint-disable-next-line func-names
      return function () {
        const context = this;
        // eslint-disable-next-line prefer-rest-params
        const args = arguments;
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
          func.apply(context, args);
        }, wait);
      };
    },
    handleScroll1(e) {
      e.wheelDelta > 0 || e.deltaY < 0
        ? this.indexNow > 0 && (this.indexNow -= 1)
        : this.indexNow < 2 && (this.indexNow += 1);
      window.carousel.setActiveItem(this.indexNow);
    },
    handleScroll2(e) {
      e.detail < 0
        ? this.indexNow > 0 && (this.indexNow -= 1)
        : this.indexNow < 2 && (this.indexNow += 1);
      window.carousel.setActiveItem(this.indexNow);
    },
    init() {
      const canvas = document.getElementById('cas');
      const homePage = document.getElementById('homePage');
      canvas.width = homePage.clientWidth;
      canvas.height = homePage.clientHeight;
      const ctx = canvas.getContext('2d');
      const rgb = '255'; // 线条颜色值
      const extendDis = -100; // 可超出的画布边界
      let lineDis = 100; // 连线距离
      lineDis *= lineDis;
      const warea = { x: null, y: null };
      const dots = [];
      for (let i = 0; i < 200; i++) {
        const x = Math.random() * (canvas.width + 2 * extendDis) - extendDis;
        const y = Math.random() * (canvas.height + 2 * extendDis) - extendDis;
        const xa = (Math.random() * 2 - 1) / 1.5;
        const ya = (Math.random() * 2 - 1) / 1.5;
        dots.push({
          x, y, xa, ya,
        });
      }
      function move(dot) {
        dot.x += dot.xa;
        dot.y += dot.ya;
        // 遇到边界将加速度反向
        dot.xa *= (dot.x > (canvas.width + extendDis) || dot.x < -extendDis) ? -1 : 1;
        dot.ya *= (dot.y > (canvas.height + extendDis) || dot.y < -extendDis) ? -1 : 1;
        // 绘制点
        ctx.fillStyle = `rgba(${rgb}, ${rgb}, ${rgb}, 1`;
        ctx.fillRect(dot.x - 0.5, dot.y - 0.5, 1, 1);
      }
      function bubDrawLine(ndots) {
        let ndot;
        dots.forEach((dot) => {
          move(dot);
          // 循环比对粒子间的距离
          for (let i = 0; i < ndots.length; i++) {
            ndot = ndots[i];
            if (dot === ndot || ndot.x === null || ndot.y === null) {
              continue;
            }
            const xc = dot.x - ndot.x;
            const yc = dot.y - ndot.y;
            // 如果x轴距离或y轴距离大于max,则不计算粒子距离
            if (xc > ndot.max || yc > lineDis) continue;
            // 两个粒子之间的距离
            const dis = xc * xc + yc * yc;
            // 如果粒子距离超过max,则不做处理
            if (dis > lineDis) continue;
            // 如果是鼠标，则让粒子向鼠标的位置移动
            if (ndot === warea && dis < 20000) {
              dot.x -= xc * 0.01;
              dot.y -= yc * 0.01;
            }
            // 计算距离比
            const ratio = (lineDis - dis) / lineDis;
            // 粒子间连线
            ctx.beginPath();
            ctx.lineWidth = ratio / 2;
            ctx.strokeStyle = `rgba(${rgb}, ${rgb}, ${rgb}, 1`;
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(ndot.x, ndot.y);
            ctx.stroke();
          }
          // 将已经计算过的粒子从数组中删除
          ndots.splice(ndots.indexOf(dot), 1);
        });
      }
      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        bubDrawLine([warea].concat(dots));
        window.requestAnimationFrame(animate);
      }
      setTimeout(() => {
        animate();
      }, 100);
    },
  },
};
</script>

<style lang="less" scoped>
.page {
  height: 100%;
  .bg1 {
    background: url(/images/bg1.jpg) center no-repeat;
    background-size: 100% 100%;
    .text {
      top: 10%;
      left: 10%;
      position: absolute;
    }
  }
  .bg3 {
    background: url(/images/bg2.jpg) center no-repeat;
    background-size: 100% 100%;
  }
  .left {
    left: 0;
    top: 50%;
    z-index: 2;
    display: flex;
    position: absolute;
    flex-direction: column;
    .one {
      height: 30px;
      color: #fff;
      display: flex;
      align-items: center;
      .line {
        width: 30px;
        opacity: 0.7;
        margin-left: 10px;
        margin-right: 10px;
        border-bottom: solid 1px #fff;
      }
      &.now .line {
        opacity: 1;
        width: 40px;
        margin-left: 0;
      }
    }
  }
  .right {
    top: 50%;
    z-index: 2;
    right: 50px;
    display: flex;
    position: absolute;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    .num {
      color: #fff;
      font-size: 20px;
      span { font-size: 16px; }
    }
    .one {
      width: 20px;
      height: 20px;
      margin-bottom: 10px;
      background: url(/images/p2.png) center no-repeat;
      &.now {
        background: url(/images/p1.png) center no-repeat;
      }
    }
  }
}
#cas {
  z-index: 0;
  width: 100%;
  height: 100%;
  top: 0; left: 0;
  position: absolute;
  background: #9d9d9d;
}
.item2 {
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0; left: 0;
  position: absolute;
  h3 {
    top: 10%;
    left: 50%;
    display: flex;
    color: #fff;
    font-size: 30px;
    font-weight: 400;
    position: absolute;
    align-items: center;
    flex-direction: column;
    transform: translate(-50%, -50%);
    span {
      font-size: 14px;
      padding-top: 4px;
    }
  }
  .itembg {
    top: 50%;
    left: 50%;
    width: 1100px;
    position: absolute;
    transform: translate(-50%, -50%);
  }
  .center {
    top: 50%;
    left: 50%;
    width: 80%;
    display: flex;
    position: absolute;
    justify-content: space-between;
    transform: translate(-50%, -50%);
    .one {
      width: 278px;
      height: 380px;
      cursor: pointer;
      &.btn1 { background: url(/images/btn1.png) center no-repeat; }
      &.btn1:hover { background: url(/images/btn1a.png) center no-repeat; }
      &.btn2 { background: url(/images/btn2.png) center no-repeat; }
      &.btn2:hover { background: url(/images/btn2a.png) center no-repeat; }
      &.btn3 { background: url(/images/btn4.png) center no-repeat; }
      &.btn3:hover { background: url(/images/btn4a.png) center no-repeat; }
      &.btn4 { background: url(/images/btn3.png) center no-repeat; }
      &.btn4:hover { background: url(/images/btn3a.png) center no-repeat; }
    }
  }
  .bottom {
    left: 50%;
    bottom: 5%;
    opacity: 0.6;
    display: flex;
    color: #fff;
    position: absolute;
    transform: translate(-50%, -50%);
  }
}
</style>
