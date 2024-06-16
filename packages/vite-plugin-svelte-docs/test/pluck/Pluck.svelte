<script lang="ts">
	interface Parent {
		a?: string;
		b: boolean;
	}

	interface Props extends Pick<Parent, "a"> {
		c: number;
	}

	let { a = "default", c }: Props = $props();
</script>

<div>
	{a}
	{c}
</div>
