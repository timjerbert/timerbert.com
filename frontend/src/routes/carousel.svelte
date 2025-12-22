
<script lang="js" >
    import Carousel from 'svelte-carousel'
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';
	
	const imageModulesJpg = import.meta.glob('/src/static/carousel/images/*.jpg', { eager: true })
	const imageModulesJpgUpper = import.meta.glob('/src/static/carousel/images/*.JPG', { eager: true })
	const imageModulesJpeg = import.meta.glob('/src/static/carousel/images/*.jpeg', { eager: true })
	const imageModulesJpegUpper = import.meta.glob('/src/static/carousel/images/*.JPEG', { eager: true })
	const imageModulesPng = import.meta.glob('/src/static/carousel/images/*.png', { eager: true })
	const imageModulesPngUpper = import.meta.glob('/src/static/carousel/images/*.PNG', { eager: true })
	const imageModulesOther = import.meta.glob('/src/static/carousel/images/*.{avif,gif,heif,tiff,webp}', { eager: true })
	
	const allImageModules = {
		...imageModulesJpg,
		...imageModulesJpgUpper,
		...imageModulesJpeg,
		...imageModulesJpegUpper,
		...imageModulesPng,
		...imageModulesPngUpper,
		...imageModulesOther
	}
	
    let images = /** @type {string[]} */ ([])
    Object.entries(allImageModules).forEach(([path, module]) => {
        // @ts-ignore 
        if (module && typeof module === 'object' && 'default' in module) {
            // @ts-ignore
            images.push(module.default)
        }
    })
    
    let imagesReady = $state(false)
    
    if (browser) {
        console.log('Image modules found:', Object.keys(allImageModules))
        console.log('Images array:', images)
    }
    
    // Preload all images before showing carousel
    if (browser) {
        onMount(() => {
            if (images.length === 0) {
                imagesReady = true
                return
            }
            
            // Preload all images
            const imagePromises = images.map(src => {
                return new Promise((resolve) => {
                    const img = new Image()
                    img.onload = () => resolve(undefined)
                    img.onerror = () => {
                        console.warn('Failed to load image:', src)
                        resolve(undefined) // Continue even if one image fails
                    }
                    img.src = src
                })
            })
            
            Promise.all(imagePromises).then(() => {
                // Wait a bit to ensure images are fully rendered
                setTimeout(() => {
                    imagesReady = true
                }, 200)
            }).catch(err => {
                console.error('Error loading images:', err)
                imagesReady = true
            })
        })
    }
    // Don't set imagesReady to true for SSR - keep it false so spinner shows
</script>

<div class="carousel-container">
    <div class="carousel-inner">
        {#if browser && images.length > 0 && imagesReady}
            <Carousel
                autoplay={true}
                autoplayDuration={3000}
            >
                {#each images as src (src)}
                    <div class="img-container">
                        <img src={src} alt="Carousel" class="carousel-image" />
                    </div>
                {/each}
            </Carousel>
        {:else if images.length > 0}
            <!-- Show loading spinner while loading images (both SSR and client) -->
            <div class="loading-container">
                <div class="spinner"></div>
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
        height:100%;
        flex-grow:1;
    }

    .carousel-inner {
        width: 60rem;
        height: 100%;
        box-sizing: border-box;

        max-width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .img-container {
        box-sizing: border-box;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow:hidden;
    }


    .carousel-image{
        overflow:hidden;
        width: 100%;
        height: 100%;
        min-height: 400px;
        object-fit: cover;
        display: block;
        visibility: visible;
        opacity: 1;
        user-select: none;
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        pointer-events: none;
    }

    .loading-container {
        width: 100%;
        height: 100%;
        min-height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .spinner {
        width: 50px;
        height: 50px;
        border: 4px solid rgba(255, 255, 255, 0.2);
        border-top-color: rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
</style>