import type { TuiSlotPlugin } from "@opencode-ai/plugin/tui"
import type { ZhLocale } from "../config.js"
import { t } from "../locale/strings.js"

export function buildSlotPlugin(locale: ZhLocale): TuiSlotPlugin {
  return {
    order: 100,
    slots: {
      home_logo: (ctx) => {
        const c = ctx.theme.current
        return (
          <box flexDirection="column" alignItems="center" padding={1}>
            <text fg={c.primary} content={t(locale, "welcome")} />
            <text fg={c.textMuted} content={t(locale, "subtitle")} />
            <text fg={c.textMuted} content={t(locale, "powered_by")} />
          </box>
        )
      },
      home_footer: (ctx) => {
        const c = ctx.theme.current
        return (
          <box flexDirection="row" justifyContent="center" width="100%">
            <text fg={c.textMuted} content={t(locale, "help_hint")} />
          </box>
        )
      },
      home_bottom: (ctx) => {
        const c = ctx.theme.current
        return (
          <box flexDirection="row" justifyContent="center" width="100%">
            <text fg={c.accent} content={t(locale, "tip_welcome")} />
          </box>
        )
      },
      sidebar_title: (ctx) => {
        const c = ctx.theme.current
        return (
          <text fg={c.primary} content={t(locale, "session_title")} />
        )
      },
    },
  }
}
