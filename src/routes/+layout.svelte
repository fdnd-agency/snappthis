<script>
    import Header from '$lib/components/header.svelte'
    import favicon from '$lib/assets/favicon.svg'
    import NavBar from '$lib/components/NavBar.svelte'
    import { page } from '$app/state';

    let { children } = $props()
</script>



{@render children?.()}

<NavBar page={page.url.pathname}></NavBar>

<style>
    @import url('https://fonts.cdnfonts.com/css/bariol-bold');
    
    @font-face {
        font-family: 'Bariol';
        src: url('$lib/assets/fonts/Bariol_Regular.otf') format('opentype');
    }
</style>
