<script>
    // card components
    import Card from "./Card.svelte"
    import SortCard from "./SortCard.svelte"

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
