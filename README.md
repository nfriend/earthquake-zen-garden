# Earthquake Zen Garden

<a href="https://gitlab.com/nfriend/earthquake-zen-garden/pipelines/latest" target="_blank"><img src="https://gitlab.com/nfriend/earthquake-zen-garden/badges/main/pipeline.svg" alt="GitLab pipeline status"></a>

A simple app that shows a homepage with a list of earthquakes.

## Technologies used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Renovate Bot](https://www.whitesourcesoftware.com/free-developer-tools/renovate)
- [GitLab CI/CD](https://docs.gitlab.com/ee/ci/)
- [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/)

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

## Next steps

Some things I'd implement next:

- Visual indicators for active sort column/direction on the list view
- i18n (probably using [`react-i18next`](https://react.i18next.com/))
- SSR
- Integration tests
