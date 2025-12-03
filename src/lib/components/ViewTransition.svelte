<script>
    import Logo from "$lib/components/icons/LogoIcon.svelte"
    import MorphCamera from "$lib/components/animations/MorphCamera.svelte"
    import { gsap } from "gsap"

</script>    

    <div class="view-transition">
        <div class="first-line"></div>
        <div class="second-line"></div>
            <MorphCamera />
        <div class="third-line"></div>
        <div class="fourth-line"></div>
    </div>

    <style>
    .view-transition {
        background-color: var(--primary-color);
        color: var(--primary-color-lightest);
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
        z-index: 7;
        overflow: hidden;
    }

    .first-line {
        display: block;
        position: absolute;
        top: 50px;
        width: 100vw;
        height: 25px;
        background-color: var(--primary-color-lightest);
        z-index: 3;
    }

    .second-line {
        display: block;
        position: absolute;
        top: 100px;
        width: 100vw;
        height: 25px;
        background-color: var(--primary-color-lighter);
        z-index: 3;
    }

    .third-line {
        display: block;
        position: absolute;
        bottom: 50px;
        width: 100vw;
        height: 25px;
        background-color: var(--primary-color-lightest);
        z-index: 3;
    }

    .fourth-line {
        display: block;
        position: absolute;
        bottom: 100px;
        width: 100vw;
        height: 25px;
        background-color: var(--primary-color-lighter);
        z-index: 3;
    }
    </style>