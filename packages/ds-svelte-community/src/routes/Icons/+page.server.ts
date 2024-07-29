import type { PageServerLoad } from "./$types";

import metadata from "@navikt/aksel-icons/metadata";

interface Icon {
	name: string;
	category: string;
	sub_category: string;
	keywords: string[];
}

interface RetType {
	filled: Icon[];
	stroked: Icon[];
}

export const load: PageServerLoad = (): RetType => {
	const ret: RetType = { filled: [], stroked: [] };

	for (const icon of Object.values(metadata)) {
		const data = {
			name: icon.name,
			category: icon.category,
			sub_category: icon.sub_category,
			keywords: icon.keywords,
		};
		if (icon.variant.toLowerCase() === "fill") {
			ret.filled.push(data);
		} else {
			ret.stroked.push(data);
		}
	}

	return ret;
};
