<script>
    import Header from '$lib/components/Header.svelte'

    // icons
    import Star from '$lib/components/icons/StarIcon.svelte'
    import Tomato from '$lib/components/icons/TomatoIcon.svelte'
    import Heart from '$lib/components/icons/HeartIcon.svelte'

    import GridTwo from '$lib/components/icons/Grid2Icon.svelte'
    import GridThree from '$lib/components/icons/Grid3Icon.svelte'
    import GridFour from '$lib/components/icons/Grid4Icon.svelte'
    import GridFive from '$lib/components/icons/Grid5Icon.svelte'
    import ListView from '$lib/components/icons/ListviewIcon.svelte'

    let { data } = $props()
    const snaps = data.snaps[0].snaps
    const id = data.id
    const users = data.users
    const snapmap = data.snaps?.[0]

    // function to get the name
    const userMap = new Map(users.map((u) => [u.uuid, u.name]))
</script>

<svelte:head>
    <title>{snapmap.name}</title>
</svelte:head>

<Header title={snapmap.name}></Header>

<main>
    <div class="layout-navigation">
       
    </div>

</main>

<style>
    main {
        margin-bottom: 5%;
        display: grid;
        grid-template-columns: 20% 80%;
        font-family: 'Bariol Bold';

        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    }

    .layout-navigation {
        background-color: var(--neutral-color-80);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        height: 100%;
        padding: 1em;

        @media (max-width: 720px) {
            flex-direction: row;
            justify-content: center;
            gap: 1em;
        }

        p {
            font-family: 'Bariol bold';

            @media (max-width: 720px) {
                font-size: 12px;
            }
        }

        label {
            display: flex;
            gap: 1em;

            &:nth-of-type(3) {
                @media (max-width: 720px) {
                    display: none;
                }
            }

            &:nth-of-type(4) {
                @media (max-width: 720px) {
                    display: none;
                }
            }
        }

        input {
            display: none;
        }
    }

    .container {
        display: grid;
        gap: 2em;
        top: 0;
        list-style: none;
        margin: 1em;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 1em;
        overflow: scroll;
        height: 100vh;
        gap: 1em;
    }

    img {
        border-radius: 5%;
        width: 100%;
    }

    .snaps-grid1 {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }

    .snaps-grid2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .snaps-grid3 {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    .snaps-grid4 {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    .snaps-grid5 {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
    }

    .list-container {
        display: grid;
        grid-template-rows: 50% 40% 10%;
    }

    .feedback {
        display: flex;
        justify-content: flex-end;
    }

    .list.visible {
        display: grid;
        grid-template-columns: 30% 70%;
        padding: 1em;
    }

    .list-container {
        display: none;
    }

    .list-container.visible {
        display: block;
    }
</style>
