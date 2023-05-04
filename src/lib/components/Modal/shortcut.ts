export type Params = {
	alt?: boolean;
	shift?: boolean;
	control?: boolean;
	code: string;
	bubble?: boolean;
	callback?: () => void;
};

export const shortcut = (node: HTMLElement, params: Params) => {
	let handler: (e: KeyboardEvent) => void;
	const removeHandler = () => window.removeEventListener("keydown", handler),
		setHandler = () => {
			removeHandler();
			if (!params) return;
			handler = (e) => {
				if (
					!!params.alt != e.altKey ||
					!!params.shift != e.shiftKey ||
					!!params.control != (e.ctrlKey || e.metaKey) ||
					params.code != e.code
				)
					return;

				if (!params.bubble) {
					e.preventDefault();
				}
				params.callback ? params.callback() : node.click();
			};
			window.addEventListener("keydown", handler);
		};
	setHandler();
	return {
		update: setHandler,
		destroy: removeHandler,
	};
};
