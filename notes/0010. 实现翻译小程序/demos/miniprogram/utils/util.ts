import { BaiduTranslateResponse } from "./types";

const CryptoJS = require('crypto-js')
const URL = 'https://fanyi-api.baidu.com/api/trans/vip/translate' // 翻译的服务接口
const APP_ID = '20240601002067469'
const KEY = 'oNoQAqfnvLKRMFAD5GPe'

/**
 * 翻译文本
 * 
 * 使用百度翻译API对文本进行翻译。该函数构造请求并处理响应，返回译文或错误信息。
 * 
 * @param q 请求翻译的文本，UTF-8 编码。
 * @param from 翻译源语言，可设置为 'auto' 表示自动检测源语言。
 * @param to 目标语言，不可设置为 'auto'，必须指定具体的目标语言代码。
 * @returns 返回一个 Promise 对象。如果翻译成功，Promise 将解析为翻译后的文本（string）；如果出现错误，将拒绝并返回一个错误对象，包含状态和消息。
 */
export function translateText(q: string, from: string = 'auto', to: string = 'en'): Promise<string> {
  return new Promise((resolve, reject) => {
    const salt = Date.now(); // 使用当前时间戳作为随机数

    // 按照百度翻译 API 要求拼接字符串
    const strToBeSigned = APP_ID + q + salt + KEY;
    const sign = CryptoJS.MD5(strToBeSigned).toString(CryptoJS.enc.Hex);

    wx.request({
      url: URL,
      method: 'GET',
      data: {
        q,
        from,
        to,
        appid: APP_ID,
        salt,
        sign
      },
      success: (res) => {
        const data = res.data as BaiduTranslateResponse
        if (data.error_code) {
          console.error('翻译错误:', data.error_msg);
          reject({
            status: 'error',
            msg: data.error_msg
          })
        } else if (data.trans_result) {
          resolve(data.trans_result[0].dst)
        }
      },
      fail: (err) => {
        console.error('网络异常:', err)
        reject({
          status: 'error',
          msg: '网络异常'
        })
      }
    });
  })
}