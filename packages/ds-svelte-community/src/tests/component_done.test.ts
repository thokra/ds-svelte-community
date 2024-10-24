import * as allSvelte from "$lib";
import * as allReact from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";

describe("which components are implemented", () => {
	// Known missing components contains a list of components that are not implemented in Svelte yet.
	// These are listed to allow the test to pass, but we want to keep track of them.
	// The test will fail if we have the component, but it's still listed here.
	const missingComponents: string[] = [
		"ActionMenu",
		"ActionMenuCheckboxItem",
		"ActionMenuContent",
		"ActionMenuDivider",
		"ActionMenuGroup",
		"ActionMenuItem",
		"ActionMenuLabel",
		"ActionMenuRadioGroup",
		"ActionMenuRadioItem",
		"ActionMenuSub",
		"ActionMenuSubContent",
		"ActionMenuSubTrigger",
		"ActionMenuTrigger",
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
		"FileUpload",
		"FileUploadDropzone",
		"FileUploadItem",
		"FileUploadTrigger",
		"FormProgress",
		"FormProgressStep",
		"FormSummary",
		"FormSummaryAnswer",
		"FormSummaryAnswers",
		"FormSummaryEditLink",
		"FormSummaryHeader",
		"FormSummaryHeading",
		"FormSummaryLabel",
		"FormSummaryValue",
		"Ingress",
		"InternalHeader",
		"InternalHeaderButton",
		"InternalHeaderTitle",
		"InternalHeaderUser",
		"InternalHeaderUserButton",
		"LinkPanel",
		"LinkPanelDescription",
		"LinkPanelTitle",
		"List",
		"ListItem",
		"MonthPicker",
		"MonthPickerInput",
		"MonthPickerStandalone",
		"Panel",
		"PopoverContent",
		"Portal",
		"ProgressBar",
		"Provider",
		"Radio",
		"RadioGroup",
		"ReadMore",
		"Spacer",
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

	const allReactComponents = [...reactComponents, ...reactNestedComponents];
	const targetReact = allReactComponents
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

	describe("const lists should only contain names in use", () => {
		it("ignoredComponents excess", () => {
			const missing = ignoredComponents.filter((key) => !allReactComponents.includes(key)).sort();
			expect(missing).toEqual([]);
		});

		it("alteredNames excess", () => {
			const missing = Object.values(alteredNames).filter(
				(key) => !allReactComponents.includes(key),
			);
			expect(missing).toEqual([]);
		});

		it("missingComponents excess", () => {
			const missing = missingComponents.filter((key) => !allReactComponents.includes(key)).sort();
			expect(missing).toEqual([]);
		});
	});
});

function isFirstLetterUppercase(str: string) {
	return str[0] === str[0].toUpperCase();
}
