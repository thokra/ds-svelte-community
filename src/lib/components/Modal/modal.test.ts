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
			closeIconText: "Lukk modalvindu",
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
				compareAttrs(node, attr) {
					const tagName = node.tagName.toLowerCase();
					// Title ids are unique
					if (tagName === "title" && attr === "id") {
						return false;
					}

					if (tagName === "svg" && ["aria-labelledby"].includes(attr)) {
						return false;
					}

					return true;
				},
			},
		});
	});

	afterEach(cleanup);
});
