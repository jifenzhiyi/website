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
      <el-carousel-item
        v-for="item in 3"
        :key="item"
        :class="'bg'+item">
        <!-- <h3 class="medium">{{ item }}</h3> -->
        <canvas
          id="cas"
          v-show="item === 2" />
      </el-carousel-item>
    </el-carousel>
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
    window.addEventListener('mousewheel', this.debounce(this.handleScroll1, 300), true) 
      || window.addEventListener('DOMMouseScroll', this.debounce(this.handleScroll2, 300), false);
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
      e.wheelDelta > 0
        ? this.indexNow > 0 && (this.indexNow -= 1)
        : this.indexNow < 2 && (this.indexNow += 1);
      window.carousel.setActiveItem(this.indexNow);
      this.init();
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
      const extendDis = 5; // 可超出的画布边界
      let lineDis = 100; // 连线距离
      lineDis *= lineDis;

      const warea = { x: null, y: null };
      const dots = [];
      for (let i = 0; i < 150; i++) {
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
    background-size: auto 100%;
  }
  .bg3 {
    background: url(/images/bg2.jpg) center no-repeat;
    background-size: auto 100%;
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
</style>
