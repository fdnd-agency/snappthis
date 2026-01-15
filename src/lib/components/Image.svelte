<script>
    import { fetchPictures } from '$lib/components/index.js'
    import { onMount } from 'svelte'

    export let picture = []
</script>

<a>
    <picture>
        <img
            class="pic"
            src={`https://fdnd-agency.directus.app/assets/${picture}`}
            height="256"
            width="256"
            alt="example photo" />
    </picture>
</a>

<style>
    
.pic {
  width: 256px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}


</style>
