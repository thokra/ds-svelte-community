<script lang="ts">
	import doc from "$lib/components/Modal/Modal.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { BodyLong, Button, Modal } from "$lib";

	let open = $state(false);
	let inner = $state(false);
</script>

<Doc {doc}>
	<Story locked>
		<Button onclick={() => (open = true)}>Open modal {open}</Button>
		<Modal bind:open header="Laborum proident id ullamco">
			<BodyLong spacing={true}>
				Culpa aliquip ut cupidatat laborum minim quis ex in aliqua. Qui incididunt dolor do ad ut.
				Incididunt eiusmod nostrud deserunt duis laborum. Proident aute culpa qui nostrud velit
				adipisicing minim. Consequat aliqua aute dolor do sit Lorem nisi mollit velit. Aliqua
				exercitation non minim minim pariatur sunt laborum ipsum. Exercitation nostrud est laborum
				magna non non aliqua qui esse.
			</BodyLong>

			{#snippet footer()}
				<Button variant="secondary" onclick={() => (open = false)}>Close</Button>
			{/snippet}
		</Modal>
	</Story>

	<Story name="Nested" locked>
		<Button onclick={() => (open = true)}>Open nested modal</Button>
		<Modal bind:open header="Using nested modals">
			<Button onclick={() => (inner = true)}>Open inner modal</Button>
			<BodyLong spacing={true}>
				<br /><br />
				Inner modal is open {inner}
			</BodyLong>

			<Modal bind:open={inner} header="Inner modal opened">
				<BodyLong spacing={true}>
					Inner modal is open {inner}
				</BodyLong>
			</Modal>
		</Modal>
	</Story>
</Doc>
