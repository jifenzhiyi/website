<template>
  <header>
    <div class="content">
      <img
        class="logo"
        src="@/assets/images/logo.png" />
      <nav>
        <router-link to="/home"><span class="box-sizing">首页</span></router-link>
        <router-link to="/about"><span class="box-sizing">关于我们</span></router-link>
        <router-link to="/news"><span class="box-sizing">新闻动态</span></router-link>
        <router-link to="/other"><span class="box-sizing">每特惠</span></router-link>
        <a><span class="box-sizing">合伙入驻</span></a>
      </nav>
      <div class="tel"><img src="@/assets/images/ico1.png">400-0707-360</div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="less" scoped>
header {
  width: 100%;
  height: 80px;
  display: flex;
  background: #fff;
  align-items: center;
  justify-content: center;
  .content {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      height: 36px;
    }
    .tel {
      display: flex;
      color: #d83119;
      align-items: center;
      img { margin-right: 5px; }
    }
    nav {
      height: 80px;
      display: flex;
      color: #363636;
      a {
        width: 100px;
        display: flex;
        font-size: 16px;
        cursor: pointer;
        color: #363636;
        align-items: center;
        justify-content: center;
        span {
          height: 100%;
          display: flex;
          font-weight: 600;
          align-items: center;
          justify-content: center;
          border-bottom: solid 2px #fff;
        }
        &.router-link-active {
          color: #d83119;
          span {
            border-bottom: solid 2px #d83119;
          }
        }
      }
    }
  }
}
</style>
