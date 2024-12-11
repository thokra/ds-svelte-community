import { getContext, setContext } from "svelte";

export class ActionMenuRadioGroupContext {
	currentValue: unknown = $state();
	values: unknown[] = $state([]);

	setValue(value: unknown) {
		this.currentValue = value;
	}
}

const radioContextKey = Symbol("ActionMenuRadioGroup");

export function getRadioGroupContext() {
	return getContext<ActionMenuRadioGroupContext>(radioContextKey);
}

export function setRadioGroupContext(context: ActionMenuRadioGroupContext) {
	setContext(radioContextKey, context);
}
