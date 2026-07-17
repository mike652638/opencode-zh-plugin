export type ZhLocale = "zh-CN" | "zh-TW"

export interface ZhPluginOptions {
  enabled: boolean
  locale: ZhLocale
  systemPrompt: boolean
  tuiSlots: boolean
  commands: boolean
}

export const DEFAULT_OPTIONS: ZhPluginOptions = {
  enabled: true,
  locale: "zh-CN",
  systemPrompt: true,
  tuiSlots: true,
  commands: true,
}

export function resolveOptions(raw: Record<string, unknown> | undefined): ZhPluginOptions {
  if (!raw) return { ...DEFAULT_OPTIONS }
  return {
    enabled: raw["enabled"] !== false,
    locale: raw["locale"] === "zh-TW" ? "zh-TW" : "zh-CN",
    systemPrompt: raw["systemPrompt"] !== false,
    tuiSlots: raw["tuiSlots"] !== false,
    commands: raw["commands"] !== false,
  }
}
