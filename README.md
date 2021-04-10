# Earthquake Zen Garden

<a href="https://gitlab.com/nfriend/earthquake-zen-garden/pipelines/latest" target="_blank"><img src="https://gitlab.com/nfriend/earthquake-zen-garden/badges/main/pipeline.svg" alt="GitLab pipeline status"></a>

A simple app that shows a homepage with a list of earthquakes.

## Developing

- Clone this repo
- Inside the root directory, run `npm install`
- Start the dev server using `npm run start`

### Available `npm` commands

- `npm run start`: Starts the [Webpack dev
  server](https://webpack.js.org/configuration/dev-server/)
- `npm run lint`: Runs static style checking using [ESLint](https://eslint.org/)
- `npm run build:production`: Builds a production version of the application
- `npm run test`: Runs Jest tests
  - `npm run test -- --watch`: Jest watch mode

### Deployment

The [GitLab pipeline](.gitlab-ci.yml) auto-deploys the app to
https://earthquake-zen-garden.nathanfriend.io using [GitLab
Pages](https://docs.gitlab.com/ee/user/project/pages/).
