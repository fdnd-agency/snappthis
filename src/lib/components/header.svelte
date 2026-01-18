<script>
    export let title = 'SnappThis'
    import Goback from '$lib/components/icons/GobackIcon.svelte'
</script>

<header class="header">

    <h1>{title}</h1>

</header>

<style>
    .header {
        background-color: var(--primary-color);
        color: var(--neutral-color-light);
        font-family: 'Bariol Bold';
        height: 10%;
        width: 100%;
        top: 0;
        display: flex;
        justify-content: center;
        z-index: 3;
        position: fixed;
    }
</style>
