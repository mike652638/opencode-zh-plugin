import type { ZhLocale } from "../config.js"

export type StringMap = Record<string, string>

const zhCN: StringMap = {
  welcome: "OpenCode 中文增强",
  subtitle: "AI 编程助手 · 中文模式已启用",
  help_hint: "按 ? 查看帮助",
  new_session: "开始新会话",
  resume_session: "恢复会话",
  settings: "设置",
  session_title: "会话",
  session_empty: "暂无活跃会话",
  sidebar_footer: "OpenCode 中文增强",
  tip_welcome: "提示：输入 /zh 可切换中文模式",
  cmd_zh_on: "启用中文模式",
  cmd_zh_off: "关闭中文模式",
  cmd_zh_cn: "切换到简体中文",
  cmd_zh_tw: "切换到繁體中文",
  cmd_zh_status: "查看当前语言设置",
  toast_zh_on: "中文模式已启用",
  toast_zh_off: "中文模式已关闭",
  toast_zh_cn: "已切换到简体中文",
  toast_zh_tw: "已切換到繁體中文",
  locale_label: "简体中文",
  powered_by: "由 opencode-zh 驱动",
}

const zhTW: StringMap = {
  welcome: "OpenCode 中文增強",
  subtitle: "AI 程式助手 · 中文模式已啟用",
  help_hint: "按 ? 查看說明",
  new_session: "開始新會話",
  resume_session: "恢復會話",
  settings: "設定",
  session_title: "會話",
  session_empty: "暫無活躍會話",
  sidebar_footer: "OpenCode 中文增強",
  tip_welcome: "提示：輸入 /zh 可切換中文模式",
  cmd_zh_on: "啟用中文模式",
  cmd_zh_off: "關閉中文模式",
  cmd_zh_cn: "切換到簡體中文",
  cmd_zh_tw: "切換到繁體中文",
  cmd_zh_status: "查看當前語言設定",
  toast_zh_on: "中文模式已啟用",
  toast_zh_off: "中文模式已關閉",
  toast_zh_cn: "已切換到簡體中文",
  toast_zh_tw: "已切換到繁體中文",
  locale_label: "繁體中文",
  powered_by: "由 opencode-zh 驅動",
}

const maps: Record<ZhLocale, StringMap> = { "zh-CN": zhCN, "zh-TW": zhTW }

export function t(locale: ZhLocale, key: string): string {
  return maps[locale]?.[key] ?? zhCN[key] ?? key
}

export function getMap(locale: ZhLocale): StringMap {
  return maps[locale] ?? zhCN
}
