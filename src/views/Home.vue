<template>
  <div class="home">
    首页
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    test1() {
      this.$notice_success({
        minfo: 'success',
        func: () => {
          // TODO 待定
        },
      });
    },
    test2() {
      this.$notice_error({
        minfo: 'error',
        func: () => {
          // TODO 待定
        },
      });
    },
    test3() {
      this.$notice_confirm({
        minfo: '是否确定 XXX ?',
        func: () => {
          // TODO 待定
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  position: relative;
}
</style>
