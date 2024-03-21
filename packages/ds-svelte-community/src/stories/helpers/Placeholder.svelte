<script lang="ts">
	export let height = "5rem";
	export let width = "";
	export let background = "--a-deepblue-900";
</script>

<div
	style:background="var({background})"
	style:height
	style:width={width ? width : "auto"}
	style:color="white"
>
	<slot />
</div>
