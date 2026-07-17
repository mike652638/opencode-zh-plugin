import type { Hooks, Plugin, PluginModule } from "@opencode-ai/plugin"
import { resolveOptions } from "./config.js"
import { buildSystemTransformHandler } from "./server/system-transform.js"

const server: Plugin = async (_input, options) => {
  const opts = resolveOptions(options)
  if (!opts.enabled) return {}

  const hooks: Hooks = {}
  if (opts.systemPrompt) {
    hooks["experimental.chat.system.transform"] = buildSystemTransformHandler(opts.locale)
  }
  return hooks
}

const mod: PluginModule = { server }

export default mod
export { server }
