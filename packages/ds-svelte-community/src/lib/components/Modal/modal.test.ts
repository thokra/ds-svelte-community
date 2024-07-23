import { bunmatch } from "$testlib/bunmatch";
import { Modal as ReactModal } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import React from "react";
import { afterEach, describe, expect, it } from "vitest";
import Modal from "./Modal.test.svelte";
import type { Props } from "./type";

describe("Modal", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: Props = {
			open: true,
			closeIconText: "Lukk",
		};
		expect(
			await bunmatch(render(Modal, props), ReactModal, {
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

						// We do some logic server side which adds an open attribute to the dialog
						if (tagName == "dialog" && attr == "open") {
							return false;
						}

						return true;
					},
				},
			}),
		).toBeTruthy();
	});

	afterEach(cleanup);
});
