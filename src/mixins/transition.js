export default {
  data() {
    return {
      descPos: [
        { top: '-100%', left: '-500px' },
        { top: '200%', left: '-500px' },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.descPos = [
        { top: '25%', left: 0 },
        { top: '65%', left: 0 },
      ];
    }, 0);
  },
  beforeDestroy() {
    this.descPos = [
      { top: '-100%', left: '-500px' },
      { top: '200%', left: '-500px' },
    ];
  },
};
