<script>

import Heart from "$lib/assets/Heart.svg";
import Tomato from "$lib/assets/Tomato.svg";
import StarProfile from "$lib/assets/StarProfile.svg";

</script>


<form method="POST" action="?/react">
    <button type="submit" name="action" value="like">
        <img src={Heart} alt="" />
    </button>

    <button type="submit" name="action" value="tomato">
        <img src={Tomato} alt="" />
    </button>


    <button type="submit" name="action" value="star">
        <img src={StarProfile} alt="" />
    </button>
</form>