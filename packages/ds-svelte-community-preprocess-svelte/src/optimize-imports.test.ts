import { describe, expect, it } from "bun:test";
import { optimizeImports } from ".";

describe("optimize-imports", () => {
	it("replaces components", () => {
		const script = `
		import { Button, Tab, Alert, Detail } from "@nais/ds-svelte-community";
		`;

		const pp = optimizeImports();

		expect(
			pp.script!({ content: script, filename: "src/+page.svelte" } as never),
		).toMatchSnapshot();
	});

	it("replaces components with options", () => {
		const script = `
		import { Button, Tab, Alert, Detail } from "$lib";
		`;

		const pp = optimizeImports({
			componentsImportPrefix: {
				match: "$lib",
				prefix: "$lib/",
			},
		});

		expect(
			pp.script!({ content: script, filename: "src/+page.svelte" } as never),
		).toMatchSnapshot();
	});

	it("replaces icons", () => {
		const script = `
		import { AirplaneIcon, CarIcon } from "@nais/ds-svelte-community/icons";
		`;

		const pp = optimizeImports();

		expect(
			pp.script!({ content: script, filename: "src/+page.svelte" } as never),
		).toMatchSnapshot();
	});

	it("replaces icons with options", () => {
		const script = `
		import { AirplaneIcon, CarIcon } from "$lib/icons";
		`;

		const pp = optimizeImports({
			iconImportPrefix: {
				match: "$lib/icons",
				prefix: "$lib/",
			},
		});

		expect(
			pp.script!({ content: script, filename: "src/+page.svelte" } as never),
		).toMatchSnapshot();
	});

	it("replaces mixed", () => {
		const script = `
		import { Button, Tab, Alert, Detail } from "@nais/ds-svelte-community";
		import { AirplaneIcon, CarIcon } from "@nais/ds-svelte-community/icons";
		`;

		const pp = optimizeImports();

		expect(
			pp.script!({ content: script, filename: "src/+page.svelte" } as never),
		).toMatchSnapshot();
	});

	it("replaces mixed with options", () => {
		const script = `
		import { Button, Tab, Alert, Detail } from "$lib";
		import { AirplaneIcon, CarIcon } from "$lib/icons";
		`;

		const pp = optimizeImports({
			componentsImportPrefix: {
				match: "$lib",
				prefix: "$lib/",
			},
			iconImportPrefix: {
				match: "$lib/icons",
				prefix: "$lib/",
			},
		});

		expect(
			pp.script!({ content: script, filename: "src/+page.svelte" } as never),
		).toMatchSnapshot();
	});

	it("doesn't do anything when importing star", () => {
		const script = `
		import * as icons from "$lib/icons";
		`;

		const pp = optimizeImports({
			componentsImportPrefix: {
				match: "$lib",
				prefix: "$lib/",
			},
			iconImportPrefix: {
				match: "$lib/icons",
				prefix: "$lib/",
			},
		});

		const d = pp.script!({ content: script, filename: "src/+page.svelte" } as never);
		console.log(d);
		expect(d).toMatchSnapshot();
	});
});
