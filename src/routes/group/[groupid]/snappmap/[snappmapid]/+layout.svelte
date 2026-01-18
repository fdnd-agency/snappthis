<script>
    import favicon from '$lib/assets/favicon.svg'

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
