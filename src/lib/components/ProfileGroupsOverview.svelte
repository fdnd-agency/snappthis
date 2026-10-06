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
      <!-- <a></a> -->
    </h3>

    <ul>
      <li>
        <button type="button" aria-label="View likes">
          <img src={Heart} alt="" />
          <span>0</span>
        </button>
      </li>

      <li>
        <button type="button" aria-label="View Tomatoes">
          <img src={Tomato} alt="" />
          <span>0</span>
        </button>
      </li>

      <li>
        <button type="button" aria-label="View Stars">
          <img src={StarProfile} alt="" />
          <span>0</span>
        </button>
      </li>
    </ul>
  </div>

  <figure class="images">
    {#each group.snap as snap}
    <img src={`https://fdnd-agency.directus.app/assets/${snap.picture}`}
    alt=""
    />
    {/each}
  </figure>

  {/each}
  <p>no snapps yet.</p>

</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: var(--spacing-s);
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--dark-text-color-on-light-bg);
    margin: 0;
  }

  h3:hover {
    transform: scale(var(--hover-scale));
    transition: var(--transition-duration);
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
    justify-content: space-between;
    gap: var(--spacing-s);
  }

  li {
    list-style: none;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0;
  }

  button img {
    width: 1.4em;
    height: 1.4em;
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
