<script lang="ts" module>
	import newUniqueId from "$lib/components/local-unique-id";
</script>

<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		/**
		 * Title of the icon, used for accessibility
		 */
		title?: string;

		children?: Snippet;

		[key: string]: unknown;
	};

	let { title, children, ...restProps }: Props = $props();

	const id = newUniqueId();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="1em"
	height="1em"
	fill="none"
	focusable="false"
	role="img"
	viewBox="0 0 24 24"
	aria-labelledby={title ? id : undefined}
	{...restProps}
>
	{#if title}
		<title {id}>{title}</title>
	{/if}
	{#if children}
		{@render children()}
	{/if}
	<path
		fill="currentColor"
		fill-rule="evenodd"
		d="M4.687 6.684c-2.203 2.203-2.96 4.062-2.96 5.568A4.1 4.1 0 0 0 2.92 15.17l1.414 1.415a4.1 4.1 0 0 0 2.917 1.192c1.507 0 3.365-.757 5.569-2.96 2.202-2.203 2.96-4.062 2.96-5.569a4.1 4.1 0 0 0-1.193-2.916l-1.414-1.415a4.1 4.1 0 0 0-2.917-1.192c-1.506 0-3.365.757-5.568 2.96m8.502 3.162a.75.75 0 0 0-1.377-.596c-.403.931-.992 1.907-1.822 2.737a.75.75 0 0 0 1.06 1.06c.993-.992 1.678-2.138 2.138-3.201M10.025 7.78c.508.508-.03 1.87-1.202 3.04-1.171 1.172-2.533 1.71-3.04 1.203-.508-.508.03-1.87 1.202-3.04 1.171-1.172 2.533-1.71 3.04-1.203m1.356 10.638c-.213-.052-.245-.334-.06-.451a14.6 14.6 0 0 0 2.315-1.852c.116-.112.309-.086.442.005.12.082.265.13.422.13 1.403 0 2.699-.326 3.776-.753a.75.75 0 0 0-.552-1.394c-.67.265-1.424.48-2.224.582-.217.028-.347-.223-.213-.396q.527-.682.908-1.345a.26.26 0 0 1 .144-.117c.706-.238 1.16-.61 1.16-1.027 0-.219-.124-.425-.344-.606a.28.28 0 0 1-.1-.288q.224-.847.223-1.659c0-.509-.064-.973-.17-1.394-.045-.184.11-.362.296-.321 1.445.318 2.446.882 3.126 1.563A4.1 4.1 0 0 1 21.75 12v2a4.1 4.1 0 0 1-1.22 2.905c-1.065 1.066-2.915 1.845-6.03 1.845-1.226 0-2.256-.12-3.12-.332"
		clip-rule="evenodd"
	/>
</svg>
