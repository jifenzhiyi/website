<template>
  <div class="page">
    <banner
      text="让真正高性价比的好商品<br />走进千家万户"
      desc="———— 临期优选"
      bg="/images/banner2.jpg" />
    <div class="content">
      <div class="center">
        <div class="title">项目介绍</div>
        <div class="text">
          <p class="t1">2021 数字供应链，铸就新商业</p>
          <p>临期优选，打响食品产业革命第一枪，通过数字供应链整合过剩企业资源，解决食品厂商库存压力，促进食品的市场高效流通。用“品牌食品”+“超低特价”切入市场，并通过食品社区OMO的全新零售模式，打造以线下为流量入口，用线上为线下赋能的流量闭环，开创全新的“名品”+“特价”的食品新零售平台。</p>
        </div>
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
  .ad { margin-top: 0px; }
  .text {
    display: flex;
    padding-top: 50px;
    flex-direction: column;
    p {
      color: #999;
      font-size: 16px;
      &.t1 {
        font-size: 22px;
        color: #d83119;
        line-height: 40px;
      }
    }
  }
}
</style>
