# TeamApp

This is an app bootstrapped according to the [init.tips](https://init.tips) stack, also known as the T3-Stack.

| ![Lint Test Build](https://github.com/kcoulsy/teamapp/actions/workflows/lint-test-build.yml/badge.svg) | ![E2E](https://github.com/kcoulsy/teamapp/actions/workflows/playwright.yml/badge.svg) | ![CodeQL](https://github.com/kcoulsy/teamapp/actions/workflows/codeql.yml/badge.svg) | ![Vercel](https://vercelbadge.vercel.app/api/kcoulsy/teamapp) |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------- |

| Statements                                                                               | Branches                                                                             | Functions                                                                              | Lines                                                                          |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| ![Statements](https://img.shields.io/badge/statements-100%25-brightgreen.svg?style=flat) | ![Branches](https://img.shields.io/badge/branches-100%25-brightgreen.svg?style=flat) | ![Functions](https://img.shields.io/badge/functions-100%25-brightgreen.svg?style=flat) | ![Lines](https://img.shields.io/badge/lines-100%25-brightgreen.svg?style=flat) |

## Node Version

This project uses node `20.x` and npm `10.x`. It is recommended to use nvm to set your environment to these specific versions.

## Project Setup

1. Clone the repo
2. Copy `.env.example` to `.env` and add appropriate variables
3. npm i
4. npm run dev

## Sentry

You will need to setup a sentry project and add the follow secrets to github at https://github.com/[your org]/[your repo]/settings/secrets/actions

Add the 3 secrets
```
SENTRY_PROJECT
SENTRY_ORG
SENTRY_AUTH_TOKEN
```

You will need to create an auth token at https://[sentry org].sentry.io/settings/auth-tokens/
The project is the __name__ of the project, not the project id. By default it will be something like `javascript-nextjs`

You will also need to add `SENTRY_DSN` and `SENTRY_AUTH_TOKEN` to your env file.

## Storybook

You can view the projects storybook on chromatic by [Clicking this link](https://main--632f5460936ef37ac5ba9a3b.chromatic.com/?path=/story/common-button--default)

## What integrations do I need to setup

### Database

This web app uses a postgres db - we suggest you spin one up at [railway](https://railway.app). And set the provided url in your .env as `DATABASE_URL`

### Axiom

Axiom is integrated through vercel. [Add the integration here](https://vercel.com/integrations/axiom) - it will automatically set the .env value for the deployment.

### Chromatic

The storybook stories are linked on chromatic. To publish to chromatic locally you need the .env key `CHROMATIC_PROJECT_TOKEN`

## How do I deploy this?

### Vercel

We recommend deploying to [Vercel](https://vercel.com/?utm_source=t3-oss&utm_campaign=oss). It makes it super easy to deploy NextJs apps.

- Push your code to a GitHub repository.
- Go to [Vercel](https://vercel.com/?utm_source=t3-oss&utm_campaign=oss) and sign up with GitHub.
- Create a Project and import the repository you pushed your code to.
- Add your environment variables.
- Click **Deploy**
- Now whenever you push a change to your repository, Vercel will automatically redeploy your website!

## Useful resources

Here are some resources that we commonly refer to:

- [Protecting routes with Next-Auth.js](https://next-auth.js.org/configuration/nextjs#unstable_getserversession)
