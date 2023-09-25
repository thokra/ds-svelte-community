<script lang="ts">
	import { ErrorSummary, ErrorSummaryItem } from "$lib";
</script>

<ErrorSummary heading="Some errors occurred">
	<ErrorSummaryItem href="#1">Checkbox needs to be checked</ErrorSummaryItem>
	<ErrorSummaryItem href="#2">Textfield requires valid email</ErrorSummaryItem>
</ErrorSummary>
