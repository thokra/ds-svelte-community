<script lang="ts">
	import Modal from "./Modal.svelte";
	import type { Props } from "./type";

	type $$Props = Props;
</script>

<Modal open={true}>
	<svelte:fragment slot="header">ModalHeader</svelte:fragment>

	<svelte:fragment slot="footer">ModalFooter</svelte:fragment>
	ModalContent
</Modal>
