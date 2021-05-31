<template>
  <div
    v-show="isShow"
    class="base-pop">
    <div class="middle messageBox">
      <img
        class="ico"
        :src="require(`@/assets/pop/${mtype}.png`)" />
      <div class="info ellipsis3">{{ minfo }}</div>
      <div :class="['btn', mtype === 'confirm' && 'confirm']">
        <a-button
          :type="mtype !== 'success' ? 'danger' : ''"
          @click="submit">确定</a-button>
        <a-button
          v-if="mtype === 'confirm'"
          @click="hide">取消</a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageBox',
  props: ['mtype', 'minfo', 'duration', 'func'],
  data() {
    return {
      isShow: false,
      interval: null,
    };
  },
  methods: {
    show() {
      this.isShow = true;
      this.duration && (this.interval = setTimeout(this.hide, this.duration));
    },
    hide() {
      this.isShow = false;
      this.interval && clearTimeout(this.interval);
      this.remove();
    },
    submit() {
      this.func ? this.func().then(() => this.hide()) : this.hide();
    },
  },
};
</script>

<style lang="less" scoped>
.messageBox {
  width: 312px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  border: solid 1px #e8edfa;
  box-shadow: 0 0 5px 0 rgba(231, 237, 249, 0.75);
  .ico {
    width: 108px;
    height: 108px;
    margin-top: 35px;
  }
  .info {
    width: 90%;
    color: #666;
    font-size: 16px;
    margin: 27px 5% 0;
    text-align: center;
  }
  .btn {
    width: 60%;
    display: flex;
    margin: 25px auto;
    align-items: center;
    justify-content: space-around;
  }
}
</style>
