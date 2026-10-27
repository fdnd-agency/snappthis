<script>

let { reactions} = $props();

const userUuid ="5e9589a5-ebfa-4a99-87a6-010f2f571444";

let hasLiked =$derived (
    reactions.some((reaction) => 
    reaction.user === userUuid && reaction.action === "like"
)
);

let likeCount =$derived (
    reactions.filter((reaction) => reaction.action === "like").length
);

let hasTomato =$derived (
    reactions.some((reaction) => 
    reaction.user === userUuid && reaction.action === "tomato"
)
);

let tomatoCount =$derived (
    reactions.filter((reaction) => reaction.action === "tomato").length
);

let hasStarred =$derived (
    reactions.some((reaction) => 
    reaction.user === userUuid && reaction.action === "star"
)
);

let starCount =$derived (
    reactions.filter((reaction) => reaction.action === "star").length
)

import HeartActive from "$lib/assets/icons/HeartActive.svg";
import Heart from "$lib/assets/Heart.svg";
import TomatoActive from "$lib/assets/icons/TomatoActive.svg"
import Tomato from "$lib/assets/Tomato.svg";
import StarActive from "$lib/assets/icons/StarActive.svg"
import StarProfile from "$lib/assets/StarProfile.svg";

</script>


<form method="POST" action="?/react">
    <button type="submit" name="action" value="like" aria-pressed="{hasLiked}">
        <img src={hasLiked ? HeartActive : Heart} alt="" />
        <span> {likeCount}</span>
    </button>

    <button type="submit" name="action" value="tomato" aria-pressed={hasTomato}>
        <img src={hasTomato ? TomatoActive : Tomato} alt="" />
        <span> {tomatoCount}</span>
    </button>


    <button type="submit" name="action" value="star" aria-pressed={hasStarred} >
        <img src={hasStarred ? StarActive :StarProfile} alt="" />
        <span> {starCount}</span>
    </button>
</form>

{#if hasTomato}
<div class="feedback-tomato">
    <img src={TomatoActive} alt="tomato">
    <p>Splat</p>
<p>You have thrown a tomato</p>
</div>
{/if}

{#if hasStarred}
<div class="feedback-star">
    <img src={StarActive} alt="star">
    <p>You have saved this snap!</p>
<p>Click the star again to remove it. </p>
</div>
{/if}

<style>

.feedback-tomato {
    width: fit-content;
}

.feedback-tomato p:first-of-type {
    text-transform: uppercase;
    font-weight: bold;
}

</style>