<script>
    import Heart from "$lib/components/Heart.svelte";
    import Star from "$lib/components/Star.svelte";
    import Tomato from "$lib/components/Tomato.svelte";
    import Gallery from "./Gallery.svelte";

    let { snappMap } = $props();
</script>

<li>
    <div>
        <a href="/{snappMap.id}">{snappMap.name}</a>
        <ul>
            <li><Heart></Heart>15</li>
            <li><Tomato></Tomato>9</li>
            <li><Star></Star>2</li>
        </ul>
    </div>
    <ul>
        <li><Gallery></Gallery>{snappMap.persons.length}</li>
        <li>
            <img
                src="https://picsum.photos/200/200"
                height="200"
                width="200"
                alt=""
            />
        </li>
        <li>
            <img
                src="https://picsum.photos/201/201"
                height="200"
                width="200"
                alt=""
            />
        </li>
        <li>
            <img
                src="https://picsum.photos/202/202"
                height="200"
                width="200"
                alt=""
            />
        </li>
        <li>
            <img
                src="https://picsum.photos/203/203"
                height="200"
                width="200"
                alt=""
            />
        </li>
    </ul>
</li>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    li {
        margin: 2rem auto;
        padding: 1rem;
        width: 100%;
        max-width: 1000px;
        list-style: none;
        font-family: "Bariol", sans-serif;
    }

    ul {
        list-style: none;
        display: flex;
    }

    ul li {
       margin: 0;
       padding: 0;
    }

    a {
        text-decoration: none;
        color: black;
    }

    /* First row */
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-block: 1rem;
        font-size: clamp(1.25rem, 0.75rem + 1.5vw, 2rem);
    }

    ul:nth-of-type(1) {
        gap: 1rem;
    }

    ul:nth-of-type(1) li {
        display: flex;
        margin: 0;
        padding: 0;
        max-width: unset;
    }

    ul:nth-of-type(1) li :global(svg){
        height: 1.25em;
        width: 1.25em;
        padding-right: .15em;
    }

    /* Second row */
    div + ul {
        max-width: 100%;
        overflow-x: scroll;
    }

    div + ul li {
        aspect-ratio: 1 / 1;
        margin: 0;
        padding: 0;
        flex-shrink: 0;
        height: 100%;
        min-width: 6.25rem;
        width: calc(5rem + 6.6667vw);
        max-width: 12.5rem;
    }

    div + ul li img {
        width: 100%;
        object-fit: contain;
        height: auto;
        aspect-ratio: 1 / 1;
    }

    /* Second row: first block (gallery icon) */
    div + ul li:first-of-type {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #E9ECEE;
        font-size: clamp(1.25rem, 0.75rem + 1.5vw, 2rem);
    }

    div + ul li:first-of-type :global(svg) {
        height: 50%;
        width: 50%;
    }
</style>
