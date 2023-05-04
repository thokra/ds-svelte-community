<script lang="ts">
	import "@navikt/ds-css/chips.css";
	import { classes } from "../helpers";

	export let size: "medium" | "small" = "medium";
</script>

<ul
	class={classes($$restProps, "navds-chips", `navds-chips--${size}`)}
	class:navds-body-short={size === "medium"}
	class:navds-body-short--small={size === "medium"}
	class:navds-detail={size === "small"}
	class:navds-detail--small={size === "small"}
	{...$$restProps}
>
	<slot />
</ul>
