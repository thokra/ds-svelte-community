<!--
@component
Skeleton is used to give the user a temporary visual feedback while the content is loading or being processed. It is a simple and minimalistic version of the actual content to be displayed.

Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/skeleton).
-->

<script lang="ts">
	import { classes, omit } from "../helpers";
	import type { Props } from "./type";

	let { variant, height, width, children, ...restProps }: Props = $props();

	const style = (
		restProps: { [index: string]: unknown },
		width: Props["width"],
		height: Props["height"],
	): string | undefined => {
		let ret = "";
		if (restProps.style) {
			ret += restProps.style;
		}
		if (width) {
			ret += `width: ${width};`;
		}
		if (height) {
			ret += `height: ${height};`;
		}

		if (ret == "") {
			return undefined;
		}

		return ret;
	};
</script>

<div
	{...omit(restProps, "class", "style")}
	class={classes(restProps, "navds-skeleton", `navds-skeleton--${variant}`)}
	class:navds-skeleton--has-children={!!children}
	class:navds-skeleton--no-height={!height}
	class:navds-skeleton--no-width={!width}
	style={style(restProps, width, height)}
	aria-hidden="true"
>
	{#if children}
		{@render children()}
	{/if}
</div>
