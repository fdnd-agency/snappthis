<script>
	import favicon from "$lib/assets/favicon.svg";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<style>
	@font-face {
		font-family: "Bariol";
		src: url("$lib/assets/fonts/Bariol_Regular.otf") format("opentype");
	}
</style>
