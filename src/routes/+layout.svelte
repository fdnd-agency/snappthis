<script>
	import favicon from '$lib/assets/favicon.svg';

	import '../global.css'
	import '../styleguide.css'

	import Header from '$lib/components/organisms/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
