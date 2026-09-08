// index.ts
Page({
  data: {
    loadUsingIf: false,  // 控制 wx:if 的初始状态
    hideUsingHidden: true  // 控制 hidden 的初始状态
  },

  // 切换 wx:if 控制的组件显示状态
  toggleIf() {
    this.setData({
      loadUsingIf: !this.data.loadUsingIf
    });
  },

  // 切换 hidden 控制的组件显示状态
  toggleHidden() {
    this.setData({
      hideUsingHidden: !this.data.hideUsingHidden
    });
  }
});