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
    <div class="feedback-text">
    <p>Splat</p>
<p>You have thrown a tomato</p>
</div>
</div>
{/if}

{#if hasStarred}
<div class="feedback-star">
    <img src={StarActive} alt="star">
    <div class="feedback-text">
    <p>You have saved this snap!</p>
<p>Click the star again to remove it. </p>
    </div>
</div>
{/if}

<style>
.feedback-tomato, .feedback-star {
    display: flex;
    position: relative;
    /* background-color: var(--lightest-color); */
    background-color: lightgrey;
    padding: 1rem;
    gap: 0.5rem;
    width: 100%;
}

.feedback-text {
    display: flex;
    flex-direction: column;
}

.feedback-tomato::before, .feedback-star::before {
    content:'';
    position: absolute;
    top: -0.6em;
    /* right: 1em;
    transform: translateX(-50%);  */
    width: 1.2em;
    height: 0.6em;
    /* background-color: var(--lightest-color); */
    background-color: lightgrey;
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
    z-index: 10;
}

.feedback-tomato::before {
    right: 4.5rem;
}

.feedback-star::before {
    right: 2.3rem;
}

@media (min-width: 768px){
    .feedback-tomato::before {
        right: 4.9rem;
    }
}


.feedback-tomato p:first-of-type {
    text-transform: uppercase;
    font-weight: bold;
}


</style>