# Copilot Instructions for Module-Data-Flows

Use these repo-specific guidelines so AI coding agents are productive and non-disruptive across this multi-exercise teaching repo.

## Scope & Structure

- This repo hosts many standalone exercises grouped by topic: [Sprint-1](Sprint-1), [Sprint-3](Sprint-3), [challenges](challenges), [debugging](debugging), [fetch](fetch).
- Work locally within the specific exercise folder. Avoid cross-folder refactors or adding global dependencies.
- Read each exercise’s README first (e.g. [Sprint-1/destructuring/exercise-3/readme.md](Sprint-1/destructuring/exercise-3/readme.md), [Sprint-3/dead-code/README.md](Sprint-3/dead-code/README.md)).

## Workflows

- Formatting: run `npm run format` at repo root (see [package.json](package.json)). Keep edits Prettier-friendly.
- Tests (root): `npm test` runs Jest across the repo using a broad match (see [package.json](package.json)). Prefer running tests in the relevant subfolder when possible to keep scope tight.
- Tests (subfolders): some folders have their own config/scripts:
  - Unit testing hub: [challenges/unit-testing/package.json](challenges/unit-testing/package.json) → run `npm test` in that folder.
  - ESM example: [debugging/exampleEJS/package.json](debugging/exampleEJS/package.json) runs Jest via Node’s `--experimental-vm-modules`.
- Script-free exercises: execute files directly with Node to check console output (e.g., `node Sprint-3/dead-code/exercise-1.js`).

## Module Systems

- Default is CommonJS: use `require(...)` and `module.exports` (e.g., [challenges/unit-testing/passing-tests/factorial/factorial.test.js](challenges/unit-testing/passing-tests/factorial/factorial.test.js)).
- Some folders opt into ESM with `"type": "module"` (e.g., [debugging/exampleEJS/package.json](debugging/exampleEJS/package.json)). Match the module format of the folder you’re editing.

## Testing Patterns

- Tests are colocated with exercises. Implementations sit beside tests with matching basenames (e.g., `factorial.test.js` ↔ `factorial.js`).
  - See [challenges/unit-testing/passing-tests/factorial/factorial.test.js](challenges/unit-testing/passing-tests/factorial/factorial.test.js) and [challenges/unit-testing/passing-tests/factorial/factorial.js](challenges/unit-testing/passing-tests/factorial/factorial.js).
- Some kata folders intentionally provide empty test files to be completed via TDD (e.g., [challenges/unit-testing/katas-tdd/roman-numerals/convert-to-old-roman.test.js](challenges/unit-testing/katas-tdd/roman-numerals/convert-to-old-roman.test.js)).
- Jest version is pinned in package files; avoid adding transform layers. Keep implementations simple and idiomatic JS.
- To focus tests from root: `npm test -- <relative/test/path> -t "pattern"`.

## Exercise-Specific Conventions

- Dead code refactors: maintain exact final console output while removing unused/duplicated logic (see [Sprint-3/dead-code](Sprint-3/dead-code)). Prefer pure functions and minimal variables.
- Destructuring tasks: follow the README’s output formatting precisely; use object/array destructuring where asked (see [Sprint-1/destructuring](Sprint-1/destructuring)).
- Writing tests: when a test is a stub, derive behaviour from the README then write tests first, followed by the simplest implementation.

## Do / Don’t

- Do: keep changes local to a single exercise; preserve file names and locations; match the folder’s module system; run only relevant tests.
- Don’t: introduce new npm deps, change top-level configs, or modify unrelated exercises to “fix” failing global runs.

## Start Here (per task)

- Open the exercise README and files in its folder.
- If tests exist, run them in the subfolder and implement the missing logic. If tests are stubs, write them first based on the README.
- Verify with local run (`node ...` or `npm test`), then format (`npm run format`).
