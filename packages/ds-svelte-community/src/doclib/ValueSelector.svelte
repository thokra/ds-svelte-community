<script lang="ts">
	import { Switch } from "$lib";
	import Button from "$lib/components/Button/Button.svelte";
	import Select from "$lib/components/Select/Select.svelte";
	import type { Type } from "@nais/vite-plugin-svelte-docs";

	let {
		type: typ,
		onChange,
		lastReset,
	}: { type: Type; onChange: (val: unknown) => void; lastReset: Date } = $props();

	let editable = $state(false);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let value: any = $state(undefined);

	const selectOptions = (t: Type): unknown[] | false => {
		if (Array.isArray(t)) {
			return false;
		}

		if (t.type === "boolean") {
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
		}

		console.log("Unsupported type", t);
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

	$effect(() => {
		console.log("VALUE CHANGED", value);
		if (value === undefined || (isSelect && value === "")) {
			return;
		}

		onChange(fromText(value));
	});

	$effect(() => {
		if (lastReset) {
			editable = false;
			value = undefined;
		}
	});

	$effect(() => {
		if (editable && isSwitch && value === "" && options) {
			value = toText(options[0]);
		}
	});

	const fromText = (t: string): unknown => {
		if (t === "undefined") {
			return undefined;
		} else if (t === "null") {
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

{#if !editable}
	<Button size="xsmall" variant="secondary-neutral" onClick={() => (editable = true)}>
		Set value
	</Button>
{:else if options}
	{#if isSwitch}
		<Switch bind:checked={value} />
	{:else if isSelect}
		<div>
			<Select bind:value size="small">
				{#each options as option}
					<option value={toText(option)}>{toText(option)}</option>
				{/each}
			</Select>
		</div>
	{/if}
{/if}
