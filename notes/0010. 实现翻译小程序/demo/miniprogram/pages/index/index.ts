// index.ts
import { translateText } from "../../utils/util";

const app = getApp()

Page({
  data: {
    query: "", // 用户输入的要翻译的文本
    content: "", // 翻译的结果
    curLanTxt: app.globalData.curLan.chs
  },
  // 跳转到选择语言
  goToChange() {
    wx.navigateTo({
      url: '/pages/change/change',
    })
  },
  // 翻译
  tanslateHandler() {
    translateText(this.data.query, "auto", app.globalData.curLan.lang)
      .then(txt => {
        this.setData({
          content: txt
        });
        app.globalData.history.unshift({
          sourceTxt: this.data.query,
          resultTxt: txt
        });
        wx.setStorage({
          key: 'history',
          data: app.globalData.history
        })
      }).catch((err: { status: string; msg: string }) => {
        wx.showToast({
          title: err.msg,
          icon: 'error',
          duration: 2000
        })
      })
  },
  onShow() {
    this.setData({
      curLanTxt: app.globalData.curLan.chs
    })
  },
})