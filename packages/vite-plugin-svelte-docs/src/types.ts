export type Unknown = {
	type: "unknown";
};

export type SimpleType = {
	type: "string" | "number" | "boolean" | "undefined" | "null";
};

export type Union = {
	type: "union";
	values: Type[];
};

export type Literal = {
	type: "literal";
	value: string;
};

export type PObject = {
	type: "object";
	properties: Prop[];
};

export type PFunction = {
	type: "function";
	signature: string;
};

export type Snippet = {
	type: "snippet";
	lets: SlotLet[];
};

export type Interface = {
	type: "interface";
	name: string;
};

export type Type =
	| Union
	| Unknown
	| Type[]
	| Literal
	| PObject
	| PFunction
	| Snippet
	| SimpleType
	| Interface;

export type SlotLet = {
	name: string;
	type: Type;
};

export type Slots = {
	name: string;
	description?: string;
	lets: SlotLet[];
	snippet?: boolean;
	optional: boolean;
};

export type Prop = {
	name: string;
	description?: string;
	type: Type;
	optional: boolean;
	default?: string;
	bindable?: boolean;
};

export type SvelteEvent = {
	name: string;
	description?: string;
	type?: Type;
	optional: boolean;
};

export type Doc = {
	name: string;
	description: string;
	events: SvelteEvent[];
	slots: Slots[];
	props: Prop[];
};
