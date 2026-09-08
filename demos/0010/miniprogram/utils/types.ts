interface TranslateResult {
  /** 原文 */
  src: string;

  /** 译文 */
  dst: string;
}

export interface BaiduTranslateResponse {
  /** 源语言 */
  from: string;

  /** 目标语言 */
  to: string;

  /** 翻译结果数组 */
  trans_result: TranslateResult[];

  /** 错误码，可选字段，仅在出错时存在 */
  error_code?: number;

  /** 错误信息，可选字段，仅在出错时存在 */
  error_msg?: string;
}