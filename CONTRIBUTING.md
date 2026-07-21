i am user B
i am user A

# Contributing

Thanks for your interest in contributing to `ph`! This repo hosts a set of
example apps (`fastapi`, `flask`, `nextjs`, `vite`) that can be run together
via `docker-compose`.

## Getting started

1. Fork the repository and clone your fork.
2. Create a branch for your change:
   ```bash
   git checkout -b my-change
   ```
3. Bring the stack up locally:
   ```bash
   docker-compose up
   ```
   See each app's `README.md` for instructions on running it on its own.

## Making changes

- Keep changes focused — one logical change per pull request.
- Match the style and conventions of the surrounding code in whichever app
  you're touching (Python for `fastapi`/`flask`, TypeScript for
  `nextjs`/`vite`).
- Run the relevant linters/formatters and tests for the app you changed before
  opening a PR.

## Commit messages

Write clear, descriptive commit messages that explain the "why" of the change.

## Opening a pull request

1. Push your branch to your fork.
2. Open a pull request against the `main` branch.
3. Describe what the change does and why. Link any related issues.
4. Make sure CI is green and address any review feedback.

## Reporting issues

Found a bug or have a feature request? Please open an issue with enough detail
to reproduce or understand it.
