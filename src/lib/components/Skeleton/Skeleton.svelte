<script lang="ts">
	import { classes, omit } from "../helpers";
	import type { Props, variants } from "./type";

	type $$Props = Props;

	export let variant: (typeof variants)[number];

	/**
	 * When not inferring height from children, you must specify height.
	 */
	export let height: Props["height"] = undefined;

	/**
	 * When not inferring width from children, you must specify width.
	 */
	export let width: Props["width"] = undefined;

	const style = (
		restProps: { [index: string]: unknown },
		width: Props["width"],
		height: Props["height"],
	): string => {
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

		return ret;
	};
</script>

<div
	{...omit($$restProps, "class", "style")}
	class={classes($$restProps, "navds-skeleton", `navds-skeleton--${variant}`)}
	class:navds-skeleton--has-children={$$slots.default}
	class:navds-skeleton--no-height={!height}
	class:navds-skeleton--no-width={!width}
	style={style($$restProps, width, height)}
	aria-hidden
>
	<slot />
</div>
