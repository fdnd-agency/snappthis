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
import HeartWhite from "$lib/assets/icons/HeartWhite.svg";
import TomatoActive from "$lib/assets/icons/TomatoActive.svg"
import TomatoWhite from "$lib/assets/icons/TomatoWhite.svg";
import StarActive from "$lib/assets/icons/StarActive.svg"
import StarWhite from "$lib/assets/icons/StarWhite.svg";

</script>


<form method="POST" action="?/react">
    <button type="submit" name="action" value="like" aria-pressed="{hasLiked}">
        <img src={hasLiked ? HeartActive : HeartWhite} alt="" />
        <span> {likeCount}</span>
    </button>

    <button type="submit" name="action" value="tomato" aria-pressed={hasTomato}>
        <img src={hasTomato ? TomatoActive : TomatoWhite} alt="" />
        <span> {tomatoCount}</span>
    </button>


    <button type="submit" name="action" value="star" aria-pressed={hasStarred} >
        <img src={hasStarred ? StarActive :StarWhite} alt="" />
        <span> {starCount}</span>
    </button>
</form>


<style>

form {
    display: flex;
}

button {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.25rem;
}

button img {
    width: 1.1em;
    height: 1.1em;
    object-fit: contain;
}

@media (min-width: 768px) {
    button img {
        width: 1.4em;
        height: 1.4em;
    }
}



</style>