<script lang="ts">
	import doc from "$lib/components/Skeleton/Skeleton.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Button, Skeleton, TextField } from "$lib";
</script>

<Doc {doc}>
	<Story>
		<Skeleton variant="text" width="200px" />
	</Story>

	<Story locked name="Text size">
		<div class="grid w-48 gap-2">
			<Skeleton variant="text" width="200px" />

			<div style="font-size: 5rem">
				<Skeleton variant="text" width="200px" />
			</div>
		</div>
	</Story>

	<Story name="Children">
		<Skeleton variant="rounded">
			<TextField label="Email"></TextField>
			<Button>Send inn</Button>
		</Skeleton>
	</Story>

	<Story name="Card" locked>
		<div class="card">
			<Skeleton variant="circle" width="60px" height="60px" />
			<Skeleton variant="text" width="100%" />
			<Skeleton variant="text" width="100%" />
			<Skeleton variant="text" width="100%" />
			<Skeleton variant="text" width="80%" />
		</div>
	</Story>
</Doc>

<style>
	.card {
		box-shadow:
			rgb(255, 255, 255) 0px 0px 0px 0px,
			rgba(0, 0, 0, 0.1) 0px 0px 0px 1px,
			rgba(0, 0, 0, 0.1) 0px 2px 4px -2px,
			rgba(0, 0, 0, 0.1) 0px 4px 6px -1px;
		padding: 1.5rem;
		border-radius: 0.5rem;
		width: 14rem;
		margin: 0 auto;
	}
</style>
