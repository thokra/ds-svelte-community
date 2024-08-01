import { describe, expect, test } from "bun:test";
import { Generator } from "../../src/generator.js";

describe("keyof", () => {
	test("inline", async () => {
		const filename = "asdf.svelte";
		const code = `<script lang="ts">
    interface Elements {
      a: string;
      div: string;
    }

    type Props = {
      as: keyof Elements;
    };

    let props : Props = $props();
  </script>
  `;

		const gen = new Generator(require.resolve("svelte2tsx"));
		await gen.setup();
		gen.addSvelteFile(filename, code);

		const { doc } = gen.docFor(filename, false);
		expect(doc).toMatchSnapshot();
	});

	test("svelte elements", async () => {
		const filename = "asdf.svelte";
		const code = `<script lang="ts">
    import type { SvelteHTMLElements } from "svelte/elements";

    type Props = {
      as: keyof SvelteHTMLElements;
    };

    let props : Props = $props();
  </script>
  `;

		const gen = new Generator(require.resolve("svelte2tsx"));
		await gen.setup();
		gen.addSvelteFile(filename, code);

		const { doc } = gen.docFor(filename, false);
		expect(doc).toMatchSnapshot();
	});
});
