<script>
    // components
    import Card from "./Card.svelte"
    import SortCard from "./SortCard.svelte"

    export let group = "SnappGroup";
</script>

<div class="sidebar">
    <!-- this component is not used yet -->
    <Card text={group}/>

    <!-- sort function is not working -->
        <div class="sort-function">
            <SortCard icon="clock"/>
            <SortCard icon="star" />
            <SortCard icon="tomato" />
        </div>
        <!-- layoutnavigation -->
</div>

<style>
    .sidebar {
        height: 100vh;
        padding: 0.5em;
        color: var(--primary-color);
    }

    .sort-function {
        display: flex;
    }
</style>
