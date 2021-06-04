<template>
  <footer>
    <nav>
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于我们</router-link>
      <router-link to="/news">新闻动态</router-link>
      <router-link to="/other">每特惠</router-link>
      <router-link to="/join">合伙入驻</router-link>
    </nav>
    <img
      class="logo2"
      src="@/assets/images/logo2.png" />
    <p class="tel">电话：400-0707-360</p>
    <p class="address">地址：浙江省杭州市滨江区杭州印B座9楼</p>
    <div class="copy">Copyright@2021,杭州昌盛恒驰供应链科技有限公司,保留版权所有 浙ICP备0121234567897号 技术支持：浙江杭州</div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="less" scoped>
footer {
  width: 100%;
  height: 330px;
  display: flex;
  position: relative;
  align-items: center;
  background: #434343;
  flex-direction: column;
  // justify-content: center;
  nav {
    height: 100px;
    display: flex;
    align-items: center;
    a {
      color: #fff;
      cursor: pointer;
      padding: 0 10px;
    }
  }
  .logo2 { width: 220px; margin-bottom: 30px; }
  p {
    color: #999;
    font-size: 14px;
    line-height: 30px;
  }
  .copy {
    width: 100%;
    color: #999;
    font-size: 14px;
    text-align: center;
    position: absolute;
    left: 0; bottom: 20px;
  }
}
</style>
