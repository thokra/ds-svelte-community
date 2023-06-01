<script lang="ts">
	import { ChevronLeft as Back, ChevronRight as Next } from "$lib/icons";
	import { createEventDispatcher } from "svelte";
	import { classes, omit } from "../helpers";
	import BodyShort from "../typography/BodyShort.svelte";
	import Item from "./Item.svelte";
	import type { Props, sizes } from "./type";

	type $$Props = Props;

	/**
	 * Current page. If set will require implementation of `on:change` event.
	 * @note Pagination indexing starts at 1.
	 */
	export let page = 1;
	/**
	 * Number of always visible pages before and after the current page.
	 * @default 1
	 */
	export let siblingCount = 1;
	/**
	 * Number of always visible pages at the beginning and end.
	 * @default 1
	 */
	export let boundaryCount = 1;

	/**
	 * Total number of pages.
	 */
	export let count: number;

	/**
	 * Changes padding, height and font-size.
	 */
	export let size: (typeof sizes)[number] = "medium";

	/**
	 * Next label.
	 */
	export let nextText = "Next";

	/**
	 * Previous label.
	 */
	export let prevText = "Previous";

	/**
	 * Show next and previous buttons with text.
	 */
	export let prevNextTexts = false;

	type Events = {
		change: { page: number };
	};
	const dispatch = createEventDispatcher<Events>();

	const getSteps = (page: number) => {
		const range = (start: number, end: number) =>
			Array.from({ length: end - start + 1 }, (_, i) => start + i);

		if (count <= (boundaryCount + siblingCount) * 2 + 3) return range(1, count);

		const startPages = range(1, boundaryCount);
		const endPages = range(count - boundaryCount + 1, count);

		const siblingsStart = Math.max(
			Math.min(page - siblingCount, count - boundaryCount - siblingCount * 2 - 1),
			boundaryCount + 2,
		);
		const siblingsEnd = siblingsStart + siblingCount * 2;

		const nullish = <T>(a: T, b: T): T => (a == null ? b : a);

		return [
			...startPages,
			siblingsStart - nullish(startPages[startPages.length - 1], 0) === 2
				? siblingsStart - 1
				: "ellipsis",
			...range(siblingsStart, siblingsEnd),
			nullish(endPages[0], count + 1) - siblingsEnd === 2 ? siblingsEnd + 1 : "ellipsis",
			...endPages,
		];
	};

	$: steps = getSteps(page);

	const handlePageChange = (page: number) => {
		// Called when the page changes
		dispatch("change", { page });
	};
</script>

<nav
	{...omit($$restProps, "class")}
	class={classes($$restProps, "navds-pagination", `navds-pagination--${size}`)}
>
	<ul class="navds-pagination__list">
		<li>
			<Item
				class={classes({}, "navds-pagination__prev-next", {
					"navds-pagination--invisible": page === 1,
					"navds-pagination--prev-next--with-text": prevNextTexts,
				})}
				disabled={page === 1}
				page={page - 1}
				{size}
				iconOnly={!prevNextTexts}
				on:click={() => handlePageChange(page - 1)}
			>
				<Back
					slot="icon"
					class="navds-pagination__prev-next-icon"
					{...prevNextTexts ? { "aria-hidden": true } : { "aria-label": prevText }}
				/>
				{#if prevNextTexts}
					<BodyShort size={size === "xsmall" ? "small" : size} class="navds-pagination__prev-text">
						{prevText}
					</BodyShort>
				{/if}
			</Item>
		</li>
		{#each steps as step, i}
			{@const n = Number(step)}
			{#if isNaN(n)}
				<li class="navds-pagination__ellipsis">
					<BodyShort size={size === "xsmall" ? "small" : size}>...</BodyShort>
				</li>
			{:else}
				<li>
					<Item selected={page === n} page={n} {size} on:click={() => handlePageChange(n)}>
						<BodyShort size={size === "xsmall" ? "small" : size}>
							{n}
						</BodyShort>
					</Item>
				</li>
			{/if}
		{/each}
		<li>
			<Item
				class={classes({}, "navds-pagination__prev-next", {
					"navds-pagination--invisible": page === count,
					"navds-pagination--prev-next--with-text": prevNextTexts,
				})}
				disabled={page === count}
				page={page + 1}
				{size}
				on:click={() => handlePageChange(page + 1)}
				iconOnly={!prevNextTexts}
			>
				<Next
					slot="icon"
					class="navds-pagination__prev-next-icon"
					{...prevNextTexts ? { "aria-hidden": true } : { "aria-label": nextText }}
				/>
				{#if prevNextTexts}
					<BodyShort size={size === "xsmall" ? "small" : size} class="navds-pagination__prev-text">
						{nextText}
					</BodyShort>
				{/if}
			</Item>
		</li>
	</ul>
</nav>
