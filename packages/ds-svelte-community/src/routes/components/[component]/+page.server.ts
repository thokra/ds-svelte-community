import type { PageServerLoad } from "./$types";

export const load = (async ({ params }) => {
	return {
		component: params.component,
	};
}) satisfies PageServerLoad;
