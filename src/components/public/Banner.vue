<template>
<div
  class="banner"
  :style="`background: url(${bg}) center no-repeat`">
  <div class="content">
    <div
      class="desc desc1"
      :style="'top:'+descPos[0].top+';left:'+descPos[1].left"
      v-html="text" />
    <div
      class="desc desc2"
      :style="'top:'+descPos[1].top+';left:'+descPos[1].left"
      v-html="desc" />
  </div>
</div>
</template>

<script>
import transition from '@/mixins/transition.js';

export default {
  name: 'Banner',
  mixins: [transition],
  props: ['text', 'desc', 'bg'],
};
</script>

<style lang="less" scoped>
.banner {
  height: 496px;
  position: relative;
  .content {
    height: 100%;
    overflow: hidden;
    position: relative;
    .desc { 
      color: #fff;
      position: absolute;
      transition: all 2s;
      &.desc1 { font-size: 48px; }
      &.desc2 { font-size: 24px; }
    } 
  }
}
</style>
