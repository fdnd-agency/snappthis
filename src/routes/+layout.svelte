<script>
    import favicon from '$lib/assets/favicon.svg'

    let { children } = $props()
</script>

{@render children?.()}

<style>
    @import url('https://fonts.cdnfonts.com/css/bariol-bold');
    
    @font-face {
        font-family: 'Bariol';
        src: url('$lib/assets/fonts/Bariol_Regular.otf') format('opentype');
    }
</style>
