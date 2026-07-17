import type { TuiPlugin, TuiPluginModule } from "@opencode-ai/plugin/tui"
import { resolveOptions } from "./config.js"
import { buildSlotPlugin } from "./tui/slots.js"
import { buildCommands } from "./tui/commands.js"

const tui: TuiPlugin = async (api, options) => {
  const opts = resolveOptions(options)
  if (!opts.enabled) return

  if (opts.tuiSlots) {
    api.slots.register(buildSlotPlugin(opts.locale))
  }

  let unregisterCommands: (() => void) | undefined
  if (opts.commands && api.command) {
    const cmds = buildCommands(api, opts.locale)
    unregisterCommands = api.command.register(() => cmds)
  }

  api.lifecycle.onDispose(() => {
    unregisterCommands?.()
  })
}

const mod: TuiPluginModule = { id: "opencode-zh-plugin", tui }

export default mod
export { tui }
