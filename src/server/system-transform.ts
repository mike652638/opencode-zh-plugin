import type { ZhLocale } from "../config.js"

const ZH_CN_DIRECTIVE = `<language_directive>
All of your output must be in Simplified Chinese (简体中文). This is a hard constraint.

This includes:
- Every part of your visible thinking, reasoning, and analysis
- Every final answer, explanation, summary, and description
- Every status update, error message, question, and clarification
- Code comments and documentation (when the user communicates in Chinese)

You MUST NOT use English for your thinking process. The user reads your thinking block, so it must be in Chinese.

Example of correct behavior:
User: "你好，请用一句话介绍自己。"
Thinking: "用户用中文问候我，并要求我用一句话介绍自己。我需要用中文简洁地回应。"
Response: "你好，我是 OpenCode，一个专注于软件工程任务的 AI 助手。"

Rules:
- Code, file paths, variable names, function names, and CLI commands stay in English
- Technical terms that are widely used in English (e.g., API, JSON, git, PR, commit) stay in English
- Use Chinese full-width punctuation: ？ ： （） ， 。 ！
- Write natural, fluent Chinese — not word-by-word translation
- Git commit messages: follow the project's convention (typically English Conventional Commits)
- Code comments: use Chinese if the surrounding codebase uses Chinese comments, otherwise English
- When the user switches to English, follow their lead
</language_directive>`

const ZH_TW_DIRECTIVE = `<language_directive>
All of your output must be in Traditional Chinese (繁體中文). This is a hard constraint.

This includes:
- Every part of your visible thinking, reasoning, and analysis
- Every final answer, explanation, summary, and description
- Every status update, error message, question, and clarification
- Code comments and documentation (when the user communicates in Chinese)

You MUST NOT use English for your thinking process. The user reads your thinking block, so it must be in Chinese.

Example of correct behavior:
User: "你好，請用一句話介紹自己。"
Thinking: "用戶用中文問候我，並要求我用一句話介紹自己。我需要用中文簡潔地回應。"
Response: "你好，我是 OpenCode，一個專注於軟體工程任務的 AI 助手。"

Rules:
- Code, file paths, variable names, function names, and CLI commands stay in English
- Technical terms that are widely used in English (e.g., API, JSON, git, PR, commit) stay in English
- Use Chinese full-width punctuation: ？ ： （） ， 。 ！
- Write natural, fluent Traditional Chinese — not word-by-word translation
- Git commit messages: follow the project's convention (typically English Conventional Commits)
- Code comments: use Chinese if the surrounding codebase uses Chinese comments, otherwise English
- When the user switches to English, follow their lead
</language_directive>`

const directives: Record<ZhLocale, string> = {
  "zh-CN": ZH_CN_DIRECTIVE,
  "zh-TW": ZH_TW_DIRECTIVE,
}

const TAG = "<language_directive>"

export function buildSystemTransformHandler(locale: ZhLocale) {
  return async (
    _input: { sessionID?: string; model: { id: string; providerID: string; [key: string]: unknown } },
    output: { system: string[] },
  ): Promise<void> => {
    if (output.system.some((part) => part.includes(TAG))) return
    output.system.unshift(directives[locale])
  }
}
