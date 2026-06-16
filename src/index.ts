import type { Plugin } from "@opencode-ai/plugin"

const HUMAN_QUESTION_GUIDANCE = `Use this tool proactively when continuing would require guessing, inventing, or assuming something the user probably knows.

Prefer asking one concise human question over hallucinating when you are missing domain knowledge, product intent, private API details, environment names, deployment targets, credentials availability, business rules, acceptance criteria, or a decision that changes the implementation.

Good triggers:
- You are about to choose between multiple plausible implementations and the codebase does not decide it.
- You cannot verify an endpoint, schema, workflow, service name, or environment from the available files/tools.
- The user's wording leaves a material ambiguity that would change files, behavior, or risk.
- You have made two searches and still only have a guess.

Ask the smallest useful question. Include the current context in the question text. If choices are obvious, provide short options, but keep custom answers enabled so the user can type the real answer.`

export const AskHumanQuestionPlugin: Plugin = async () => ({
  "tool.definition": async (input, output) => {
    if (input.toolID !== "question") return

    output.description = HUMAN_QUESTION_GUIDANCE
  },
})

export default {
  id: "opencode-ask-human",
  server: AskHumanQuestionPlugin,
}
