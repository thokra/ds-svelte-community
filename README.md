# ds-svelte-community

A Svelte component library for [Aksel](https://aksel.nav.no).

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run storbyook # or
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Everything inside `src/lib` is part of your library, everything inside `src/routes` can be used as a showcase or preview app.

## Building

To build your library:

```bash
npm run package
```

To create a production version of your showcase app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Publishing

The package is hosted on Google Artifact Registry. To publish a new version:

Update the version in `package.json` and commit the change.

Then run:

```bash
npm run gar-login
npm run publish
```
