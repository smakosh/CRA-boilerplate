# CRA boilerplate

## JavaScript version

> [JavaScript version](https://github.com/smakosh/CRA-boilerplate)

## Getting started

1- Clone the repository

```bash
git clone git@github.com:smakosh/CRA-boilerplate.git
```

2- Create an account on the following platforms if you'd like to use them

- Google Recaptcha
- Google Analytics
- Twitter
- Sentry
- [Vercel](https://vercel.com?utm_source=smakosh) (Highly recommended to deploy your React app smoothly)

3- Create your `.env` file locally on dev environment

```bash
cp .env.development.template .env
```

## Installation and kickstart

4- Install dependencies using Yarn

```bash
yarn
```

5- Start your React app

```bash
yarn start
```

## Features

- Uses a feature based file structure
- Context API used effectively following [Kent C. Dodds](https://kentcdodds.com/blog/how-to-use-react-context-effectively/)'s article
- Reusable logic with React hooks
- UI elements separated from the features, so that you can push them as an UI library on NPM in the future as your project grow and you start to export features as their standalone apps
- Authentication already built in
- Code splitting of your Authenticated/Unauthenticated routes using Supense and React.lazy
- Helpers functions
- SEO component ready and configured for you
- Interfaces per feature

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more details
