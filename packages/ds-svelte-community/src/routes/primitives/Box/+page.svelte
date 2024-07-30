<script lang="ts">
	import doc from "$lib/components/primitives/Box/Box.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { BodyLong, Box, VStack } from "$lib";
</script>

<Doc {doc}>
	<Story locked>
		<Box>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ipsum!</Box>
	</Story>

	<Story name="Background" locked>
		<VStack gap="4">
			<Box padding="4" background="surface-alt-3-subtle">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ipsum!
			</Box>
			<Box padding="4" background="surface-info-subtle">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ipsum!
			</Box>
			<Box padding="4" background="surface-success-subtle">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ipsum!
			</Box>
		</VStack>
	</Story>

	<Story name="Padding" locked>
		<VStack gap="4">
			<Box background="surface-neutral" padding="4">
				<Box background="surface-alt-3-subtle" padding="2">Static padding</Box>
			</Box>
			<Box background="surface-neutral" padding={{ xs: "2", md: "6" }}>
				<Box background="surface-alt-3-subtle" padding="2">Dynamic padding</Box>
			</Box>
		</VStack>
	</Story>

	<Story name="Padding inline" locked>
		<VStack gap="4">
			<Box background="surface-neutral" paddingInline="4">
				<Box background="surface-alt-3-subtle" padding="2">Padding inline</Box>
			</Box>
			<Box background="surface-neutral" paddingInline="4 16">
				<Box background="surface-alt-3-subtle" padding="2">Different inlineStart and inlineEnd</Box>
			</Box>
			<Box background="surface-neutral" paddingInline={{ xs: "4", md: "6 16" }}>
				<Box background="surface-alt-3-subtle" padding="2">Dynamic paddingInline</Box>
			</Box>
		</VStack>
	</Story>

	<Story name="Padding block" locked>
		<VStack gap="4">
			<Box background="surface-neutral" paddingBlock="4">
				<Box background="surface-alt-3-subtle" padding="2">Padding block</Box>
			</Box>
			<Box background="surface-neutral" paddingBlock="4 16">
				<Box background="surface-alt-3-subtle" padding="2">Different blockStart og blockEnd</Box>
			</Box>
			<Box background="surface-neutral" paddingBlock={{ xs: "4", md: "6 16" }}>
				<Box background="surface-alt-3-subtle" padding="2">Dynamic paddingBlock</Box>
			</Box>
		</VStack>
	</Story>

	<Story name="Border width" locked>
		<VStack gap="4">
			<Box background="surface-subtle" padding="4" borderWidth="2">border-width</Box>
			<Box background="surface-subtle" padding="4" borderWidth="2 5">Flexible border-width</Box>
		</VStack>
	</Story>

	<Story name="Border color" locked>
		<VStack gap="4">
			<Box background="surface-alt-3-subtle" borderColor="border-alt-3" padding="4" borderWidth="4">
				Alt-3
			</Box>
			<Box background="surface-info-subtle" borderColor="border-info" padding="4" borderWidth="4">
				Info
			</Box>
			<Box
				background="surface-success-subtle"
				borderColor="border-success"
				padding="4"
				borderWidth="4"
			>
				Success
			</Box>
		</VStack>
	</Story>

	<Story name="Border radius" locked>
		<VStack gap="4">
			<Box
				background="surface-subtle"
				borderColor="border-alt-3"
				padding="4"
				borderWidth="2"
				borderRadius="xlarge"
			>
				border-radius
			</Box>
			<Box
				background="surface-subtle"
				borderColor="border-alt-3"
				padding="4"
				borderWidth="2"
				borderRadius="xlarge xlarge 0 0"
			>
				Flexible border-radius
			</Box>
			<Box
				background="surface-subtle"
				borderColor="border-alt-3"
				padding="4"
				borderWidth="2"
				borderRadius={{ md: "large" }}
			>
				Dynamic border-radius
			</Box>
		</VStack>
	</Story>

	<Story name="Shadow" locked>
		<VStack gap="8">
			<Box background="surface-subtle" padding="4" borderRadius="large" shadow="xsmall">xsmall</Box>
			<Box background="surface-subtle" padding="4" borderRadius="large" shadow="small">small</Box>
			<Box background="surface-subtle" padding="4" borderRadius="large" shadow="medium">medium</Box>
			<Box background="surface-subtle" padding="4" borderRadius="large" shadow="large">large</Box>
		</VStack>
	</Story>

	<Story name="Panel" locked>
		<Box background="surface-subtle" padding="6">
			<BodyLong spacing>
				If you are fully or partially unemployed or laid off, you may be entitled to financial
				support from NAV.
			</BodyLong>
			<BodyLong spacing>NAV can also give you advice and guidance in your situation.</BodyLong>
			<BodyLong spacing>
				If you do not receive unemployment benefit, you may be entitled to measure allowance. This
				is a daily rate you receive on the days you participate in a labor market initiative. A
				labor market measure can, for example, be a course, job club or job training.
			</BodyLong>
		</Box>
	</Story>
</Doc>
