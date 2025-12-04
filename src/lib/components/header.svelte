<script>

    // icons
    import GobackIcon from "./icons/GobackIcon.svelte";

    import Settings from "./icons/Settings.svelte";

    export let title = 'SnappThis';
    export let href;
</script>

<header class="header">

    <div class="left-icon">
        <GobackIcon 
        href={"/"}/>
    </div>

    <h1>{title}</h1>

    <div class="right-icon">
        <Settings />
    </div>

</header>

<style>
    .header {
        background-color: var(--primary-color);
        color: var(--neutral-color-100);
        height: 9%;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: sticky;
    }
</style>
