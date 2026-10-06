<script>

import Star from '$lib/assets/icons/Star.svg';
import Male from '$lib/assets/icons/Male.svg';
import Groups from '$lib/assets/icons/Groups.svg';
import Snapps from '$lib/assets/icons/Snapps.svg';

</script>


<section>
  <h2>Anne-Fleur Pietersen</h2>

  <p class="profile-details">
    <span>female -</span>
    <span>born in the 80's -</span>
    <span>@work</span>
  </p>

  <p class="email">anne-fleur@snappthis.com</p>

  <ul>
    <li>
      <img src={Snapps} alt=""/>
      <span>29</span>
      <span>snapps</span>
    </li>

    <li>
      <img src={Groups} alt=""/>
      <span>4</span>
      <span>groups</span>
    </li>

    <li>
      <img src={Star} alt="" />
      <span>0</span>
      <span>stars</span>
    </li>
  </ul>
</section>

<style>

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40vh;
  background-color: var(--pill-link-bg-color);
  padding: var(--spacing-m);
}

.profile-details {
  margin-top: 0.3rem;
} 

.email {
  margin-top: 0.3rem;
}

ul {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  list-style: none;
  margin-top: 2.5rem;
  gap: var(--spacing-s);
}

li {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:0.2rem;
  font-size: var(--font-size-s);
}

li img {
  height: 1.9rem;
  width: auto;
}






</style>
