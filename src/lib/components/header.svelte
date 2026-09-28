<script>
    // Props control the content and optional elements of the header.
    let {
        title = '',
        showBackButton = false,
        showAddButton = false
    } = $props();
</script>

<header class="top-nav">
    {#if showBackButton}
        <!-- Back navigation -->
        <a href="/" class="go-back-link" aria-label="Go back">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <title>Go back</title>
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.6 14L18.8 2.8L16 0L0 16L16 32L18.8 29.2L7.6 18H32V14H7.6Z"
                />
            </svg>
        </a>
    {/if}

    <h1 class="title" >{title}</h1>

    {#if showAddButton}
        <!-- Add action -->
        <button
            type="button"
            class="add-button"
            aria-label="Add"
        >
            <svg
                class="right-center-icon"
                viewBox="0 0 36 36"
                aria-hidden="true"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M36 20.5714H20.5714V36H15.4286V20.5714H0V15.4286H15.4286V0H20.5714V15.4286H36V20.5714Z"
                />
            </svg>
        </button>
    {/if}
</header>

<style>
    header {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        padding-inline: var(--spacing-header-inline);
        height: var(--bar-height);
        background-color: var(--primary-color);
        color: var(--lightest-color);
        position: sticky;
        top: 0;
        z-index: 1;
    }

    .title {
        grid-column: 2;
        font-size: var(--font-size-m);
        width: max-content;
        justify-self: center;
    }

    details {
        grid-column: 2;
        font-size: var(--font-size-m);
        width: max-content;
        justify-self: center;
    }

    summary::marker {
        content: '';
    }

    /* Back button */
    .go-back-link {
        display: inline-block;
        transition: 0.1s;
        width: fit-content;

        @media (any-pointer: fine) {
            &:hover {
                scale: 1.15;
            }
        }

        svg {
            height: calc(var(--bar-height) * 0.40);
            width: auto;
            fill: var(--lightest-color);
        }
    }

    .add-button {
        grid-column: 3;
        justify-self: end;
    }

    /* Right-side action */
    .right-center-icon {
        display: block;
        justify-self: end;
        width: calc(var(--bar-height) * 0.40);
        height: auto;
        aspect-ratio: 1 / 1;
        fill: var(--lightest-color);
    }
</style>