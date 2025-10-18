
<script lang="js" >
    import Carousel from 'svelte-carousel'
    import { fade } from 'svelte/transition';
    import { browser } from '$app/environment';
	const imageModules = import.meta.glob(
		'/src/static/carousel/images/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}',
		{
			eager: true,
		}
	)
    // Convert imageModules to an array of image sources for svelte-carousel
    let images = /** @type {string[]} */ ([])
    Object.entries(imageModules).forEach(([path, module]) => {
        // @ts-ignore - module type is handled by Vite's import.meta.glob
        images.push(module.default)
    })
    
    console.log(imageModules)
</script>

<div class="carousel-container">
    <div class="carousel-inner">
        {#if browser}
            <Carousel
                let:loaded
                autoplay={true}
                autoplayDuration={3000}
            >
                {#each images as src, imageIndex (src)}
                    <div class="img-container">
                        {#if loaded.includes(imageIndex)}
                            <img src={src} alt="Carousel" class="carousel-image" />
                        {/if}
                    </div>
                {/each}
            </Carousel>
        {:else}
            <!-- Fallback for SSR -->
            <div class="img-container">
                <img src={images[0]} alt="Carousel" class="carousel-image" />
            </div>
        {/if}
    </div>
</div>

<style scoped>
    .carousel-container{
        display: flex;
        position:relative;
        justify-content: center;
        align-items: center;
        background:rgb(0, 0, 0);
        width: 100%;
        min-height: fit-content;
        height:100%;
        flex-grow:1;
    }

    .carousel-inner {
        width: 40rem;
        height: 100%;
        max-width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .img-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow:hidden;
    }


    .carousel-image{
        overflow:hidden;
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        user-select: none;
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        user-drag: none;
        pointer-events: none;
    }
</style>