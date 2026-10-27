<script>
    // Props control the content and optional elements of the header.
    let {
        title = '',
        children,
        showBackButton = false,
        showAddButton = false,
        backUrl = '/',
        // Optioneel: met een addUrl wordt de + een link, zodat hij ook zonder JavaScript werkt
        addUrl = '',
        addLabel = 'Add',
        // true als het formulier open is: de + draait dan naar een x
        addOpen = false
    } = $props();
</script>

<header class="top-nav">
    {#if showBackButton}
        <!-- Back navigation -->
        <a href={backUrl} class="go-back-link" aria-label="Go back">
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
    <div class="header-actions">
        {@render children?.()}
    </div>

    {#if showAddButton && addUrl}
        <!-- + als link (alleen als er een addUrl is meegegeven). Zodat het formulier alleen op de Groups-pagina wordt getoond wanneer je op het plusje klikt. -->
        <a href={addUrl} class="add-button" class:open={addOpen} aria-label={addLabel}>
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
        </a>
    {:else if showAddButton}
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

    .header-actions {
        grid-column: 3;
        justify-self: end;
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

        &:focus-visible {
            outline: 3px solid var(--lightest-color);
            outline-offset: 4px;
        }
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

    /* Alleen animeren als de gebruiker geen minder beweging heeft ingesteld */
    @media (prefers-reduced-motion: no-preference) {
        .right-center-icon {
            transition: rotate var(--transition-duration);
        }
    }

    /* Formulier open: de + draait 45 graden en wordt een x */
    .add-button.open .right-center-icon {
        rotate: 45deg;
    }

    /* Formulier open: grijs driehoekje onderaan de header, recht onder de x (zoals in het design) */
    .add-button.open::after {
        content: '';
        position: absolute; /* ten opzichte van de header (die is sticky) */
        bottom: 0;
        /* midden van het icoon: padding van de header + halve icoonbreedte, min halve driehoekbreedte */
        right: calc(var(--spacing-header-inline) + var(--bar-height) * 0.2 - 0.6rem);
        width: 1.2rem;
        height: 0.6rem;
        background-color: var(--pill-link-bg-color);
        clip-path: polygon(50% 0, 100% 100%, 0 100%); /* knipt een driehoek uit het vlak */
    }
    
</style>