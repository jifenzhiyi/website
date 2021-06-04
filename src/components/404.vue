<template>
  <div class="middle error">
    <img src="@/assets/401.gif" />
    <p>{{ title }}</p>
    <div class="btn">
      <a @click="back">返回首页 🔙</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'error',
  data() {
    return {
      title: '抱歉，该页面不存在。',
    };
  },
  methods: {
    back() {
      this.$router.push('/');
    },
  },
};
</script>

<style lang="less" scoped>
.error {
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  p {
    font-size: 24px;
    padding-top: 20px;
  }
  .btn {
    width: 300px;
    display: flex;
    margin-top: 30px;
    justify-content: center;
    a {
      color: #333;
      cursor: pointer;
      padding: 0 20px;
      font-size: 20px;
      border-radius: 3px;
      border: solid 1px #f00;
    }
  }
}
</style>
