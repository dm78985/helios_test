# Getting started

- Node version = 20.18.0
- Install yarn `npm install -g yarn`
- `cd app`
- `yarn install`
- `yarn start`

# Notes

- Navigation made as a `ul` with links being `li` to make accessible
- Added `siteDefinition.json` to track `originUrl` as can then vary depending on env between local and production

# Compromises

- I had issues getting jest setup. I didn't want to lose too much time trying to get this to work so moved to tests to a separate branch `tests` and tested the changes as I went. I added a list of tests I was planning to do to the [PR description](https://github.com/dm78985/helios_test/pull/3).
- Didn't have enough time to move the question form logic out into a separate component. I was planning to have a switch statement based on `question.type`.
- Kept default next js styling for page and main to keep it simple.
