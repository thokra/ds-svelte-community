<script lang="ts">
	import doc from "$lib/components/Alert/Alert.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Alert, BodyLong, Heading } from "$lib";
</script>

<Doc {doc} preview={{ width: "80%" }}>
	<Story>
		<Alert>Id elit esse enim reprehenderit enim nisi veniam nostrud.</Alert>
	</Story>
	<Story name="With a title">
		<Alert>
			<Heading spacing size="small" level="3">Aliquip duis est in commodo pariatur</Heading>
			<BodyLong>
				Ullamco ullamco laborum et commodo sint culpa cupidatat culpa qui laboris ex. Labore ex
				occaecat proident qui qui fugiat magna. Fugiat sint commodo consequat eu aute.
			</BodyLong>
		</Alert>
	</Story>
</Doc>
