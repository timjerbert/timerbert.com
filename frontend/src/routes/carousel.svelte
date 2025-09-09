<script lang="js">
	const imageModules = import.meta.glob(
		'/src/static/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}',
		{
			eager: true,
			query: {
				enhanced: true,
                w: '1280;640;400',
			}
		}
	)

    console.log(imageModules)
    function incrementCarouselPosition(){

    }
</script>

<div class="carousel-container">
    <div class="dot-selector"></div>
    {#each Object.entries(imageModules) as [_path, module]}
        <img src={module.default} alt="Me looking dapper" />
    {/each}    
</div>

<style scoped>
    .carousel-container{
        background:paleturquoise;
        height:100%;
        width:100%;
        overflow:hidden;
    }
    .carousel-container img{
        height:100%;
    }
</style>