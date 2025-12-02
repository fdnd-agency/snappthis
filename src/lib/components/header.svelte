<script>

    // icons
    import GobackIcon from "./icons/GobackIcon.svelte";

    import Settings from "./icons/Settings.svelte";

    export let title = 'SnappThis';
</script>

<header class="header">

    <div class="left-icon">
        <GobackIcon />
    </div>

    <h1>{title}</h1>

    <div class="right-icon">

        <Settings />
            <!-- add icon -->
                <!-- create component -->

            <!-- current state: layout-icon -->
                <!-- layout component -->

            <!-- setings icon -->
                <!-- settings component -->
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
