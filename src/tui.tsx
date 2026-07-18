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
  if (opts.commands) {
    const cmds = buildCommands(api, opts.locale)
    if (api.command) {
      unregisterCommands = api.command.register(() => cmds)
    } else if (api.keymap && typeof api.keymap === "object" && "registerLayer" in api.keymap) {
      unregisterCommands = (api.keymap as { registerLayer: (opts: { commands: typeof cmds }) => () => void }).registerLayer({ commands: cmds })
    }
  }

  api.lifecycle.onDispose(() => {
    unregisterCommands?.()
  })
}

const mod: TuiPluginModule = { id: "opencode-zh-plugin", tui }

export default mod
export { tui }
