<script lang="ts">
	import { ArrowUndoIcon, ChevronDownIcon, ChevronRightIcon } from "$lib/icons";
	import type { Doc } from "@nais/vite-plugin-svelte-docs";
	import Markdown from "svelte-markdown";

	let { doc, values = $bindable({}) }: { doc: Doc; values: Record<string, unknown> } = $props();

	let showProps = $state(true);
	let showEvents = $state(true);
	let showSlots = $state(true);

	let isV5 = $derived(doc.slots.filter((s) => s.snippet).length > 0);
</script>

{#if doc.props.length + doc.slots.length + doc.events.length > 0}
	<section>
		<table>
			<thead>
				<tr>
					<th>Property</th>
					<th>Description</th>
					<th>Default</th>
					<th>
						<div class="control">
							Control

							<button title="Reset all values" disabled={Object.keys(values).length == 0}>
								<ArrowUndoIcon />
							</button>
						</div>
					</th>
				</tr>
			</thead>

			<tbody>
				{#if doc.props.length > 0}
					<tr on:click={() => (showProps = !showProps)}>
						<td colspan="99" class="title">
							{#if showProps}
								<ChevronDownIcon />
							{:else}
								<ChevronRightIcon />
							{/if}
							Properties
						</td>
					</tr>

					{#if showProps}
						{#each doc.props as prop}
							<tr>
								<td><strong>{prop.name}</strong></td>
								<td class="description"><Markdown source={prop.description} /></td>
								<td>
									{#if prop.default}
										<code>{prop.default}</code>
									{:else}
										-
									{/if}
								</td>
								<td>value selector</td>
							</tr>
						{/each}
					{/if}
				{/if}

				{#if doc.slots.length > 0}
					<tr on:click={() => (showSlots = !showSlots)}>
						<td colspan="99" class="title">
							{#if showSlots}
								<ChevronDownIcon />
							{:else}
								<ChevronRightIcon />
							{/if}
							{#if isV5}
								Snippets
							{:else}
								Slots
							{/if}
						</td>
					</tr>

					{#if showSlots}
						{#each doc.slots as slot}
							<tr>
								<td><strong>{slot.name}</strong></td>
								<td class="description"><Markdown source={slot.description} /></td>
								<td>&nbsp;</td>
								<td>-</td>
							</tr>
						{/each}
					{/if}
				{/if}

				{#if doc.events.length > 0}
					<tr on:click={() => (showEvents = !showEvents)}>
						<td colspan="99" class="title">
							{#if showEvents}
								<ChevronDownIcon />
							{:else}
								<ChevronRightIcon />
							{/if}
							Events
						</td>
					</tr>

					{#if showEvents}
						{#each doc.events as event}
							<tr>
								<td><strong>{event.name}</strong></td>
								<td class="description"><Markdown source={event.description} /></td>
								<td>&nbsp;</td>
								<td>-</td>
							</tr>
						{/each}
					{/if}
				{/if}
			</tbody>
		</table>
	</section>
{/if}

<style lang="postcss">
	.title {
		font-size: var(--a-font-size-medium);
		font-weight: var(--a-font-weight-bold);
		background: var(--a-surface-alt-1-subtle);
		user-select: none;
		vertical-align: middle;

		&:hover {
			background: var(--a-surface-alt-1-moderate);
			cursor: pointer;
		}
	}

	.control {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: space;

		button {
			background: none;
			border: none;
			color: var(--a-text-subtle);
			font-size: var(--a-font-size-small);
			padding: 0.5rem;
			margin: 0;
			cursor: pointer;

			&:hover {
				color: var(--a-text-default);
			}
		}

		button[disabled] {
			pointer-events: none;
			opacity: 0.5;
		}
	}

	table {
		width: 100%;
		font-size: var(--a-font-size-small);
		border-spacing: 0;

		th,
		td {
			vertical-align: top;
			padding: 0.5rem 0 0.5rem 0.5rem;

			&:first-of-type {
				width: 25%;
			}
			&:nth-child(2) {
				width: 35%;
			}
			&:nth-child(3) {
				width: 15%;
			}
			&:nth-child(4) {
				width: 25%;
			}
		}
	}

	.description {
		:global(p) {
			margin: 0;
		}
		:global(p:not(:first-child)) {
			margin-top: 0.5rem;
		}
	}

	tbody {
		tr {
			td {
				border-bottom: 1px solid var(--a-border-default);

				&:first-of-type {
					border-left: 1px solid var(--a-border-default);
				}
				&:last-of-type {
					border-right: 1px solid var(--a-border-default);
				}
			}

			&:first-child td {
				border-top: 1px solid var(--a-border-default);

				&:first-of-type {
					border-left: 1px solid var(--a-border-default);
					border-top-left-radius: var(--a-border-radius-medium);
				}
				&:last-of-type {
					border-right: 1px solid var(--a-border-default);
					border-top-right-radius: var(--a-border-radius-medium);
				}
			}

			&:last-child td {
				&:first-of-type {
					border-bottom-left-radius: var(--a-border-radius-medium);
				}
				&:last-of-type {
					border-bottom-right-radius: var(--a-border-radius-medium);
				}
			}
		}
	}

	thead {
		th {
			color: var(--a-text-subtle);
			text-align: left;
		}
	}

	code {
		background: var(--a-surface-alt-1-subtle);
		border-radius: var(--a-border-radius-small);
		padding: 0.1rem 0.3rem;
		font-size: 0.7rem;
	}
</style>
