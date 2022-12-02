# TeamApp

This is an app bootstrapped according to the [init.tips](https://init.tips) stack, also known as the T3-Stack.

| ![Lint Test Build](https://github.com/kcoulsy/teamapp/actions/workflows/lint-test-build.yml/badge.svg) | ![E2E](https://github.com/kcoulsy/teamapp/actions/workflows/playwright.yml/badge.svg) | ![CodeQL](https://github.com/kcoulsy/teamapp/actions/workflows/codeql.yml/badge.svg) | ![Vercel](https://vercelbadge.vercel.app/api/kcoulsy/teamapp-kr25) |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |

## Node Version

This project uses node `16.18.1` and npm `8.19.2`. It is recommended to use nvm to set your environment to these specific versions.

## Why are there `.js` files in here?

As per [T3-Axiom #3](https://github.com/t3-oss/create-t3-app/tree/next#3-typesafety-isnt-optional), we take typesafety as a first class citizen. Unfortunately, not all frameworks and plugins support TypeScript which means some of the configuration files have to be `.js` files.

We try to emphasize that these files are javascript for a reason, by explicitly declaring its type (`cjs` or `mjs`) depending on what's supported by the library it is used by. Also, all the `js` files in this project are still typechecked using a `@ts-check` comment at the top.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with the most basic configuration and then move on to more advanced configuration.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next-Auth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [TailwindCSS](https://tailwindcss.com)
- [tRPC](https://trpc.io) (using @next version? [see v10 docs here](https://trpc.io/docs/v10/))

Also checkout these awesome tutorials on `create-t3-app`.

- [Build a Blog With the T3 Stack - tRPC, TypeScript, Next.js, Prisma & Zod](https://www.youtube.com/watch?v=syEWlxVFUrY)
- [Build a Live Chat Application with the T3 Stack - TypeScript, Tailwind, tRPC](https://www.youtube.com/watch?v=dXRRY37MPuk)
- [Build a full stack app with create-t3-app](https://www.nexxel.dev/blog/ct3a-guestbook)
- [A first look at create-t3-app](https://dev.to/ajcwebdev/a-first-look-at-create-t3-app-1i8f)

## What integrations do I need to setup

### Database

This web app uses a postgres db - we suggest you spin one up at [railway](https://railway.app). And set the provided url in your .env as `DATABASE_URL`

### Sentry

You will need to add `SENTRY_DSN` and `SENTRY_AUTH_TOKEN` to your env file.

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
