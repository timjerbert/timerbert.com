<script lang="js">
    import { tick } from 'svelte';
    import Carousel from "./carousel.svelte";
    import githublogo from "../static/icons/githublogo.gif"
    import githublogo_hover from "../static/icons/githublogo_hover.gif"
    import linkedin_hover from "../static/icons/linkedin_hover.gif"
    import envelope from "../static/icons/envelope.png"

    let socialsHoverMode = $state(true);

    async function resetSocialsGifs (){
        socialsHoverMode = false;
        await tick()
        socialsHoverMode = true
    }

</script>

<div class="home-page">
    <div class="splash">
        <div class="splash-left">
            <div class="splash-title-container">
                <div class="splash-titles">
                    <div class="splash-title">Timothy Erbert</div>
                    <div class="splash-subtitle">&ltdeveloper for software and web&gt</div>
                </div>
            </div>
            <div class="scroller"></div>
        </div>
        <div class="splash-right">
            <Carousel>
            </Carousel>
        </div>
    </div>
    <div class="page-section">
        <div class="socials-section">
            <div class="socials-text">
                <div class="socials-title">
                    Want to see what I'm up to?
                </div>
                <div class="socials-subtitle">
                    Check out my LinkedIn or Github!
                </div>
            </div>
            <div class="socials">
                <div class="socials-button-container" >
                    <a class="socials-button" href="https://github.com/timjerbert" on:mouseenter={resetSocialsGifs}>
                        <div style="width=6rem;height=6rem;">
                            <img src={githublogo} class="unhidden" alt="github icon handdrawn">
                            <!-- {#if socialsHoverMode} -->
                                <img src={githublogo_hover} class="hidden" alt="github icon handdrawn">
                            <!-- {/if} -->
                        </div>
                        <div>github</div>
                    </a>
                </div>
                <div class="socials-button-container" >
                    <a class="socials-button" href="https://github.com/timjerbert" on:mouseenter={resetSocialsGifs}>
                        <div style="width=6rem;height=6rem;">
                            <img src={linkedin_hover} class="unhidden" alt="linkedin icon handdrawn">
                            <!-- {#if socialsHoverMode} -->
                                <img src={linkedin_hover} class="hidden" alt="linkedin icon handdrawn">
                            <!-- {/if} -->
                        </div>
                        <div>LinkedIn</div>
                    </a>
                </div>
            </div>
        </div>
    </div>      
    <div class="page-section">
        <div class="contact-section">
            <div class="contact-half">
                <div class="contact-title">
                    Reach Out To Me
                </div>
                <div class="contact-text">
                    If you would like to inquire about my services, or would to just plain say hi, just shoot me a message! I`d like to hear from you.
                </div>
                <img class="contact-mail-img" src={envelope} alt="envelope stock icon">
            </div>
            <div class="contact-half">
                <div class="contact-fields">
                    <textarea class="contact-field" rows="1" placeholder="Name"></textarea>
                    <textarea class="contact-field" rows="1" placeholder="E-mail"></textarea>
                    <textarea class="contact-field" rows="4" placeholder="Message" style="flex-grow:1;"></textarea>
                </div>
                <div class="submit-container">
                    <button class="submit-button">Submit</button>
                </div>
            </div>
        </div>
    </div>
</div>

<style scoped>
    .home-page{
        display: flex;
        flex-direction: column;
    }
    .splash{
        display:flex;
        height:50rem;
        max-height:80dvh;
        background:hotpink;
        overflow:hidden;

    }
    .splash-left{
        width:max-content;
        background:blue;
    }
    .splash-right{
        background:green;
        flex: 1;
        overflow: hidden;
    }
    .splash-title-container{
        font-family: "Meera Inimai", sans-serif;
        position:relative;
        color:white;
        background:black;
        margin-top:4rem;
        width:max-content;
        z-index:1;
    }
    .splash-titles{
        position:relative;
        right:-3rem;
        padding:1.6rem;
        background:black;
    }
    .splash-subtitle{
        font-size:2rem;
    }
    .splash-title{
        font-size:4rem;
    }
    .page-section{
        display:flex;
        height:min-content;
        width:100% !important;
    }
    .socials-section{
        width:100% !important;
        display:flex;
        flex-direction: row;
        flex-wrap:wrap;
        align-content:stretch;
        font-family: "Meera Inimai", sans-serif;
    }
    .socials-title{
        width:fit-content;
        font-size:3.5rem;
        color:black;
    }
    .socials-text{
        display:flex; justify-content:center; flex-direction:column; align-items:center; flex-grow:2;
        padding:2rem;
    }
    .socials-subtitle{
        width:fit-content;
        font-size:2.5rem;
        color:rgb(207, 84, 207);
    }
    .socials{
        flex-grow:1;
        padding:1rem;
        border-radius: 1rem;
        display:flex;
        justify-content: center;
        column-gap: 1rem;
        flex-direction: row;
        margin:1rem;
    }
    .socials-button-container{
        width:fit-content;
        height:fit-content;
        overflow: hidden;
        margin-bottom:1rem;
        border-radius: 1.1rem;
    }
    .socials-button{
        transition: transform 330ms ease-in-out, background-color 300ms;
        padding:1rem;
        margin-top: 1rem;
        display:flex;
        flex-direction: column;
        box-shadow: 0 1rem rgb(126, 183, 197);
        border-radius: 1rem;
        text-decoration: none;
    }
    .socials-button img{
        width:8rem;
        height:8rem;
    }
    .socials-button div{
        font-family: "Meera Inimai", sans-serif;
        font-size:1.5rem;
        color:#1C00D2;
        width:100% !important;
        text-decoration: none;
        text-align: center;
    }
    .socials-button:hover div{
        text-decoration: underline;
    }
    .socials-button:hover{
        transform: translate(0, -1rem);
        background-color: #dfeded;
        cursor: pointer;
    }
    .hidden{
        display:none;
    }
    .unhidden{
        display:block;
    }
    .socials-button:hover .hidden{
        display:block;
    }
    .socials-button:hover .unhidden{
        display:none;
    }
    .contact-section{
        border-top:black 2px dashed;
        background: rgb(126, 183, 197);
        display:flex;
        width:100% !important;
        flex-wrap: wrap;
    }
    .contact-half{
        width:min-content;
        flex-grow:1;
        display:flex;
        flex-direction:column;
    }
    .contact-title{
        color:rgb(207, 84, 207);
        background:white;
        font-family: "Rubik Iso", system-ui;
        font-size:3rem;
        margin:2rem;
        padding:0.5rem;
        width: max-content;
        box-shadow: 0.5rem 0.5rem rgb(108, 152, 173);
    }
    .contact-text{
        font-size:1.5rem;
        color:rgb(52, 16, 96);
        margin:2rem;
        margin-top:0;
    }
    .contact-mail-img{
        max-width: 30%;
        margin:2rem;
        margin-top:0;
    }
    .contact-field{
        font-size:1.5rem;
        padding:0.5rem;
        resize: none;
        outline:none;
        background:#DBE7EA;
        border:solid 1px rgb(108, 152, 173);
    }
    .contact-field:focus{
        background:white;
    }
    .contact-fields{
        margin:2rem;
        display:flex;
        flex-direction: column;
        row-gap:1rem;
        flex-grow:1;
        margin-bottom:1rem;
    }
    .submit-container{
        display:flex;
        justify-content: end;
        width:auto;
        margin:2rem;
        margin-top:0;
    }
    .submit-button{
        background:rgb(16, 144, 161);
        font-weight:800;
        font-size:1.5rem;
        color:white;
        padding:0.7rem;
        border-radius: 2rem;
        outline:none;
        border:none;
        font-family: "Meera Inimai", sans-serif;

    }
    .submit-button:hover{
        background:rgb(21, 132, 147);

    }
    .submit-button:active{
        background:rgb(10, 100, 112);
    }
</style>