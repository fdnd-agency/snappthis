<script>
    // icons
    import GobackIcon from "./icons/GobackIcon.svelte";

    import Settings from "./icons/Settings.svelte";
    import Add from "./icons/PlusIcon.svelte";
    import Dropdown from './icons/Dropdown.svelte'
    import Card from "./Card.svelte"
    import SortCard from "./Sort-Card.svelte"

    export let group = "SnappGroup";
</script>

<div class="sidebar">
    <Card text={group}/>

        <div class="sort-function">
            <SortCard icon="clock"/>
            <SortCard icon="star" />
            <SortCard icon="tomato" />
        </div>

        <div class="layout-navigation">
            <Card text="large" icon="small"/>
            <Card text="medium"/>
            <Card text="small"/>
            <Card text="list" />
        </div>
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
