// pages/change/change.ts
const changeApp = getApp()

Page({
  data: {
    lanList: changeApp.globalData.lanList,
    curLanIndex: changeApp.globalData.curLan.index
  },
  selectHandle(options: WechatMiniprogram.TouchEvent) {
    const index = options.currentTarget.dataset.id
    for (let i = 0; i < changeApp.globalData.lanList.length; i++) {
      if (changeApp.globalData.lanList[i].index === index) {
        changeApp.globalData.curLan = changeApp.globalData.lanList[i]
        this.setData({
          curLanIndex: changeApp.globalData.curLan.index
        })
      }
    }
  }
})