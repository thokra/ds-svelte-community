<script lang="ts">
	import { omit } from "../helpers";
	import Modal from "./Modal.svelte";
	import type { Props } from "./type";

	export let open = true;

	type $$Props = Props;
</script>

<Modal {open} {...omit($$props, "open")}>
	<svelte:fragment slot="header">ModalHeader</svelte:fragment>

	<svelte:fragment slot="footer">ModalFooter</svelte:fragment>
	ModalContent
</Modal>
