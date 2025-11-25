<script>
    import { onMount } from 'svelte';
  import Card from '$lib/components/Card.svelte';

  export let picture;
  export let location;
  export let author;
  export let url;
  export let snap;

  let loaded = false;
</script>

<div class="snaps">
    <div>
        <div class="mask">
            <a href={`/${url}/${snap}`}>

                        {#if !loaded}
				            <div class="skeleton"></div>
			            {/if}

                        
                        {#if picture}
                        <picture class:loaded={loaded}>
                        <source
                            srcset={`https://fdnd-agency.directus.app/assets/${picture}?width=512&height=512&format=webp`}
                            type="image/webp"
                            loading="lazy"
                        />
                        <source
                            srcset={`https://fdnd-agency.directus.app/assets/${picture}?width=512&height=512&format=avif`}
                            type="image/avif"
                            loading="lazy"
                        />
                        <img
                            src={`https://fdnd-agency.directus.app/assets/${picture}?width=512&height=512`}
                            height="512"
                            width="512"
                            alt="example photo"
                            loading="lazy"
                            on:load={() => (loaded = true)}
                        />
                            {:else}
                        <img
                            src="/src/lib/assets/example/example-photo.webp"
                            height="512"
                            width="512"
                            alt="fallback photo"
                            loading="lazy"
                            on:load={() => (loaded = true)}
                        />
                        </picture>
                        {/if}
                    </a>
                </div>

                <div class="photo-card-list">
                    <Card 
                        text={author}
                    />
                    <Card 
                        text={location}
                    />
                </div>

    </div>
</div>

<style>

.snaps div {
    display: flex;
    flex-direction: column;
}

.snaps img {
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    overflow: hidden;
    border-radius:  clamp(8px, 4em, 24px);

    transform: translateY(100%);

    transition:
        transform 0.8s cubic-bezier(.25,.8,.25,1),
        opacity 0.5s ease-out;


    @media (max-width:1080px) {
        border-radius: 16px;
    }

    @media (max-width:720px) {
        border-radius: 8px;
    }
}



picture.loaded {
    transform: translateY(100%);
    opacity: 1;
}

.skeleton {
    position: absolute;
    inset: 0;
    background-size: 400% 100%;
    background-color: var(--neutral-color-90);
    animation: shimmer 2s infinite;
    z-index: 2;
}

.mask {
	overflow: hidden;
	position: relative;
	border-radius: 12px; 
}

.photo-card-list {
    display: none;
}

@keyframes shimmer {
    0% { opacity: 1;}
    50% { opacity: 0.5;}
    100% { opacity: 1;}
}
</style>
