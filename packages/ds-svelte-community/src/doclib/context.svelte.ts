import type { Doc } from "@nais/vite-plugin-svelte-docs";
import { getContext, setContext, type Snippet } from "svelte";

const ctxKey = Symbol("doc-context");

export type Story = {
	name?: string;
	values: Record<string, unknown>;
};

export type Arguments = { [key: string]: unknown };

export type Template = Snippet<[Arguments]>;

export class Context {
	values = $state({});

	private _stories: Map<string, Story>;
	private _templates: Map<string, Template>;
	private _name: string;

	constructor(doc: Doc) {
		this._stories = new Map();
		this._templates = new Map();
		this._name = doc.name;
	}

	get name() {
		return this._name;
	}

	setStory(name: string, values: Record<string, unknown>) {
		this._stories.set(name, { name, values });
	}

	setSnippet(name: string, snippet: Template) {
		this._templates.set(name, snippet);
		console.log("setSnippet", name, snippet);
	}
}

export function setDocContext(context: Context) {
	return setContext(ctxKey, context);
}

export function getDocContext(): Context {
	return getContext(ctxKey);
}
