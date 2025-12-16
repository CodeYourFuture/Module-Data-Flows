# Purpose

This file gives an AI coding agent the minimal, actionable knowledge to be immediately productive in this repository: how the project is organized, the developer workflows (tests / formatting / PR checks), important patterns and gotchas, and a few concrete file examples to inspect.

## Quick orientation

- This repository is a teaching/learning collection of small JavaScript exercises and web challenges organized by folders such as `Sprint-*`, `challenges/` and `unit-testing/`.
- Code is CommonJS (`"type": "commonjs"` in package.json) and most runtime/test code targets Node + Jest.

## Key folders & what to read first

- Root: package.json — check `scripts` for `test` and `format` behavior.
- `challenges/` and `Sprint-*` — each exercise has a `readme.md` and source files; mock solutions and tests often live next to the exercise.
- `unit-testing/katas-tdd/` — canonical examples of test + implementation pairing (see roman-numerals example).

## Developer workflows (commands)

- Run the whole test suite (project uses Jest):

```bash
npm test
```

- Run a single test file or path (recommended when changing one exercise):

```bash
npx jest challenges/unit-testing/katas-tdd/roman-numerals/convert-to-new-roman.test.js
# or via npm script
npm test -- challenges/unit-testing/katas-tdd/roman-numerals/convert-to-new-roman.test.js
```

- Reformat code with Prettier:

```bash
npm run format
```

## Important note about tests

- Root `package.json` defines the `test` script as `jest --testMatch='**/*.js'`. That pattern will attempt to execute many `.js` files as tests (including non-test source files). Prefer invoking `npx jest <file>` or `npm test -- <file>` to run a targeted test file.

## Conventions & patterns

- Tests use Jest and are colocated with exercises. Common test filenames use `.test.js` but some older exercises include tests named differently — inspect the folder.
- Implementation modules are simple CommonJS exports (use `module.exports = ...`). Avoid adding ES module syntax unless you update `type` in package.json.
- Small exercises keep logic in a single `.js` file with a README that describes expected behavior. Follow local README examples when writing or fixing code.

## Integration points & CI

- A GitHub action `validate-pr-metadata.yml` exists in `.github/workflows/`; PRs are expected to include necessary metadata. See [.github/workflows/validate-pr-metadata.yml](.github/workflows/validate-pr-metadata.yml) for details.

## Concrete examples to inspect

- Tests + implementation pairing: [challenges/unit-testing/katas-tdd/roman-numerals/convert-to-new-roman.js](challenges/unit-testing/katas-tdd/roman-numerals/convert-to-new-roman.js)
- Current exercise being edited: [Sprint-3/dead-code/exercise-2.js](Sprint-3/dead-code/exercise-2.js)

## Common pitfalls for automation

- Avoid running `npm test` blindly — it may execute non-test files due to the broad `--testMatch`. Use targeted jest invocation for deterministic runs in CI or while iterating locally.
- Because the repo is a collection of unrelated exercises, changes should be scoped to the exercise folder to avoid accidental test failures elsewhere.

## How to propose changes (PRs)

- Make small, single-purpose commits that modify only the exercise or support files you intend to change.
- Ensure the exercise's tests pass locally with a targeted `npx jest <file>` run before opening a PR.

## If something is unclear

If an AI agent needs more context about a folder or test pattern, ask for the specific file path to open and run the tests for that path. I will then run the tests and present failing output and suggested edits.

## Feedback request

Please tell me if you'd like more explicit examples (patches) for common fixes, or if you'd prefer CI-focused instructions instead of local-run tips.
