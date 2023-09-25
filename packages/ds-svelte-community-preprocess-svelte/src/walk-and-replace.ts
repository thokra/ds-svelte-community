import { parse, walk } from "svelte/compiler";

interface WalkAndReplaceOptions {
	content: string;
	filename: string;
}

interface NodeMeta {
	start: number;
	end: number;
}

export interface NodeText {
	type?: "Text";
	raw: string;
}

interface NodeImportDeclaration extends NodeMeta {
	type: "ImportDeclaration";
	source: { value: string };
	specifiers: Array<{
		local: { name: string };
		imported: { name: string };
	}>;
}

export type Node = NodeImportDeclaration;
export function walkAndReplace(
	options: WalkAndReplaceOptions,
	replaceWith: (
		enter: { node: Node; parentNode: Node },
		replaceContent: (node: Node, replaceWith: string, replacee?: string) => void,
		getContent: (node: NodeMeta) => string,
	) => void,
) {
	let content = options.content;

	const ast = parse(`<script>${content}</script>`, {
		filename: options.filename,
	});

	let cursor = -1 * "<script>".length;

	function replaceContent(node: Node, replaceWith: string, replacee?: string) {
		const replaced = replacee ?? content.slice(node.start + cursor, node.end + cursor);
		content = content.replace(replaced, replaceWith);
		cursor += replaceWith.length - replaced.length;
	}

	function getContent(node: NodeMeta) {
		return content.slice(node.start + cursor, node.end + cursor);
	}

	walk(ast.instance as never, {
		enter(node, parentNode) {
			replaceWith.apply(this, [
				{ node: node as unknown as Node, parentNode: parentNode as unknown as Node },
				replaceContent,
				getContent,
			]);
		},
	});

	return content;
}
