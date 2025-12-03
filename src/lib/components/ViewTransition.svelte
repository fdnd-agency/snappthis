<script>
    import Logo from "$lib/components/icons/LogoIcon.svelte"
    import MorphCamera from "$lib/components/animations/MorphCamera.svelte"
    import { gsap } from "gsap"
    import { onMount } from 'svelte'

    onMount(() => {
        const tl = gsap.timeline({ defaults: { duration: 0.2 }, paused: true});

        tl.to(".view-transition", { y: "200vh", x: "100vw"})
        tl.from(".first-line", { x: "-200vw"})
        tl.from(".second-line", { x: "-200vw"})
        tl.from(".third-line", { x: "-200vw"})
        tl.from(".fourth-line", { x: "-200vw"})
        tl.to(".view-transition", { y: "-200vh", x: "100vw"})

        listItem.addEventListener('click', clickEvent);

        function clickEvent(event) {
            listItem.addEventListener('click',function() {
                tl.play()
            });
        }
    });

</script>    

    <div class="view-transition">
        <div class="first-line"></div>
        <div class="second-line"></div>
            <div class="middle-element">
                <MorphCamera />
            </div>
        <div class="third-line"></div>
        <div class="fourth-line"></div>
    </div>

    <style>
    .view-transition {
        background-color: #837879;
        color: var(--primary-color-lightest);
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 215%;
        width: 200%;
        top: -40vh;
        left: -40vw;
        z-index: 7;
        overflow: hidden;
        rotate: 45deg;
    }

    .middle-element {
        rotate: -45deg;
    }

    .first-line {
        display: block;
        position: absolute;
        top: 50px;
        width: 200vw;
        height: 25px;
        background-color: var(--primary-color-lightest);
        z-index: 3;
    }

    .second-line {
        display: block;
        position: absolute;
        top: 100px;
        width: 200vw;
        height: 25px;
        background-color: var(--primary-color-lighter);
        z-index: 3;
    }

    .third-line {
        display: block;
        position: absolute;
        bottom: 50px;
        width: 200vw;
        height: 25px;
        background-color: var(--primary-color-lightest);
        z-index: 3;
    }

    .fourth-line {
        display: block;
        position: absolute;
        bottom: 100px;
        width: 200vw;
        height: 25px;
        background-color: var(--primary-color-lighter);
        z-index: 3;
    }
    </style>