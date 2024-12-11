<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		checked?: boolean | "indeterminate";
		children: Snippet;
		onchange?: (event: boolean) => void;
	}

	let { checked = $bindable(false), onchange, children }: Props = $props();

	let state = $derived(typeof checked == "string" ? checked : checked ? "checked" : "unchecked");
</script>

<button
	role="menuitemcheckbox"
	tabindex="0"
	aria-checked="mixed"
	class="navds-action-menu__item navds-action-menu__item--has-icon"
	data-state={state}
	data-index="0"
	style="user-select: none;"
	onclick={() => {
		checked = checked === "indeterminate" ? false : !checked;
		onchange?.(checked);
	}}
>
	{@render children()}
	<div aria-hidden="true" class="navds-action-menu__marker navds-action-menu__marker--left">
		<div class="navds-action-menu__indicator" data-state={state} aria-hidden="true">
			<svg
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="navds-action-menu__indicator-icon"
				aria-hidden="true"
				><g class="navds-action-menu__indicator-icon--unchecked"
					><rect
						width="24"
						height="24"
						rx="4"
						fill="var(--ax-border-default, var(--a-border-default))"
					></rect><rect
						x="1"
						y="1"
						width="22"
						height="22"
						rx="3"
						fill="var(--ax-bg-default, var(--a-surface-default))"
						stroke-width="2"
					></rect></g
				><g class="navds-action-menu__indicator-icon--indeterminate"
					><rect
						width="24"
						height="24"
						rx="4"
						fill="var(--ax-bg-accent-strong-pressed, var(--a-surface-action-selected))"
					></rect><rect
						x="6"
						y="10"
						width="12"
						height="4"
						rx="1"
						fill="var(--ax-bg-default, var(--a-surface-default))"
					></rect></g
				><g class="navds-action-menu__indicator-icon--checked"
					><rect
						width="24"
						height="24"
						rx="4"
						fill="var(--ax-bg-accent-strong-pressed, var(--a-surface-action-selected))"
					></rect><path
						d="M10.0352 13.4148L16.4752 7.40467C17.0792 6.83965 18.029 6.86933 18.5955 7.47478C19.162 8.08027 19.1296 9.03007 18.5245 9.59621L11.0211 16.5993C10.741 16.859 10.3756 17 10.0002 17C9.60651 17 9.22717 16.8462 8.93914 16.5611L6.43914 14.0611C5.85362 13.4756 5.85362 12.5254 6.43914 11.9399C7.02467 11.3544 7.97483 11.3544 8.56036 11.9399L10.0352 13.4148Z"
						fill="var(--ax-bg-default, var(--a-surface-default))"
					></path></g
				></svg
			>
		</div>
	</div>
</button>
