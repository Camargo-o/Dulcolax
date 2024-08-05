<script>
    import { onMount } from "svelte";
    import { gsap } from "gsap";

    let current = 0;
    const images = [
        "images/1_carrossel.jpg",
        "images/2_carrossel.jpg",
        "images/3_carrossel.jpg",
        "images/4_carrossel.jpg",
        "images/5_carrossel.jpg"
    ];

    const next = () => {
        current = (current + 1) % images.length;
        animate();
    };

    const prev = () => {
        current = (current - 1 + images.length) % images.length;
        animate();
    };

    const animate = () => {
        gsap.fromTo(".slide", { opacity: 0 }, { opacity: 1, duration: 0.5 });
    };

    onMount(() => {
        animate();
    });
</script>

<style>
    .slider {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        overflow: hidden;
        background-color: #000;
    }
    .slide {
        position: absolute;
        width: 60%;
        height: 80%;
        background-size: cover;
        background-position: center;
        transition: transform 0.5s ease;
    }
    .slide-left {
        transform: translateX(-80%);
    }
    .slide-right {
        transform: translateX(80%);
    }
    .slide-center {
        transform: translateX(0);
        z-index: 1;
    }
    .buttons {
        position: absolute;
        bottom: 20px;
        display: flex;
        justify-content: space-between;
        width: 200px;
    }
    .button {
        cursor: pointer;
        color: #fff;
        font-size: 2rem;
    }
</style>

<div class="slider">
    {#each images as img, index (img)}
        <div class="slide {index === current ? 'slide-center' : (index < current ? 'slide-left' : 'slide-right')}"
             style="background-image: url({img})"></div>
    {/each}
    <div class="buttons">
        <div class="button" on:click={prev}>&#8592;</div>
        <div class="button" on:click={next}>&#8594;</div>
    </div>
</div>
