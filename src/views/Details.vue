<template>
  <div class="page">
    <banner
        text="中国食品新零售<br />千亿市值独角兽企业"
        desc="———— 企业愿景" />
    <div class="content">
      <div class="detail">
        <div class="title">{{ title }}</div>
        <div
          class="text"
          v-html="content"></div>
        <div class="list">
          <a :href="prev.to">上一篇：{{ prev.title }}</a>
          <a href="/news">返回列表</a>
          <a :href="next.to">下一篇：{{ next.title }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from 'comps/public/Banner.vue';

export default {
  name: 'Details',
  components: { Banner },
  data() {
    return {
      id: 0,
      details: [
        {
          title: '临期优选：打造食品品牌特价新零售平台',
          content: `<video
            controls="controls"
            poster="/images/v1.jpg"
            src="/video/20210319临期优选_仓库_01.mp4"></video><br /><br /><br />
          <p style="text-indent: 2em;">一天净赚3000元、毛利率70%、月成交额上亿、千亿级商机……这些数字，都指向了一个看来不太起眼的市场——临期食品。</p><br/>
          <p style="text-indent: 2em;">在中国，一家销售食品饮料的贸易公司，每年大约会产生100万左右的临期品，每年至少损失几十万，像这样的公司，中国至少有10万个！随着越来越多临期食品的出现，其市场价值也逐渐被发掘。据统计，2020年中国零食行业市场规模达到了惊人的3万亿元。从供给侧来看，每年都将有大量的产品流入到临期食品行业，即使按1%的库存沉淀计算，临期食品也将成为“千亿市场”，市场需求和市场潜力显而易见。因此，食品行业需要一场革命，社会更需要一个解决供需方矛盾及行业生态健康发展的“数字化专业化供应链平台”！</p>
          <br /><br /><br /><img src="/images/v2.jpg" /><br /><br /><br />
          <p style="text-indent: 2em;">杭州昌盛恒驰供应链科技有限公司（以下简称“临期优选”）本着“让真正高性价比的好商品走入千家万户”的使命，砥砺前行。</p><br />
          <p style="text-indent: 2em;">临期优选，打造新零售平台</p>
          <p style="text-indent: 2em;">自从2015年启动办公室食品智能柜项目以后，项目组一直在不懈奋斗，并在2020年成立临期优选，倾力打造下一个食品行业独角兽企业。</p>
          <br /><br /><br />
          <video
            controls="controls"
            poster="/images/v3.jpg"
            src="/video/20210319临期优选_宣传_02.mp4"></video>
          <br /><br /><br /><img src="/images/v4.jpg" /><br /><br /><br />`,
        },
        { title: '2021年万亿食品行业风口一触即发', content: '<img src="/images/text2.jpg" />' },
        { title: '庸者谋利，能者谋局，智者谋势', content: '<img src="/images/text3.jpg" />' },
        { title: '临期优选的城市布局', content: '<img src="/images/text4.jpg" />' },
      ],
      title: '',
      content: '',
      prev: { title: 'XXXXXX', to: '0' },
      next: { title: 'XXXXXX', to: '0' },
    };
  },
  created() {
    this.id = this.$route.params.id;
    const index = Number(this.id) - 1;
    this.title = this.details[index].title;
    this.content = this.details[index].content;
    if (this.id == 1) {
      this.prev.title = '临期优选的城市布局';
      this.prev.to = '/news/4';
      this.next.title = '2021年万亿食品行业风口一触即发';
      this.next.to = '/news/2';
    } else if (this.id == 4) {
      this.prev.title = '庸者谋利，能者谋局，智者谋势';
      this.prev.to = '/news/3';
      this.next.title = '临期优选：打造食品品牌特价新零售平台';
      this.next.to = '/news/1';
    } else {
      this.prev.title = this.details[index - 1].title;
      this.prev.to = `/news/${index}`;
      this.next.title = this.details[index + 1].title;
      this.next.to = `/news/${index + 2}`;
    }
  },
};
</script>

<style lang="less" scoped>
.detail {
  width: 100%;
  display: flex;
  padding: 100px 0;
  align-items: center;
  flex-direction: column;
  .title {
    color: #333;
    font-size: 20px;
  }
  .text {
    color: #666;
    padding-top: 80px;
    border-bottom: dashed 2px #eee;
    video {
      width: 100%;
      height: 675px;
      overflow: hidden;
    }
  }
  .list {
    width: 100%;
    display: flex;
    margin: 50px auto;
    justify-content: space-between;
    a {
      width: 380px;
      height: 40px;
      color: #666;
      cursor: pointer;
      line-height: 40px;
      text-align: center;
      border: solid 1px #ccc;
    }
  }
}
</style>
