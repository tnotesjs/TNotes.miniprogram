// pages/history/history.ts
const historyApp = getApp();

Page({
  data: {
    historyList: historyApp.globalData.history
  },
  onShow() {
    this.setData({
      historyList: historyApp.globalData.history
    })
  },
  // 清除历史记录
  clearHistory() {
    // 清 history 页面
    this.setData({
      historyList: ""
    });
    // 清全局
    historyApp.globalData.history = [];
    // 清缓存
    wx.removeStorage({
      key: 'histroy',
      success() {
        console.log("本地缓存已清除")
      }
    })
  }
})