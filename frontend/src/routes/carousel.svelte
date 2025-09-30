
<script lang="js" >
    import { fade } from 'svelte/transition';
    
	const imageModules = import.meta.glob(
		'/src/static/carousel/images/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}',
		{
			eager: true,
		}
	)
    let carouselSize = Object.keys(imageModules).length

    let carouselSelected = $state(0);
    
    console.log(imageModules)
    function incrementCarouselPosition(){
        carouselSelected =  (carouselSelected + 1) % carouselSize
        console.log(carouselSelected)
    }
    function decrementCarouselPosition(){
        if (carouselSelected!=0) carouselSelected = (carouselSelected - 1) % carouselSize
        else carouselSelected = carouselSize - 1
        console.log(carouselSelected)

    }
</script>

<div class="carousel-container">
    <div class="c-button-container">
        <button class="c-button" onclick={decrementCarouselPosition}>
            <div style="transform:translate(-5px,-5px)">🢐</div>
        </button>
        <button class="c-button"  onclick={incrementCarouselPosition}>            
            <div style="transform:translate(2px,-5px)">🢒</div>
        </button>
    </div>
    <div class="dot-selector"></div>
    {#each Object.entries(imageModules) as [_path, module], index}
        {#if carouselSelected == index}
            <img src={module.default} class="carousel-image" alt="Me looking dapper" transition:fade={{ duration: 500 }}/>    
        {/if}
    {/each}    
</div>

<style scoped>
    .carousel-container{
        display: flex;
        position:relative;
        justify-content: center;
        align-items: center;
        background:paleturquoise;
        max-width:100% !important;
        flex-grow:1;
        height:50rem;
        box-sizing: border-box;
        object-fit: cover;
        overflow:hidden;
    }

    .c-button-container{
        display:flex;
        background: rgb(35, 35, 35);
        padding:1rem;
        border-radius: 1rem;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        z-index: 20;
        top:0;
        right:1rem;
        position:absolute;
    }
    .c-button{
        right:0px;
        width:20px;
        margin:0;
        height:20px;
        background:none;
        outline:none;
        border:none;
        text-align: center;
        color:white;
        line-height: 0px;
        font-size:3rem;
    }
    .c-button:hover{
        color:rgb(143, 152, 164);
    }


    .carousel-image{
        position: absolute;
        min-width:100%;
        min-height:100%;
        flex-shrink: 0;
        overflow:hidden;
        background-position: center;
        background-size: cover;
        object-fit: cover;
    }
</style>