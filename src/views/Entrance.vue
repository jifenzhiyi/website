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
              <div :class="['sub', !verify.name && 'warn']">
                <el-input
                  placeholder="必填项"
                  v-model="params.name"
                  @blur="inputChange('name')"></el-input>
              </div>
              <div
                v-show="!verify.name"
                class="error">请输入用户名</div>
            </div>
            <div class="item">
              <span>性 别：</span>
              <div class="sub">
                <el-radio
                  v-model="params.gender"
                  label="1">男</el-radio>
                <el-radio
                  v-model="params.gender"
                  label="2">女</el-radio>
              </div>
            </div>
          </div>
          <div class="one">
            <div class="item">
              <span>所在地区：</span>
              <div :class="['sub', !verify.area && 'warn']">
                <!-- 文档地址：https://github.com/dwqs/vue-area-linkage -->
                <area-select
                  type="text"
                  :data="pca"
                  v-model="area"
                  @change="selectChange"></area-select>
                <!-- 省市区：<area-select v-model="params.area" :data="pcaa"></area-select> -->
              </div>
              <div
                v-show="!verify.area"
                class="error">请选择所在地区</div>
            </div>
          </div>
          <div class="one">
            <div class="item">
              <span>联系电话：</span>
              <div :class="['sub', !verify.mobile && 'warn']">
                <el-input
                  maxLength="11"
                  v-model="params.mobile"
                  placeholder="必填项"
                  @blur="inputChange('mobile')"></el-input></div>
              <div
                v-show="!verify.mobile"
                class="error">{{ mobileError }}</div>
            </div>
            <div class="item">
              <span>微信号码：</span>
              <div :class="['sub', !verify.wechatID && 'warn']">
                <el-input
                  v-model="params.wechatID"
                  placeholder="必填项"
                  @blur="inputChange('wechatID')"></el-input>
              <div
                v-show="!verify.wechatID"
                class="error">请输入微信号码</div>
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
import { isPhoneAvailable } from '@/utils/help.js';
import apply from './api';

export default {
  name: 'Join',
  components: { Banner },
  data() {
    return {
      pca,
      area: [], // 地区
      params: {
        name: '', // 姓名
        gender: '1', // 性别 1 男, 2 女
        province: '', // 省
        city: '', // 市
        mobile: '', // 电话
        wechatID: '', // 微信
      },
      verify: {
        name: true,
        area: true,
        province: true,
        city: true,
        mobile: true,
        wechatID: true,
      },
      mobileError: '请输入联系电话',
    };
  },
  methods: {
    selectChange() {
      this.verify.area = true;
    },
    inputChange(key) {
      if (key === 'mobile') {
        this.verify.mobile = false;
        if (!this.params.mobile) {
          this.mobileError = '请输入联系电话';
          return;
        }
        if (isPhoneAvailable(this.params.mobile)) {
          this.mobileError = '联系电话格式错误';
          return;
        }
        this.verify.mobile = true;
        return;
      }
      this.verify[key] = !!this.params[key];
    },
    async submit() {
      Object.keys(this.params).forEach((item) => {
        this.verify[item] = true;
        if (item !== 'gender') {
          if (item === 'province' || item === 'city') {
            this.verify.area = this.area.length == 2;
          } else {
            !this.params[item] && (this.verify[item] = false);
          }
        }
      });
      if (!this.params.mobile) {
        this.verify.mobile = false;
        this.mobileError = '请输入联系电话';
        return;
      }
      if (isPhoneAvailable(this.params.mobile)) {
        this.verify.mobile = false;
        this.mobileError = '联系电话格式错误';
        return;
      }
      const result = Object.values(this.verify).every((item) => item);
      if (result) {
        this.params.gender = Number(this.params.gender);
        this.params.province = this.area[0];
        this.params.city = this.area[1];
        const res = await apply(this.params);
        if (res.result == 0) {
          this.$notice_success({ minfo: '您已经提交成功' });
        } else {
          this.$notice_error({ minfo: res.message });
        }
      }
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
    position: relative;
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
      position: relative;
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
      .error {
        top: 120%;
        left: 135px;
        color: #e6310e;
        position: absolute;
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
