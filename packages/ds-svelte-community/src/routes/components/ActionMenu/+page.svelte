<script lang="ts">
	import doc from "$lib/components/ActionMenu/ActionMenu.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Alert, Button, Table, Tbody, Td, Th, Thead, Tr } from "$lib";
	import ActionMenu from "$lib/components/ActionMenu/ActionMenu.svelte";
	import ActionMenuCheckboxItem from "$lib/components/ActionMenu/ActionMenuCheckboxItem.svelte";
	import ActionMenuDivider from "$lib/components/ActionMenu/ActionMenuDivider.svelte";
	import ActionMenuGroup from "$lib/components/ActionMenu/ActionMenuGroup.svelte";
	import ActionMenuItem from "$lib/components/ActionMenu/ActionMenuItem.svelte";
	import ActionMenuRadioGroup from "$lib/components/ActionMenu/ActionMenuRadioGroup.svelte";
	import ActionMenuRadioItem from "$lib/components/ActionMenu/ActionMenuRadioItem.svelte";
	import ActionMenuSub from "$lib/components/ActionMenu/ActionMenuSub.svelte";
	import {
		BarChartIcon,
		ChevronDownIcon,
		HandshakeIcon,
		MagnifyingGlassIcon,
		MenuElipsisVerticalIcon,
		PersonGroupIcon,
		PersonIcon,
	} from "$lib/icons";

	const data = [
		{
			id: "03121",
			status: "Avslått",
		},
		{
			id: "16066",
			status: "Mottatt",
		},
		{
			id: "18124",
			status: "Godkjent",
		},
		{
			id: "24082",
			status: "Mottatt",
		},
	];

	let views = $state({
		started: true,
		fnr: false,
		tags: true,
	});
	let rows = $state(5);

	const handleCheckboxChange = (checkboxId: string, checked: boolean) => {
		console.log(checkboxId, checked);
	};
</script>

<Doc {doc}>
	{#snippet extraDescription()}
		<Alert variant="warning">
			This component only includes the CSS from the React ActionMenu component and not a migration
			of the logic. It is implemented using a CSS draft specification, which is currently only
			<a href="https://caniuse.com/css-anchor-positioning">
				supported in Chrome and Chromium-based browsers.
			</a>
		</Alert>
	{/snippet}

	<Story>
		<ActionMenu>
			{#snippet trigger(props)}
				<Button variant="secondary-neutral" {...props}>
					{#snippet iconRight()}
						<ChevronDownIcon aria-hidden="true" />
					{/snippet}
					Click me
				</Button>
			{/snippet}

			<ActionMenuGroup label="Systemer og oppslagsverk">
				<ActionMenuItem>A-inntekt</ActionMenuItem>
				<ActionMenuItem>Aa-registeret</ActionMenuItem>
				<ActionMenuItem>Gosys</ActionMenuItem>
				<ActionMenuItem>Modia Sykefraværsoppfølging</ActionMenuItem>
				<ActionMenuItem>Modia Personoversikt</ActionMenuItem>
			</ActionMenuGroup>
		</ActionMenu>
	</Story>

	<Story name="Groups">
		<ActionMenu>
			{#snippet trigger(props)}
				<Button variant="secondary-neutral" {...props}>
					{#snippet iconRight()}
						<ChevronDownIcon aria-hidden="true" />
					{/snippet}
					Click me
				</Button>
			{/snippet}
			<ActionMenuGroup label="Gosys">
				<ActionMenuItem icon={PersonIcon}>Personoversikt</ActionMenuItem>
				<ActionMenuItem icon={PersonGroupIcon}>Arbeidsgiveroversikt</ActionMenuItem>
				<ActionMenuItem icon={HandshakeIcon}>Samhandlere</ActionMenuItem>
				<ActionMenuItem icon={BarChartIcon}>Oppgavestatistikk</ActionMenuItem>
				<ActionMenuItem icon={MagnifyingGlassIcon}>Søk journalpost</ActionMenuItem>
			</ActionMenuGroup>
			<ActionMenuDivider />
			<ActionMenuGroup label="Systemer og oppslagsverk">
				<ActionMenuItem>A-inntekt</ActionMenuItem>
				<ActionMenuItem>Aa-registeret</ActionMenuItem>
				<ActionMenuItem>Modia</ActionMenuItem>
			</ActionMenuGroup>
		</ActionMenu>
	</Story>

	<Story name="Shortcuts">
		<ActionMenu>
			{#snippet trigger(props)}
				<Button variant="secondary-neutral" {...props}>
					{#snippet iconRight()}
						<ChevronDownIcon aria-hidden="true" />
					{/snippet}
					Click me
				</Button>
			{/snippet}
			<ActionMenuGroup label="Gosys">
				<ActionMenuItem shortcut="Ctrl+A">Personoversikt</ActionMenuItem>
				<ActionMenuItem shortcut="Ctrl+K">Arbeidsgiveroversikt</ActionMenuItem>
				<ActionMenuItem shortcut="Ctrl+S">Samhandlere</ActionMenuItem>
				<ActionMenuItem shortcut="Ctrl+E">Oppgavestatistikk</ActionMenuItem>
				<ActionMenuItem shortcut="Ctrl+L">Søk journalpost</ActionMenuItem>
			</ActionMenuGroup>
			<ActionMenuDivider />
			<ActionMenuGroup label="Systemer og oppslagsverk">
				<ActionMenuItem>A-inntekt</ActionMenuItem>
				<ActionMenuItem>Aa-registeret</ActionMenuItem>
				<ActionMenuItem>Modia</ActionMenuItem>
			</ActionMenuGroup>
		</ActionMenu>
	</Story>

	<Story name="Submenu">
		<Table>
			<Thead>
				<Tr>
					<Th scope="col">ID</Th>
					<Th scope="col">Status</Th>
					<Th />
				</Tr>
			</Thead>
			<Tbody>
				{#each data as { id, status }, i}
					<Tr key={i + status} shadeOnHover={false}>
						<Th scope="row">{id}</Th>
						<Td>{status}</Td>
						<Td align="right">
							<ActionMenu align="end">
								{#snippet trigger(props)}
									<Button variant="tertiary-neutral" size="small" {...props}>
										{#snippet iconLeft()}
											<MenuElipsisVerticalIcon title="Saksmeny" />
										{/snippet}
									</Button>
								{/snippet}
								<ActionMenuGroup label={`Sak #${id}`}>
									<ActionMenuItem onSelect={console.info}>Ta sak</ActionMenuItem>
									<ActionMenuSub trigger="Endre status">
										<ActionMenuItem onSelect={console.info}>Avslått</ActionMenuItem>
										<ActionMenuItem onSelect={console.info}>Godkjent</ActionMenuItem>
										<ActionMenuSub trigger="Andre valg">
											<ActionMenuItem onSelect={console.info}>Til godkjenning</ActionMenuItem>
											<ActionMenuItem onSelect={console.info}>Under behandling</ActionMenuItem>
											<ActionMenuItem onSelect={console.info}>Under kontroll</ActionMenuItem>
										</ActionMenuSub>
									</ActionMenuSub>
									<ActionMenuSub trigger="Tildel saksbehandler">
										<ActionMenuGroup label="Saksbehandlere">
											<ActionMenuItem onSelect={console.info}>Ola Normann</ActionMenuItem>
											<ActionMenuItem onSelect={console.info}>Bo Ramberg</ActionMenuItem>
											<ActionMenuItem onSelect={console.info} disabled>Ole Olsen</ActionMenuItem>
											<ActionMenuItem onSelect={console.info} disabled>
												Janne Nilssen
											</ActionMenuItem>
											<ActionMenuItem onSelect={console.info}>Karin Jakobsen</ActionMenuItem>
											<ActionMenuItem onSelect={console.info}>Kari Nordmann</ActionMenuItem>
										</ActionMenuGroup>
									</ActionMenuSub>

									<ActionMenuDivider />

									<ActionMenuItem variant="danger" onSelect={console.info}>
										Slett sak
									</ActionMenuItem>
								</ActionMenuGroup>
							</ActionMenu>
						</Td>
					</Tr>
				{/each}
			</Tbody>
		</Table>
	</Story>

	<Story name="Filter">
		<ActionMenu>
			{#snippet trigger(props)}
				<Button variant="secondary-neutral" icon={ChevronDownIcon} iconPosition="right" {...props}>
					Filter
				</Button>
			{/snippet}
			<ActionMenuGroup label="Kolonner">
				<ActionMenuCheckboxItem
					checked={Object.values(views).every(Boolean)
						? true
						: Object.values(views).some(Boolean)
							? "indeterminate"
							: false}
				>
					Velg alle
				</ActionMenuCheckboxItem>
				<ActionMenuCheckboxItem
					bind:checked={views.started}
					onchange={(checked) => handleCheckboxChange("started", checked)}
				>
					Oppfølging startet
				</ActionMenuCheckboxItem>
				<ActionMenuCheckboxItem
					bind:checked={views.fnr}
					onchange={(checked) => handleCheckboxChange("fnr", checked)}
				>
					Fødselsnummer
				</ActionMenuCheckboxItem>
				<ActionMenuCheckboxItem
					bind:checked={views.tags}
					onchange={(checked) => handleCheckboxChange("tags", checked)}
				>
					Tags
				</ActionMenuCheckboxItem>
			</ActionMenuGroup>
			<ActionMenuDivider />
			<ActionMenuRadioGroup value={rows} label="Rader per side">
				<ActionMenuRadioItem value="5">5</ActionMenuRadioItem>
				<ActionMenuRadioItem value="10">10</ActionMenuRadioItem>
				<ActionMenuRadioItem value="25">25</ActionMenuRadioItem>
				<ActionMenuRadioItem value="50">50</ActionMenuRadioItem>
			</ActionMenuRadioGroup>
		</ActionMenu>
	</Story>
</Doc>
