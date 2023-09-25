import type { DiffOptions } from "./htmldiff";

export const IgnoreKnownUnique: DiffOptions = {
	compareAttrs(node, attr) {
		const tag = node.tagName.toLowerCase();
		if (tag == "svg" && attr == "aria-labelledby") {
			return false;
		}
		if (tag == "title" && attr == "id") {
			return false;
		}
		return true;
	},
};
