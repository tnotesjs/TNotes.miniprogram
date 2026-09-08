/// <reference path="./types/index.d.ts" />

// 历史记录项和语言列表项的接口
interface HistoryItem {
  sourceTxt: string;
  resultTxt: string;
}

interface LanguageItem {
  chs: string;
  lang: string;
  index: number;
}

// 修改 IAppOption 接口
interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
    history: HistoryItem[],
    lanList: LanguageItem[],
    curLan: LanguageItem,
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}