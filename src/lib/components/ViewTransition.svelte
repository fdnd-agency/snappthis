<script>
    import Logo from "$lib/components/icons/LogoIcon.svelte"
    import MorphCamera from "$lib/components/animations/MorphCamera.svelte"
    import { gsap } from "gsap"
    import { onMount, createEventDispatcher  } from 'svelte'

    export let next;
    let listItem;
    // this is the timeline
    let tl; 
    const dispatch = createEventDispatcher();
    

    // function start redos the timeline
    export function start() {
        tl.restart();
    }

    onMount(() => {
        tl = gsap.timeline({ defaults: { duration: 0.4 }, paused: false});

        tl.set(".view-transition", { y: "200vh", x: "-100vw" })

        tl.from(".view-transition", { y: "200vh", x: "-100vw"})
        tl.from(".first-line", { x: "-200vw"})
        tl.from(".second-line", { x: "-200vw"})
        tl.from(".third-line", { x: "-200vw"})
        tl.from(".fourth-line", { x: "-200vw"})
        tl.to(".view-transition", { y: "-200vh", x: "100vw"})


        tl.eventCallback("onComplete", () => {
            dispatch("done", { next });  
        });
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
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
        z-index: 1;
        overflow: hidden;
        pointer-events: none;
    }

    .first-line {
        display: block;
        position: absolute;
        top: 100px;
        width: 200vw;
        height: 25px;
        background-color: var(--primary-color-lightest);
        z-index: 3;
    }

    .second-line {
        display: block;
        position: absolute;
        top: 150px;
        width: 200vw;
        height: 25px;
        background-color: var(--primary-color-lighter);
        z-index: 3;
    }

    .third-line {
        display: block;
        position: absolute;
        bottom: 100px;
        width: 200vw;
        height: 25px;
        background-color: var(--primary-color-lightest);
        z-index: 3;
    }

    .fourth-line {
        display: block;
        position: absolute;
        bottom: 150px;
        width: 200vw;
        height: 25px;
        background-color: var(--primary-color-lighter);
        z-index: 3;
    }
    </style>