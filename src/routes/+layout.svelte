<script>
	import favicon from '$lib/assets/favicon.svg';

	import '../global.css'

	import Header from '$lib/components/header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
