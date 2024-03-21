import * as allSvelte from "$lib/icons";
import * as allReact from "@navikt/aksel-icons";
import { describe, expect, it } from "bun:test";

describe("which icons are implemented", () => {
	// Names that differ between Svelte and React in the format { svelte: react }
	const alteredNames: {
		[A in keyof typeof allSvelte]?: string;
	} = {};

	const reactIcons = Object.keys(allReact).filter(
		(key) => isFirstLetterUppercase(key) && !key.includes("UNSAFE") && !key.includes("Context"),
	);

	const targetSvelte = Object.keys(allSvelte).map((key) => {
		if (alteredNames[key as never]) {
			return alteredNames[key as never];
		}
		return key;
	});

	it("should include expected icons", () => {
		const missing = reactIcons.filter((key) => !targetSvelte.includes(key)).sort();
		expect(missing).toEqual([]);
	});

	it("should not include unexpected icons", () => {
		const dontWant = targetSvelte.filter((key) => !reactIcons.includes(key)).sort();
		expect(dontWant).toEqual([]);
	});
});

function isFirstLetterUppercase(str: string) {
	return str[0] === str[0].toUpperCase();
}
