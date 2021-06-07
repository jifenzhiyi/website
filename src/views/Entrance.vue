<template>
  <div class="page">
    <banner
      text="专业 感恩 协作 共赢"
      desc="———— 临期优选"
      bg="/images/banner2.jpg" />
    <div class="content">
      <div class="center">
        <div class="title">加盟入口</div>
        <div class="form">
          <div class="one">
            <div class="item">
              <span>姓 名：</span>
              <div class="sub">
                <el-input
                  v-model="params.name"
                  placeholder="必填项"></el-input>
              </div>
            </div>
            <div class="item">
              <span>性 别：</span>
              <div class="sub">
                <el-radio
                  v-model="params.sex"
                  label="男">男</el-radio>
                <el-radio
                  v-model="params.sex"
                    label="女">女</el-radio>
              </div>
            </div>
          </div>
          <div class="one">
            <div class="item">
              <span>所在地区：</span>
              <div class="sub">
                <!-- 文档地址：https://github.com/dwqs/vue-area-linkage -->
                <area-select
                  type="all"
                  v-model="params.area"
                  :data="pca"></area-select>
                <!-- 省市区：<area-select v-model="params.area" :data="pcaa"></area-select> -->
              </div>
            </div>
          </div>
          <div class="one">
            <div class="item">
              <span>联系电话：</span>
              <div class="sub">
                <el-input
                  v-model="params.tel"
                  placeholder="必填项"></el-input></div>
            </div>
            <div class="item">
              <span>微信号码：</span>
              <div class="sub">
                <el-input
                  v-model="params.wechat"
                  placeholder="必填项"></el-input>
              </div>
            </div>
          </div>
          <div class="one">
            <a
              class="btn"
              @click="submit">确认提交</a>
          </div>
        </div>
        <div class="title">联系我们</div>
        <div class="info">
          <div class="info_l">
            <p class="t1">杭州昌盛恒驰供应链科技有限公司</p><br />
            <p>地   址：浙江省杭州市滨江区长河街道江晖路2030号云台国际商务中心934室</p>
            <p>邮   箱：lqyx0707360@163.com</p>
            <p>电   话：400-0707-360</p>
          </div>
          <div class="info_r">
            <img src="@/assets/images/join2.jpg" />
          </div>
        </div>
        <div class="line" />
      </div>
    </div>
  </div>
</template>

<script>
import { pca } from 'area-data'; // pcaa
import Banner from 'comps/public/Banner.vue';

export default {
  name: 'Join',
  components: { Banner },
  data() {
    return {
      pca,
      params: {
        name: '', // 姓名
        sex: '男', // 性别
        area: [], // 地区
        tel: '', // 电话
        wechat: '', // 微信
      },
    };
  },
  methods: {
    submit() {
      console.log('params', this.params);
    },
  },
};
</script>

<style lang="less" scoped>
.form {
  width: 1100px;
  display: flex;
  padding: 0 50px;
  margin-top: 50px;
  flex-direction: column;
  .one {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    .btn {
      width: 160px;
      height: 50px;
      color: #fff;
      cursor: pointer;
      font-size: 18px;
      line-height: 50px;
      margin-left: 120px;
      text-align: center;
      background: #e6310e;
    }
    .item {
      height: 50px;
      display: flex;
      margin-right: 50px;
      align-items: center;
      span {
        width: 120px;
        color: #666;
        display: flex;
        font-size: 18px;
        &::after {
          content: ' *';
          color: #e6310e;
        }
      }
    }
  }
}
.info {
  width: 1100px;
  display: flex;
  padding: 0 50px;
  margin-top: 50px;
  justify-content: space-between;
  .info_l {
    color: #000;
    display: flex;
    flex-direction: column;
    .t1 {
      font-size: 20px;
    }
  }
}
</style>
