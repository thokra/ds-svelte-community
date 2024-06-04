<script lang="ts">
	import { Switch } from "$lib";
	import Button from "$lib/components/Button/Button.svelte";
	import Select from "$lib/components/Select/Select.svelte";
	import TextField from "$lib/components/TextField/TextField.svelte";
	import type { Type } from "@nais/vite-plugin-svelte-docs";

	let {
		type: typ,
		onChange,
		init = undefined,
		value,
		forceEditable = false,
	}: {
		type: Type;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		value: any;
		onChange: (val: unknown) => void;
		init: string | undefined;
		forceEditable?: boolean;
	} = $props();

	let isEditable = $state(false);

	const selectOptions = (t: Type): unknown[] | false => {
		if (Array.isArray(t)) {
			return false;
		}
		if (t.type === "string") {
			return false;
		} else if (t.type === "boolean") {
			return [true, false];
		} else if (t.type === "union") {
			let err = false;
			const ret = t.values.flatMap((v) => {
				let o = selectOptions(v);
				if (!o) {
					err = true;
				}
				return o;
			});
			if (err) {
				return false;
			}
			return ret;
		} else if (t.type === "literal") {
			return [JSON.parse(t.value)];
		} else if (t.type === "undefined") {
			return [undefined];
		}

		if (t.type === "interface") {
			return false;
		} else if (t.type === "unknown") {
			return false;
		}

		console.error("Unsupported type", t);
		return false;
	};

	let options = $derived.by(() => {
		return selectOptions(typ);
	});
	let isSwitch = $derived.by(() => {
		return !!options && options.length === 2 && options.every((o) => typeof o === "boolean");
	});
	let isSelect = $derived.by(() => {
		return !!options && !isSwitch;
	});

	// $effect(() => {
	// 	console.log("VALUE CHANGED", editable, value);
	// 	if (value === undefined || (isSelect && value === "")) {
	// 		return;
	// 	}

	// 	// onChange(toText(value as string));
	// });

	// $effect(() => {
	// 	if (editable && isSwitch && value === "" && options) {
	// 		onChange(toText(value as string));
	// 	}
	// });

	$effect(() => {
		isEditable = forceEditable;
	});

	const fromText = (t: string): unknown => {
		if (t === "undefined" || t === undefined) {
			return undefined;
		} else if (t === "null" || t === null) {
			return null;
		}

		return JSON.parse(t);
	};

	const toText = (v: unknown): string => {
		if (v === undefined) {
			return "undefined";
		} else if (v === null) {
			return "null";
		}

		return JSON.stringify(v);
	};
</script>

{#if !isEditable && !forceEditable}
	<Button
		size="xsmall"
		variant="secondary-neutral"
		onclick={() => {
			isEditable = true;
			if (isSwitch) {
				value = init ? fromText(init) : true;
			} else {
				if (init) {
					value = init;
				} else if (options && options.length > 0) {
					value = options[0];
				}
			}
			onChange(value);
		}}
	>
		Set value
	</Button>
{:else if !Array.isArray(typ) && typ.type === "string"}
	<TextField
		value={JSON.parse(value || '""')}
		size="small"
		on:change={(e) => {
			onChange(toText((e.target as HTMLInputElement).value));
		}}
	/>
{:else if options}
	{#if isSwitch}
		<Switch
			checked={!!fromText(value)}
			on:change={() => {
				onChange(!value);
			}}
		/>
	{:else if isSelect}
		<div>
			<Select
				bind:value
				size="small"
				on:change={() => {
					onChange(value);
				}}
			>
				{#each options as option}
					<option value={toText(option)}>{toText(option)}</option>
				{/each}
			</Select>
		</div>
	{/if}
{/if}
