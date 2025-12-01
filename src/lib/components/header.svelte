<script>
    export let title = 'SnappThis'

    import {GobackIcon, }

    import Goback from '$lib/components/icons/GobackIcon.svelte'
</script>

<header class="header">

    <div class="left-icon">
        <a>
            <!-- goback icon -->
        </a>
    </div>

    <h1>{title}</h1>

    <div class="right-icon">
        <button>
            <!-- add icon -->

                <!-- dropdown add user -->
                <!-- dropdown add snappmap -->
                <!-- dropdown add group -->

            <!-- layout-icon -->
                <!-- dropdown layoutnavigation -->
                <!-- dropdown sort -->

            <!-- setings icon -->
                <!-- settings -->
        </button>
    </div>

</header>

<style>
    .header {
        background-color: var(--primary-color);
        color: var(--neutral-color-100);
        font-family: 'Bariol Bold';
        height: 10%;
        width: 100%;
        display: flex;
        justify-content: center;
    }
</style>
