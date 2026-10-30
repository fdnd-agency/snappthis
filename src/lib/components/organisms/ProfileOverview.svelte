<script>

import Star from '$lib/assets/icons/Star.svg';
import Male from '$lib/assets/icons/Male.svg';
import Groups from '$lib/assets/icons/Groups.svg';
import Snapps from '$lib/assets/icons/Snapps.svg';

let { user,totalStars,totalSnaps } = $props();

// console.log(user);
</script>


<section>
  <h2>{user.name}</h2>

  <p class="profile-details">
    <span>{user.gender} -</span>
    <span>born in the 80's -</span>
    <span>{user.usecase}</span>
  </p>

  <p class="email">{user.email}</p>

  <ul>
    <li>
      <img src={Snapps} alt=""/>
      <span>{totalSnaps}</span>
      <span>snapps</span>
    </li>

    <li>
      <img src={Groups} alt=""/>
      <span>{user.groups.length}</span>
      <span>groups</span>
    </li>

    <li>
      <img src={Star} alt="" />
      <span>{totalStars}</span>
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
  background-color: var(--color-accent-blue-white-90);
  padding: var(--spacing-m);
}

.profile-details {
  margin-top: var(--spacing-xs);
} 

.email {
  margin-top: var(--spacing-xs);
}

ul {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  list-style: none;
  margin-top: var(--spacing-l);
  gap: var(--spacing-s);
}

li {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: var(--font-size-h5);
}

li img {
  height: 1.5rem;
  width: auto;
}

@media (min-width: 768px){
 li img {
  height: 1.9rem;
 }
}






</style>
