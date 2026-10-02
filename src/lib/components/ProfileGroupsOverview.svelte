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

  <fig>
    <a>
      <img />
    </a>
  </fig>

  <h3></h3>

  <!-- <p>no snapps yet</p> -->
</section>

<style>

section {
    display: flex;
    align-items: center;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

ul {
  display: flex;
  justify-content: space-between;
}

li {
    list-style: none;
}

</style>
