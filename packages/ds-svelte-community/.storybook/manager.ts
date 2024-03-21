import { addons } from "@storybook/manager-api";

addons.setConfig({
	sidebar: {
		filters: {
			patterns: (item) => {
				if (item.title.startsWith("stories/pages/")) {
					console.log("Ignore", item);
					return false;
				}
				return !item.tags?.includes("hidden");
			},
		},
	},
});
