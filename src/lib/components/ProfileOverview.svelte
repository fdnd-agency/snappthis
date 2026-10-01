<script>

import Star from '$lib/assets/icons/Star.svg';
import Male from '$lib/assets/icons/Male.svg';
import Groups from '$lib/assets/icons/Groups.svg';
import Snapps from '$lib/assets/icons/Snapps.svg';

</script>


<section>
  <h2>Naam</h2>

  <p class="details">
    <span>gender -</span>
    <span>born – </span>
    <span>@work</span>
  </p>

  <p>email</p>

  <ul>
    <li>
      <img src={Snapps} alt=""/>
      <span></span>
      <span>Snapp</span>
    </li>

    <li>
      <img src={Groups} alt=""/>
      <span></span>
      <span>Group</span>
    </li>

    <li>
      <img src={Star} alt="" />
      <span></span>
      <span>Star</span>
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
  background-color: var(--pill-link-bg-color);
  padding: var(--spacing-m);
}

/* .details {

} */

ul {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  list-style: none;
  margin-top: var(--spacing-m);
  gap: var(--spacing-s);
}

li {
  display: flex;
  flex-direction: column;
}





</style>
