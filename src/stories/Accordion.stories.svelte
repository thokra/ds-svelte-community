<script>
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import { Accordion, AccordionItem } from "$lib/components/Accordion";
	import Link from "$lib/components/Link.svelte";
</script>

<Meta title="ds-svelte/Accordion" component={Accordion} subcomponents={AccordionItem} />

<Template>
	<Accordion>
		<AccordionItem>
			<span slot="heading">Accordion header text</span>
			Magna aliquip aliquip fugiat nostrud nostrud velit pariatur veniam officia laboris voluptate officia
			pariatur. <Link href="#Lorem">Lorem est</Link> ex anim velit occaecat nisi qui nostrud sit consectetur
			consectetur officia nostrud ullamco. Est ex duis proident nostrud elit qui laborum anim minim eu
			eiusmod. Veniam in nostrud sunt tempor velit incididunt sint ex dolor qui velit id eu. Deserunt
			magna sunt velit in. Est exercitation id cillum qui do. Minim adipisicing nostrud commodo proident
			occaecat aliquip nulla anim proident reprehenderit. Magna ipsum officia veniam cupidatat duis veniam
			dolore reprehenderit mollit velit. Ut consequat commodo minim occaecat id pariatur. Nisi enim tempor
			laborum commodo. Tempor sit quis nostrud eu cupidatat sunt commodo reprehenderit irure deserunt
			eiusmod ipsum. Exercitation quis commodo cillum eiusmod eiusmod. Do laborum qui proident commodo
			adipisicing eiusmod id.
		</AccordionItem>

		<AccordionItem>
			<span slot="heading">Accordion header text</span>
			Magna aliquip aliquip fugiat nostrud nostrud velit pariatur veniam officia laboris voluptate officia
			pariatur. <Link href="#Lorem">Lorem est</Link> ex anim velit occaecat nisi qui nostrud sit consectetur
			consectetur officia nostrud ullamco. Est ex duis proident nostrud elit qui laborum anim minim eu
			eiusmod. Veniam in nostrud sunt tempor velit incididunt sint ex dolor qui velit id eu. Deserunt
			magna sunt velit in. Est exercitation id cillum qui do. Minim adipisicing nostrud commodo proident
			occaecat aliquip nulla anim proident reprehenderit. Magna ipsum officia veniam cupidatat duis veniam
			dolore reprehenderit mollit velit. Ut consequat commodo minim occaecat id pariatur. Nisi enim tempor
			laborum commodo. Tempor sit quis nostrud eu cupidatat sunt commodo reprehenderit irure deserunt
			eiusmod ipsum. Exercitation quis commodo cillum eiusmod eiusmod. Do laborum qui proident commodo
			adipisicing eiusmod id.
		</AccordionItem>
	</Accordion>
</Template>

<Story name="Default" />
