    <div class="view-transition">
        <div class="first-line"></div>
        <LogoIcon />
        <div class="second-line"></div>
    </div>

    <style>
    .view-transition {
        background-color: var(--primary-color);
        color: var(--primary-color-lightest);
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        z-index: 2;
    }

    .first-line {
        display: inline-block;
        position: relative;
        top: 55px;
        left: 25px;
        height: 50px;
        width: 100px;
        color: white;
        z-index: 3;
    }

    </style>