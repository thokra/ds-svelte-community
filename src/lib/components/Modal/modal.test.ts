import { Modal as ReactModal } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import React from "react";
import { afterEach, describe, expect, it } from "vitest";
import Modal from "./Modal.test.svelte";
import type { Props } from "./type";

describe.concurrent("Modal", () => {
	it("renders with HTML similar to ds-react", () => {
		const props: Props = {
			open: true,
		};
		expect(render(Modal, props)).toMimicReact(ReactModal, {
			props: {
				open: props.open,
			},
			children: [
				React.createElement(ReactModal.Header, {
					children: ["ModalHeader"],
				}),
				React.createElement(ReactModal.Body, {
					children: ["ModalContent"],
				}),
				React.createElement(ReactModal.Footer, {
					children: ["ModalFooter"],
				}),
			],
			opts: {
				ignoreClasses: ["navds-modal--polyfilled"],
				ignoreElementFromB(tag) {
					// Ignore title tag
					if (tag.tagName.toLowerCase() === "title") {
						return true;
					}
					return false;
				},

				compareAttrs(node, attr) {
					const tagName = node.tagName.toLowerCase();
					// Because of changes with icons, we ignore aria-label(ledby) and path.d attributes
					if (tagName === "path" && attr === "d") {
						return false;
					}

					if (tagName === "svg" && ["aria-labelledby", "aria-label"].includes(attr)) {
						return false;
					}

					return true;
				},
			},
		});
	});

	afterEach(cleanup);
});
