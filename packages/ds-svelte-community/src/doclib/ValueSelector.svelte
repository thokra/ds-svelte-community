<script lang="ts">
	import { Switch } from "$lib";
	import Button from "$lib/components/Button/Button.svelte";
	import Select from "$lib/components/Select/Select.svelte";
	import TextField from "$lib/components/TextField/TextField.svelte";
	import type { Type } from "@nais/vite-plugin-svelte-docs";

	let {
		type: outerType,
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

	let subType = $derived.by(() => {
		if (Array.isArray(outerType)) {
			return outerType;
		}

		if (outerType.type === "union") {
			let u = outerType.values.filter((v) => Array.isArray(v) || v.type != "snippet");
			if (u.length === 1) {
				return u[0];
			}
		}

		return outerType;
	});

	const selectOptions = (t: Type): unknown[] | false => {
		if (Array.isArray(t)) {
			return false;
		}
		if (t.type === "string") {
			return false;
		} else if (t.type === "boolean") {
			return [true, false];
		} else if (t.type === "number") {
			return false;
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

		if (t.type === "snippet") {
			return false;
		} else if (t.type === "array") {
			return false;
		}

		console.error("Unsupported type for select option", t);
		return false;
	};

	let options = $derived.by(() => {
		return selectOptions(subType);
	});
	let isSwitch = $derived.by(() => {
		return !!options && options.length === 2 && options.every((o) => typeof o === "boolean");
	});
	let isSelect = $derived.by(() => {
		return !!options && !isSwitch;
	});

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

	let canBeEdited = $derived.by(() => {
		if (options) {
			return true;
		}

		if (Array.isArray(subType)) {
			return false;
		}

		return subType.type === "string" || subType.type === "number";
	});
</script>

{#if canBeEdited}
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
	{:else if !Array.isArray(subType) && (subType.type === "string" || subType.type === "number")}
		<TextField
			label="Value for property"
			hideLabel
			value={fromText(value || '""') as string}
			size="small"
			type={subType.type === "number" ? "number" : "text"}
			onchange={(e: InputEvent) => {
				onChange(toText((e.target as HTMLInputElement).value));
			}}
		/>
	{:else if options}
		{#if isSwitch}
			<Switch
				checked={!!fromText(value)}
				onchange={() => {
					onChange(!value);
				}}
				hideLabel
			>
				Toggle boolean
			</Switch>
		{:else if isSelect}
			<div>
				<Select
					bind:value
					size="small"
					onchange={() => {
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
{/if}
