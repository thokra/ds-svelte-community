<script lang="ts">
	import { classes, omit } from "../helpers";
	import type { Props } from "./type";

	// export let size: (typeof sizes)[number] = "medium";

	let { size = "medium", children, ...restProps }: Props = $props();

	// type $$Props = Props;
</script>

<ul
	{...omit(restProps, "class")}
	class={classes(restProps, "navds-chips", `navds-chips--${size}`)}
	class:navds-body-short={size === "medium"}
	class:navds-body-short--small={size === "medium"}
	class:navds-detail={size === "small"}
	class:navds-detail--small={size === "small"}
>
	<!--  -->
	{@render children()}
</ul>
