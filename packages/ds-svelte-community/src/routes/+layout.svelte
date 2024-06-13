<script lang="ts">
	import { page } from "$app/stores";
	import { Box, HStack, Page, PageBlock } from "$lib";
	import "../doclib/styles.css";
	import "../lib/css/index.css";
	import type { LayoutData } from "./$types";

	export let data: LayoutData;

	function toTitle(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
</script>

<Page background="bg-subtle">
	<PageBlock as="header">
		<Box background="surface-inverted" style="color:var(--a-text-on-inverted);" padding="3">
			ds-svelte-community
		</Box>
	</PageBlock>
	<PageBlock as="main" width="2xl" style="flex-grow: 1;">
		<HStack gap="4" wrap={false}>
			<div class="sidebar">
				<div class="section">
					{#each Object.entries(data.paths) as [key, paths]}
						<strong>{toTitle(key)}</strong>
						<ul>
							{#each paths as component}
								{@const href = `/${key}/${component}/`}
								<li>
									<!-- eslint-disable-next-line svelte/valid-compile using $ to access stores currently errors the validator -->
									<a class="unstyled" class:active={$page.url.pathname === href} {href}>
										{component}
									</a>
								</li>
							{/each}
						</ul>
					{/each}
				</div>
			</div>
			<Box style="flex-grow: 1;">
				<slot />
			</Box>
		</HStack>
	</PageBlock>
</Page>

<style>
	.sidebar {
		width: 200px;
		min-width: 200px;
		max-width: 200px;
		padding: 1rem 0;
		border-right: 1px solid var(--a-border-divider);
	}

	.section {
		& > strong {
			font-size: var(--a-font-size-medium);
		}

		ul {
			list-style-type: none;
			padding: 0;
			margin: 0;

			li {
				margin: 0;
				padding: 0;
			}

			a {
				color: var(--a-grayalpha-800);
				font-feature-settings: normal;
				font-size: var(--a-font-size-medium);
				line-height: var(--a-font-line-height-large);
				padding: 0.125rem 0;
				padding-inline: var(--a-spacing-3) var(--a-spacing-2);
				text-decoration: none;
				text-underline-offset: 2px;
				width: 100%;
				display: block;
				border-top-left-radius: var(--a-border-radius-medium);
				border-bottom-left-radius: var(--a-border-radius-medium);

				&:hover {
					background-color: var(--a-grayalpha-100);
					color: var(--a-grayalpha-900);
				}

				&:active {
					background-color: var(--a-surface-alt-1-subtle);
				}

				&.active {
					background-color: var(--a-surface-alt-1);
					color: var(--a-text-on-alt-1);
				}
			}
		}
	}
</style>
