import type { ResponsiveProp } from "./types";

export function getResponsiveValue<T = string>(
	componentName: string,
	componentProp: string,
	responsiveProp?: ResponsiveProp<T>,
) {
	if (!responsiveProp) {
		return {};
	}

	if (typeof responsiveProp === "string") {
		return {
			[`--__ac-${componentName}-${componentProp}-xs`]: responsiveProp,
		};
	}

	return Object.fromEntries(
		Object.entries(responsiveProp).map(([breakpointAlias, responsiveValue]) => [
			`--__ac-${componentName}-${componentProp}-${breakpointAlias}`,
			responsiveValue,
		]),
	);
}

const translateExceptionToCSS = (exception: string) => {
	switch (exception) {
		case "px":
			return "1px";
	}
	return exception;
};

const translateTokenStringToCSS = (
	componentProp: string,
	tokenString: string,
	tokenSubgroup: string,
	tokenExceptions: string[],
	invert: boolean,
) => {
	return tokenString
		.split(" ")
		.map((x, _, arr) => {
			if (componentProp === "margin-inline" && x === "full") {
				const width = 100 / arr.length;
				return `calc((100vw - ${width}%)/-2)`;
			}

			let output = `var(--a-${tokenSubgroup}-${x})`;
			if (tokenExceptions.includes(x)) {
				output = translateExceptionToCSS(x);
			}
			if (invert) {
				if (x === "0") {
					return `0`;
				}
				return `calc(-1 * ${output})`;
			}
			return output;
		})
		.join(" ");
};

export function getResponsiveProps<T extends string>(
	componentName: string,
	componentProp: string,
	tokenSubgroup: string,
	responsiveProp?: ResponsiveProp<T>,
	invert = false,
	tokenExceptions: string[] = [],
) {
	if (!responsiveProp) {
		return {};
	}

	if (typeof responsiveProp === "string") {
		return {
			[`--__ac-${componentName}-${componentProp}-xs`]: translateTokenStringToCSS(
				componentProp,
				responsiveProp,
				tokenSubgroup,
				tokenExceptions,
				invert,
			),
		};
	}

	const styleProps: Record<string, string> = {};
	Object.entries(responsiveProp).forEach(([breakpointAlias, aliasOrScale]) => {
		styleProps[`--__ac-${componentName}-${componentProp}-${breakpointAlias}`] =
			translateTokenStringToCSS(
				componentProp,
				aliasOrScale,
				tokenSubgroup,
				tokenExceptions,
				invert,
			);
	});
	return styleProps;
}

export function combineStyles(
	props: SvelteRestProps,
	...args: Record<string, string | number | null>[]
): string {
	let styles = "";
	if (props.style) {
		styles += props.style;
	}

	return (
		styles +
		args
			.map((x) =>
				Object.entries(x)
					.filter(([, value]) => value !== null)
					.map(([key, value]) => `${key}: ${value};`)
					.join(""),
			)
			.join("")
	);
}
