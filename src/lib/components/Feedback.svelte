<script>
    import { onMount } from 'svelte'

    import Heart from '$lib/components/icons/HeartIcon.svelte'
    import Star from '$lib/components/icons/StarIcon.svelte'
    import Tomato from '$lib/components/icons/TomatoIcon.svelte'

    onMount(async () => {
        const heartsAmount = document.querySelector('.feedback-heart');
        const starAmount = document.querySelector('.feedback-star');
        const tomatoAmount = document.querySelector('.feedback-tomato');

        const buttonTomato = document.querySelector('.tomato-button');
        const buttonStar = document.querySelector('.star-button');
        const buttonHeart = document.querySelector('.heart-button');

        let heartCount = 0; 
        let tomatoCount = 0;
        let starCount = 0;

        const fillHeart = document.querySelector('.heart-icon')
        const fillTomato = document.querySelector('.tomato-icon')
        const fillStar = document.querySelector('.star-icon')

            // Limit heart to max 1
            buttonHeart.addEventListener('click', () => {
            fillHeart.style.color = "green";
            buttonHeart.style.backgroundColor = "#6BB8DE";

            if (heartCount < 1) {
                heartCount = 1;
                heartsAmount.textContent = heartCount;
            }
            });

            // Tomato increments normally
            buttonTomato.addEventListener('click', () => {
                fillTomato.style.color = "red";
                buttonTomato.style.backgroundColor = "#6BB8DE";

            if (tomatoCount < 1) {
                tomatoCount = 1;
                tomatoAmount.textContent = tomatoCount;
            }
            });

            // Star increments normally
            buttonStar.addEventListener('click', () => {
                fillStar.style.color = "yellow";
                buttonStar.style.backgroundColor = "#6BB8DE";
            if (starCount < 1) {
                starCount = 1;
                starAmount.textContent = starCount;
            }
            });
    })

</script>

<div class="feedback-container">
<form class="feedback">
    <button class="heart-button">
        <label>
            <div class="heart-icon">
                <Heart />
            </div>
            <p class="feedback-heart"> 0 </p>
        </label>
    </button>

    <button class="star-button">
        <label>
            <div class="star-icon">
            <Star />
            </div>
            <p class="feedback-star"> 0 </p>
        </label>
    </button>

    <button class="tomato-button">
        <label>
            <div class="tomato-icon">
            <Tomato />
            </div>
            <p class="feedback-tomato"> 0 </p>
        </label>
    </button>
</form>
</div>

<style>
    .feedback-container {
        container-type: inline-size;
    }

    .feedback button {
        background-color: var(--neutral-color);
        color: var(--neutral-color-40);
        height: 3.5em;
        width: 3em;
        border-radius: 8px;
        font: 'Bariol';
        line-height: 0;
    }

    .tomato-icon, .heart-icon, .star-icon {
        display: flex;
        justify-content: center;
        position: absolute;
        
    }

    .feedback-tomato, .feedback-heart, .feedback-star {
        position: relative;
        top: 0.5em;

        font-size: 18px;
    }


@container (min-width: 720px) {
    .feedback button {
        background-color: var(--neutral-color);
        color: var(--neutral-color-40);
        height: 4em;
        width: 4em;
        border-radius: 8px;
        font: 'Bariol';
    }

    .feedback button label {
        display: flex;
        justify-content: center;
        gap: 1em;


    }

    .tomato-icon, .heart-icon, .star-icon {
        display: flex;
        align-items: center;
        scale: 1.5;
    }
}
</style>