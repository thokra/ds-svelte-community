<script lang="ts">
	interface Props {
		label?: string;
	}

	let { label = "Deactivate" }: Props = $props();
</script>

<svg
	width="12"
	height="10"
	viewBox="0 0 12 10"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	focusable="false"
	role="img"
	aria-hidden="true"
	aria-label={label}
>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M11.2674 0.647802C11.8762 1.20971 11.9141 2.1587 11.3522 2.76743L5.35221 9.26743C5.07531 9.56739 4.68813 9.74155 4.27998 9.74971C3.87184 9.75787 3.478 9.59933 3.18934 9.31067L0.68934 6.81067C0.103553 6.22488 0.103553 5.27513 0.68934 4.68935C1.27513 4.10356 2.22487 4.10356 2.81066 4.68935L4.20673 6.08541L9.14779 0.732587C9.7097 0.123856 10.6587 0.0858967 11.2674 0.647802Z"
		fill="currentColor"
	/>
</svg>
