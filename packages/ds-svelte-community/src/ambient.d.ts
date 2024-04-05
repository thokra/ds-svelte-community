declare module "*.svelte?doc" {
	type Unknown = {
		type: "unknown";
	};

	type SimpleType = {
		type: "string" | "number" | "boolean" | "undefined" | "null";
	};

	type Union = {
		type: "union";
		values: Type[];
	};

	type Literal = {
		type: "literal";
		value: string;
	};

	type PObject = {
		type: "object";
		properties: Prop[];
	};

	type PFunction = {
		type: "function";
		signature: string;
	};

	type Snippet = {
		type: "snippet";
		lets: SlotLet[];
	};

	type Interface = {
		type: "interface";
		name: string;
	};

	type Type =
		| Union
		| Unknown
		| Type[]
		| Literal
		| PObject
		| PFunction
		| Snippet
		| SimpleType
		| Interface;

	type SlotLet = {
		name: string;
		type: Type;
	};

	type Slots = {
		name: string;
		description?: string;
		lets: SlotLet[];
		snippet?: boolean;
		optional: boolean;
	};

	type Prop = {
		name: string;
		description?: string;
		type: Type;
		optional: boolean;
		default?: string;
	};

	type SvelteEvent = {
		name: string;
		description?: string;
		type?: Type;
		optional: boolean;
	};

	type Doc = {
		description: string;
		events: SvelteEvent[];
		slots: Slots[];
		props: Prop[];
	};

	const src: Doc;
	export default src;
}
