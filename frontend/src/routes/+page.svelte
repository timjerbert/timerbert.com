<script lang="js">
import Carousel from "./carousel.svelte";
</script>

<div class="home-page">
    <div class="splash">
        <div class="splash-left">
            <div class="splash-title-container">
                <div class="splash-title">Timothy Erbert</div>
                <div class="splash-subtitle">&ltdeveloper for software and web&gt</div>
            </div>
            <div class="scroller"></div>
        </div>
        <div class="splash-right">
            <Carousel>

            </Carousel>
        </div>
    </div>
</div>

<style scoped>
    .home-page{
        font-size:xx-large;
        display: flex;
        flex-direction: column;
    }
    .splash{
        display:flex;
        height:50rem;
        max-height:80dvh;
        background:hotpink;
        
    }
    .splash-left{
        width:40rem;
        background:blue;
    }
    .splash-right{
        background:green;
        width:100%;
    }
    .splash-title-container{
        position: absolute;
        color:white;
        background:black;
        padding:0.8rem;
        padding-right: 1.2rem;
        padding-left:10rem;
        margin-top:4rem;
        width:max-content;
    }
    .splash-subtitle{
        font-size:2rem;
    }
    .splash-title{
        font-size:4rem;
    }
</style>