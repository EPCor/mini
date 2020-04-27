App({
  onLaunch(options) {
    console.log('App onLaunch', options);
  },
  onShow(options) {
    console.log('App onShow', options);
  },
  onHide() {
    console.log('App onHide');
  },
  onError(msg) {
    console.log('App onError', msg);
  },
  onUnhandledRejection({ reason, promise }) {
    promise.catch(err => console.log(reason, err));
  },
  onPageNotFound(res) {
    console.error('App onPageNotFound', res);
  },
  globalData: {},
});
