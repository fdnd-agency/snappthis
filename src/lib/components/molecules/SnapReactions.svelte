<script>

let { reactions} = $props();

let likeCount =$derived (
    reactions.filter((reaction) => reaction.action === "like").length
);

let tomatoCount =$derived (
    reactions.filter((reaction) => reaction.action === "tomato").length
);

let starCount =$derived (
    reactions.filter((reaction) => reaction.action === "star").length
)


import Heart from "$lib/assets/Heart.svg";
import Tomato from "$lib/assets/Tomato.svg";
import StarProfile from "$lib/assets/StarProfile.svg";

</script>


<form method="POST" action="?/react">
    <button type="submit" name="action" value="like">
        <img src={Heart} alt="" />
        <span> {likeCount}</span>
    </button>

    <button type="submit" name="action" value="tomato">
        <img src={Tomato} alt="" />
        <span> {tomatoCount}</span>
    </button>


    <button type="submit" name="action" value="star">
        <img src={StarProfile} alt="" />
        <span> {starCount}</span>
    </button>
</form>