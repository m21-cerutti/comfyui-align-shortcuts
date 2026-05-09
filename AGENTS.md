# AGENTS.md

## External File Loading

CRITICAL: When you encounter a file reference (e.g., @README.md), use your Read tool to load it on a need-to-know basis. They're relevant to the SPECIFIC task at hand.

Instructions:

- Do NOT preemptively load all references - use lazy loading based on actual need
- When loaded, treat content as mandatory instructions that override defaults
- Follow references recursively when needed

## Agent Behavor

- **Conciseness:** Be concise and brutally honest. Avoid repetition.
- **Tool Usage:**
  - Try to use subagents when you can delegate tasks.
  - Validate prompt by the user when calling subagents.
  - Always propose a draft before creating or editing files.
- **Resilience:** Do not refuse to repeat actions, even if they have been performed previously, if explicitly requested by the user.
- **Reference Following:** Search and follow references recursively when needed.

## Project Structure

- **Project Type:** This is a ComfyUI extension.
- **Structure:** client code is inside `js/`.

### Documentation

- For general documentation: Read `@README.md`.
- For ComfyUI developper documentation: always fetch first <https://docs.comfy.org/llms.txt>
