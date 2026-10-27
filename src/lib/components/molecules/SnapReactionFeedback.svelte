<script>

let { reactions } =$props();

const userUuid ="5e9589a5-ebfa-4a99-87a6-010f2f571444";

let hasTomato =$derived (
    reactions.some((reaction) => 
    reaction.user === userUuid && reaction.action === "tomato"
)
);

let hasStarred =$derived (
    reactions.some((reaction) => 
    reaction.user === userUuid && reaction.action === "star"
)
);

import TomatoActive from "$lib/assets/icons/TomatoActive.svg"
import StarActive from "$lib/assets/icons/StarActive.svg";

</script>


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