<script>

import Heart from '$lib/assets/Heart.svg';
import Tomato from '$lib/assets/Tomato.svg';
import StarProfile from '$lib/assets/StarProfile.svg';

</script>

<section>

    <div class="top">

  <h3>
    Westerpark
    <!-- <a></a> -->
  </h3>

  <ul>
    <li>
        <img src={Heart} alt="">
      <span>0</span>
    </li>

    <li>
    <img src={Tomato} alt="">
      <span>0</span>
    </li>

    <li>
        <img src={StarProfile} alt="">
      <span>0</span>
    </li>
  </ul>

</div>

  <figure class="images">
    <!-- <a> -->
        <img src="https://picsum.photos/300/200?random=1" alt="Tijdelijke afbeelding" />
        <img src="https://picsum.photos/300/200?random=2" alt="Tijdelijke afbeelding" />
        <img src="https://picsum.photos/300/200?random=3" alt="Tijdelijke afbeelding" />
        <img src="https://picsum.photos/300/200?random=4" alt="Tijdelijke afbeelding" />
        <img src="https://picsum.photos/300/200?random=5" alt="Tijdelijke afbeelding" />
    <!-- </a> -->
  </figure>

  <h3></h3>

  <!-- <p>no snapps yet</p> -->
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
  font-size: var(--font-size-m);
}

h3:hover {
 transform: scale(var(--hover-scale));
 transition: var(--transition-duration) ;
}

ul {
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-s);
}

li {
    display: flex;
    list-style: none;
    align-items: center;
    gap: 0.4rem;
}

li img {
    width: 1.2em;
    height: 1.2em;
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
