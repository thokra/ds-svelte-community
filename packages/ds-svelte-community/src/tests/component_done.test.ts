import * as allSvelte from "$lib";
import * as allReact from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";

describe("which components are implemented", () => {
	// Known missing components contains a list of components that are not implemented in Svelte yet.
	// These are listed to allow the test to pass, but we want to keep track of them.
	// The test will fail if we have the component, but it's still listed here.
	const missingComponents: string[] = [
		"Bleed",
		"Box",
		"VStack",
		"Chat",
		"ChatBubble",
		"DatePicker",
		"DatePickerInput",
		"DatePickerStandalone",
		"Dropdown",
		"DropdownMenu",
		"DropdownToggle",
		"ExpansionCard",
		"ExpansionCardContent",
		"ExpansionCardDescription",
		"ExpansionCardHeader",
		"ExpansionCardTitle",
		"HGrid",
		"HStack",
		"Hide",
		"Ingress",
		"InternalHeader",
		"InternalHeaderButton",
		"InternalHeaderTitle",
		"InternalHeaderUser",
		"InternalHeaderUserButton",
		"List",
		"ListItem",
		"MonthPicker",
		"MonthPickerInput",
		"MonthPickerStandalone",
		"Page",
		"PageBlock",
		"PopoverContent",
		"Provider",
		"Radio",
		"RadioGroup",
		"ReadMore",
		"Show",
		"Spacer",
		"Stack",
		"TableColumnHeader",
		"TableExpandableRow",
		"Textarea",
		"Timeline",
		"TimelinePeriod",
		"TimelinePin",
		"TimelineRow",
		"TimelineZoom",
	];

	// Names that differ between Svelte and React in the format { svelte: react }
	const alteredNames: {
		[A in keyof typeof allSvelte]?: string;
	} = {
		Tr: "TableRow",
		Td: "TableDataCell",
		Th: "TableHeaderCell",
		Tbody: "TableBody",
		Thead: "TableHeader",

		RemovableChip: "ChipsRemovable",
		ToggleChip: "ChipsToggle",
		Step: "StepperStep",
		Tab: "TabsTab",
		TabList: "TabsList",
		TabPanel: "TabsPanel",
	};

	// Ignored components are components that we don't want to implement in Svelte, or is implmented in a different way (e.g. slots)
	const ignoredComponents: string[] = [
		"AccordionHeader", // Slot
		"AccordionContent", // Slot
		"ModalHeader", // Slot
		"ModalBody", // Slot
		"ModalFooter", // Slot

		"Cell", // Deprecated
		"Grid", // Deprecated,

		"ContentContainer", // ??
	];

	const reactComponents = Object.keys(allReact).filter(
		(key) => isFirstLetterUppercase(key) && !key.includes("UNSAFE") && !key.includes("Context"),
	);
	const reactNestedComponents = reactComponents.flatMap((comp) => {
		const nested = Object.keys((allReact as never)[comp]);
		return nested
			.filter(
				(key) =>
					!key.startsWith("use") &&
					["render", "$$typeof"].indexOf(key) < 0 &&
					isFirstLetterUppercase(key),
			)
			.map((nestedComp) => `${comp}${nestedComp}`);
	});

	const targetReact = [...reactComponents, ...reactNestedComponents]
		.filter((key) => !ignoredComponents.includes(key))
		.filter((key) => !missingComponents.includes(key));

	const targetSvelte = Object.keys(allSvelte).map((key) => {
		if (alteredNames[key as never]) {
			return alteredNames[key as never];
		}
		return key;
	});

	it("should include expected components", () => {
		const missing = targetReact.filter((key) => !targetSvelte.includes(key)).sort();
		expect(missing).toEqual([]);
	});

	it("should not include unexpected components", () => {
		const dontWant = targetSvelte.filter((key) => !targetReact.includes(key)).sort();
		expect(dontWant).toEqual([]);
	});
});

function isFirstLetterUppercase(str: string) {
	return str[0] === str[0].toUpperCase();
}
