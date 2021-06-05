<template>
  <div class="page">
    <div class="banner">
      <div class="content">
        <div
          class="desc desc1"
          :style="'top:'+descPos[0].top+';left:'+descPos[1].left">让真正高性价比的好商品<br />走进千家万户</div>
        <div
          class="desc desc2"
          :style="'top:'+descPos[1].top+';left:'+descPos[1].left">———— 临期优选</div>
      </div>
    </div>
    <div class="content">
      <div class="center">
        <div class="title">公司介绍</div>
        <div class="desc">
          <p>临期优选，杭州昌盛恒驰供应链科技有限公司，总部位于杭州市滨江区，是一家用数字化技术整合食品行业供应链，以食品品牌特卖切入市场，并融合线上线下的一家食品品牌特价新零售平台。</p><br />
          <p>本着“让真正高性价比的好商品走入千家万户”的使命，临期优选采用F2B2C的模式，促进食品行业的高效率市场流通，帮助食品厂商快速消化库存，并打造市场的绝对价格优势，极质好物，一价到底；通过数字化工具赋能线下零售，颠覆传统经营，开创品牌食品社区OMO的全新零售模式。</p>
        </div>
        <img
          class="ad"
          src="@/assets/images/about.jpg" />
        <div class="line" />
      </div>
    </div>
  </div>
</template>

<script>
import transition from '@/mixins/transition.js';

export default {
  name: 'About',
  mixins: [transition],
};
</script>

<style lang="less" scoped>
.banner {
  height: 400px;
  position: relative;
  background: url(/images/banner1.jpg) center no-repeat;
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
  .desc {
    color: #999;
    font-size: 16px;
    padding-top: 40px;
    p {
      text-indent: 2em;
    }
  }
  .ad { margin-top: 80px; }
  .line { height: 80px; }
}
</style>
