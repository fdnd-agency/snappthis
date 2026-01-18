<script>
    import favicon from '$lib/assets/favicon.svg'
    import NavBar from '$lib/components/NavBar.svelte'
    import ViewTransition from '$lib/components/ViewTransition.svelte'
    import { page } from '$app/state';
    import { beforeNavigate, goto } from '$app/navigation'

    let { children } = $props()

    let transitionRef
    const nextPage = '/';

    function handleDone(e) {
        goto(e.detail.next);  
    }

    function handleClick() {
        transitionRef.next = '/' 
        transitionRef.start()    
    }
</script>

{@render children?.()}

<NavBar page={page.url.pathname}></NavBar>

<ViewTransition bind:this={transitionRef} on:done={handleDone} />

<style>
    @import url('https://fonts.cdnfonts.com/css/bariol-bold');
    
    @font-face {
        font-family: 'Bariol';
        src: url('$lib/assets/fonts/Bariol_Regular.otf') format('opentype');
    }
</style>
