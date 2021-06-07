<template>
  <div class="page">
    <banner
      text="中国食品新零售<br />千亿市值独角兽企业"
      desc="———— 企业愿景"
      bg="/images/banner2.jpg" />
    <div class="content">
      <div class="list">
        <div
          class="one"
          @click="routeTo(1)">
          <img src="@/assets/images/img1.jpg" />
          <div class="line" />
          <div class="text">
            <h3>临期优选：打造食品品牌特价新零售平台</h3>
            <p>一天净赚3000元、毛利率70%、月成交额上亿、千亿级商机……这些数字，都指向了一个看来不太起眼的市场——临期食品。在中国，一家销售食品饮料的贸易公司，每年大约会产生100万左右的临期品...</p>
          </div>
          <div class="next"></div>
        </div>
        <div
          class="one"
          @click="routeTo(2)">
          <img src="@/assets/images/img2.jpg" />
          <div class="line" />
          <div class="text">
            <h3>2021年万亿食品行业风口一触即发</h3>
            <p>最近，有个直播带货的朋友接了一批食品经销商的临期货，全是大牌产品，法国某云的矿泉水、某宝牛奶......而且都只要几毛钱一件，换算成折扣，居然是原来地产商采购成本价的1.1折。上百万的货在他直播间3秒被洗劫一空...</p>
          </div>
          <div class="next"></div>
        </div>
        <div
          class="one"
          @click="routeTo(3)">
          <img src="@/assets/images/img3.jpg" />
          <div class="line" />
          <div class="text">
            <h3>庸者谋利，能者谋局，智者谋势</h3>
            <p>在疫情和直播电商的双重冲击下，2020年的线下零售只能用一个词形容：满目疮痍。多少商场、超市、夫妻店因为资金链断裂倒下。甚至有人断言：随着疫情改变了消费习惯，线下零售已死...</p>
          </div>
          <div class="next"></div>
        </div>
        <div
          class="one"
          @click="routeTo(4)">
          <img src="@/assets/images/img4.jpg" />
          <div class="line" />
          <div class="text">
            <h3>临期优选的城市布局</h3>
            <p>2020年兴起的临期食品折扣店，正以比想象更快的速度占领食品市场。以供应链管理和品牌为核心竞争力的临期优选，已在全国一二三线城市迅速展开布局。从找寻供应商到城市合伙人，只有“抓住”行业风口的企业，才有重新定义新零售概念的入市资格...</p>
          </div>
          <div class="next"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from 'comps/public/Banner.vue';

export default {
  name: 'News',
  components: { Banner },
  methods: {
    routeTo(id) {
      this.$router.push(`/news/${id}`);
    },
  },
};
</script>

<style lang="less" scoped>
.list {
  width: 100%;
  padding: 160px 0;
  .one {
    width: 1200px;
    height: 180px;
    display: flex;
    cursor: pointer;
    padding-top: 30px;
    position: relative;
    margin-bottom: 10px;
    transition: all 0.3s;
    border-bottom: dotted 2px #ddd;
    &:hover {
      width: 1170px;
      padding-left: 30px;
      background: #eee;
    }
    img {
      height: 149px;
    }
    .line {
      width: 50px;
      height: 149px;
      border-right: solid 1px #ddd;
    }
    .text {
      width: 700px;
      display: flex;
      padding-left: 30px;
      flex-direction: column;
      h3 {
        font-size: 18px;
        font-weight: 400;
        color: #e6310e;
        line-height: 50px;
      }
      p {
        font-size: 16px;
        color: #666666;
        line-height: 28px;
      }
    }
    .next {
      width: 44px;
      height: 149px;
      position: absolute;
      top: 30px; right: 30px;
      background: url(/images/btn.png) center no-repeat;
      background-size: 44px 44px;
    }
  }
}
</style>
