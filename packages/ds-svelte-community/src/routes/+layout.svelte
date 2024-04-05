<script lang="ts">
	import { Box, HStack, Page, PageBlock } from "$lib";
	import "../doclib/styles.css";
	import "../lib/css/index.css";

	const components = ["Button", "Alert"];
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
				<ul>
					{#each components as component}
						<li>
							<a href="/components/{component}">{component}</a>
						</li>
					{/each}
				</ul>
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
		padding: 1rem 1rem 0 1rem;
		border-right: 1px solid var(--a-border-divider);

		ul {
			list-style-type: none;
			padding: 0;
		}
	}
</style>
