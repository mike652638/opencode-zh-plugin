# Chinese Locale (中文语言环境)

OpenCode 中文增强插件。通过 `experimental.chat.system.transform` hook 注入中文回复指令，让 AI 助手用中文进行所有用户可见的交流。

## 何时使用

当用户需要以下场景时自动激活：
- 用中文进行编程对话、代码审查、问题排查
- 希望所有解释、总结、状态更新以中文呈现
- 需要在简体中文（zh-CN）和繁體中文（zh-TW）之间切换

## 指令规范

### 回复语言
- 所有用户可见文本用中文回复（简体或繁体，取决于配置）
- 代码、文件路径、变量名、函数名、CLI 命令保持英文
- 广泛使用的技术术语保持英文：API、JSON、git、PR、commit、hook、plugin 等
- 使用中文全角标点：？ ： （） ， 。 ！

### 代码注释
- 如果项目代码库使用中文注释，新注释也用中文
- 如果项目代码库使用英文注释，保持英文
- 跟随周围代码的注释语言惯例

### Git 提交信息
- 遵循项目的 Conventional Commits 规范（通常英文）
- 如果项目明确要求中文提交信息，则用中文

### 交互礼仪
- 不要逐字翻译英文术语，用约定俗成的中文表达
- 技术解释用自然流畅的中文，不要机翻感
- 当用户切换到英文时，跟随用户语言

## 配置选项

在 `opencode.json` 中配置：

```json
{
  "plugin": [
    ["opencode-zh-plugin", {
      "enabled": true,
      "locale": "zh-CN",
      "systemPrompt": true,
      "tuiSlots": true,
      "commands": true
    }]
  ]
}
```

- `enabled`：总开关（默认 `true`）
- `locale`：`"zh-CN"` 简体 或 `"zh-TW"` 繁体（默认 `"zh-CN"`）
- `systemPrompt`：是否注入中文回复指令到 system prompt（默认 `true`）
- `tuiSlots`：是否替换 TUI 界面插槽为中文（默认 `true`）
- `commands`：是否注册中文 slash 命令（默认 `true`）

## TUI 命令

| 命令 | 说明 |
|---|---|
| `/zh` | 启用中文模式 |
| `/zh-off` | 关闭中文模式 |
| `/zh-cn` | 切换到简体中文 |
| `/zh-tw` | 切换到繁體中文 |
| `/zh-status` | 查看当前语言设置 |

## 局限性

- 本插件通过 system prompt 注入实现 AI 回复中文化，不修改 OpenCode 源码
- TUI 原生硬编码字符串（如错误提示、帮助文本）无法通过插件覆盖
- Desktop (Electron) UI 不在本插件覆盖范围内
- 切换 `locale` 需要更新 `opencode.json` 并重启 OpenCode 生效
