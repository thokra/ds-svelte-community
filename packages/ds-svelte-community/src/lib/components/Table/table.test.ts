import { bunmatch } from "$testlib/bunmatch";
import { Table as ReactTable } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import React from "react";
import { afterEach, describe, expect, it } from "vitest";
import Table from "./Table.test.svelte";

describe("Table", () => {
	it("renders with HTML similar to ds-react", async () => {
		const data = [
			{
				col1: "val1",
				col2: "val2",
			},
			{
				col1: "val1",
				col2: "val2",
			},
			{
				col1: "val1",
				col2: "val2",
			},
			{
				col1: "val1",
				col2: "val2",
			},
			{
				col1: "val1",
				col2: "val2",
			},
		];

		expect(
			await bunmatch(render(Table, { data }), ReactTable, {
				props: {},
				children: [
					React.createElement(ReactTable.Header, {}, [
						React.createElement(
							ReactTable.Row,
							{ key: "head" },
							Object.keys(data[0]).map((key) => {
								return React.createElement(
									ReactTable.HeaderCell,
									{ scope: "col", key: `h-${key}` },
									key,
								);
							}),
						),
					]),
					React.createElement(ReactTable.Body, { key: "body" }, [
						data.map((row, index) => {
							return React.createElement(
								ReactTable.Row,
								{ key: index },
								Object.values(row).map((value, key) => {
									if (key == 0) {
										return React.createElement(ReactTable.HeaderCell, { key, scope: "row" }, value);
									}
									return React.createElement(ReactTable.DataCell, { key }, value);
								}),
							);
						}),
					]),
				],
				// opts: {
				// 	compareAttrs(node, attr) {
				// 		// Remove attrs known to be unique
				// 		if (["id", "aria-describedby", "for"].includes(attr)) {
				// 			return false;
				// 		}
				// 		return true;
				// 	},
				// },
			}),
		).toBeTruthy();
	});

	afterEach(cleanup);
});
