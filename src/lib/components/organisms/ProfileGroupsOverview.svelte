<script>
  import Heart from "$lib/assets/Heart.svg";
  import Tomato from "$lib/assets/Tomato.svg";
  import StarProfile from "$lib/assets/StarProfile.svg";

  let { groups } = $props();
</script>

<section>

  {#each groups as group}

  <div class="top">
    <h3>
     {group.name}
    </h3>

    <ul>
      <li>
        <button type="button" aria-label="View likes">
          <img src={Heart} alt="" />
          <span>{group.likes}</span>
        </button>
      </li>

      <li>
        <button type="button" aria-label="View Tomatoes">
          <img src={Tomato} alt="" />
          <span>{group.tomatoes}</span>
        </button>
      </li>

      <li>
        <button type="button" aria-label="View Stars">
          <img src={StarProfile} alt="" />
          <span>{group.stars}</span>
        </button>
      </li>
    </ul>
  </div>

  <figure class="images">
    {#each group.snaps.slice(0,5) as snap}
    <img src={`https://fdnd-agency.directus.app/assets/${snap.picture}?width=400&format=webp&quality=80`}
    alt=""
    loading="lazy"
    />
    {/each}
  </figure>

  {/each}

</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .top {
    display: grid;
    grid-template-columns: minmax(0,1fr) auto;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: var(--spacing-s);
  }

  @media (min-width: 768px) {
    .top {
      padding-inline: 1rem ;
    }
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 400;
    color: var(--dark-text-color-on-light-bg);
    margin: 0;
    min-width: 0;
    transition: transform var(--transition-duration);
  }

  @media (min-width: 768px) {
    h3 {
      font-size: 1.6rem;
      transform-origin: left center;
    }
  }

  h3:hover {
    transform: scale(var(--hover-scale));
  }

  p {
    font-size: var(--font-size-s);
    color: var(--dark-text-color-on-light-bg);
    align-self: flex-start;
    padding-inline: var(--spacing-s);
    margin: 0;
    height: 5dvh;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  @media (min-width: 768px){
    ul {
      gap: var(--spacing-s);
    }
  }

  li {
    list-style: none;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0;
    cursor: pointer;
  }

  button img {
    width: 1.1em;
    height: 1.1em;
    object-fit: contain;
  }

  @media (min-width: 768px) {
   button img {
     width: 1.4em;
     height: 1.4em;
     }
  }

  button:focus-visible {
  outline: 2px solid var(--accent-color-on-light-bg) ;
  outline-offset: 0.2rem;
  }

  .images {
    display: flex;
    width: 100%;
  }

  .images img {
    width: 20%;
    aspect-ratio: 1;
    object-fit: cover;
    border: 1px solid white;
    transition: var(--transition-duration);
  }

  .images img:hover {
    transform: translateY(-0.3rem);
  }
</style>
