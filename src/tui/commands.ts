import type { TuiCommand, TuiPluginApi } from "@opencode-ai/plugin/tui"
import type { ZhLocale } from "../config.js"
import { t } from "../locale/strings.js"

const KV_LOCALE = "opencode-zh-plugin:locale"
const KV_ENABLED = "opencode-zh-plugin:enabled"

export function buildCommands(
  api: TuiPluginApi,
  initialLocale: ZhLocale,
): TuiCommand[] {
  const toast = api.ui.toast

  return [
    {
      title: t(initialLocale, "cmd_zh_on"),
      value: "zh-on",
      description: "启用中文模式（AI 回复 + TUI 界面）",
      category: "Language",
      slash: { name: "zh", aliases: ["chinese"] },
      onSelect: () => {
        api.kv.set(KV_ENABLED, true)
        toast({ variant: "success", message: t(initialLocale, "toast_zh_on") })
      },
    },
    {
      title: t(initialLocale, "cmd_zh_off"),
      value: "zh-off",
      description: "关闭中文模式",
      category: "Language",
      slash: { name: "zh-off", aliases: ["chinese-off"] },
      onSelect: () => {
        api.kv.set(KV_ENABLED, false)
        toast({ variant: "info", message: t(initialLocale, "toast_zh_off") })
      },
    },
    {
      title: t(initialLocale, "cmd_zh_cn"),
      value: "zh-cn",
      description: "切换到简体中文",
      category: "Language",
      slash: { name: "zh-cn", aliases: ["chinese-cn"] },
      onSelect: () => {
        api.kv.set(KV_LOCALE, "zh-CN")
        toast({ variant: "success", message: t(initialLocale, "toast_zh_cn") })
      },
    },
    {
      title: t(initialLocale, "cmd_zh_tw"),
      value: "zh-tw",
      description: "切换到繁體中文",
      category: "Language",
      slash: { name: "zh-tw", aliases: ["chinese-tw"] },
      onSelect: () => {
        api.kv.set(KV_LOCALE, "zh-TW")
        toast({ variant: "success", message: t(initialLocale, "toast_zh_tw") })
      },
    },
    {
      title: t(initialLocale, "cmd_zh_status"),
      value: "zh-status",
      description: "查看当前语言设置",
      category: "Language",
      slash: { name: "zh-status", aliases: ["chinese-status"] },
      onSelect: () => {
        const enabled = api.kv.get<boolean>(KV_ENABLED, true)
        const loc = api.kv.get<ZhLocale>(KV_LOCALE, initialLocale)
        const status = enabled ? "已启用" : "已关闭"
        const label = loc === "zh-TW" ? "繁體中文" : "简体中文"
        toast({
          variant: "info",
          title: "语言设置",
          message: `中文模式：${status} · 当前语言：${label}`,
        })
      },
    },
  ]
}
