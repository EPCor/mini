Page({
  data: {
    text: 'Mini Program Engineering Configuration',
  },
  onLoad(options) {
    console.log('Index onLoad', options);
  },
  onShow() {
    console.log('Index onShow');
  },
  onReady() {
    console.log('Index onReady');
  },
  onHide() {
    console.log('Index onHide');
  },
  onUnload() {
    console.log('Index onUnload');
  },
  onPullDownRefresh() {
    console.log('Index onPullDownRefresh');
  },
  onReachBottom() {
    console.log('Index onReachBottom');
  },
  onShareAppMessage(res) {
    console.log('Index onShareAppMessage', res);

    return {
      title: '自定义转发标题',
      path: '/page/index/index?id=123',
    };
  },
  onPageScroll({ scrollTop }) {
    console.log('Index onPageScroll', scrollTop);
  },
  onResize(res) {
    console.log('Index onResize', res);
  },
  onTabItemTap(res) {
    console.log('Index onTabItemTap', res);
  },
});
