<script lang="ts">
	import Modal from "./Modal.svelte";
	import type { Props } from "./type";

	// type $$Props = Props;

	let open = true;
	let props: Omit<Omit<Omit<Props, "children">, "header">, "footer"> = $props();
</script>

<Modal {open} {...props}>
	{#snippet header()}ModalHeader{/snippet}
	{#snippet footer()}ModalFooter{/snippet}
	ModalContent
</Modal>
