# ds-svelte-community-preprocess-svelte

A Svelte preprocessor for [ds-svelte-community](../ds-svelte-community-preprocess-svelte)

This is heavily inspired by [carbon-preprocess-svelte](https://github.com/carbon-design-system/carbon-preprocess-svelte)

## Development

When there's new/removed components in `ds-svelte-community`, you need to run `bun run update-components` in this package to update the components tree.

## Publishing

The package is hosted on Google Artifact Registry. To publish a new version:

Update the version in `package.json` and commit the change.

Then run:

```bash
# From root of project
bun run gar-login
# From this directory
bun run publish
```
