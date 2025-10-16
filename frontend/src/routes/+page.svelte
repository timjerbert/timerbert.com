<script lang="js">
    import { tick, onMount } from 'svelte';
    import Carousel from "./carousel.svelte";
    import githublogo from "../static/icons/githublogo.gif"
    import githublogo_hover from "../static/icons/githublogo_hover.gif"
    import linkedin_hover from "../static/icons/linkedin_hover.gif"
    import envelope from "../static/icons/envelope.png"

    let socialsHoverMode = $state(true);
    
    // Typing effect variables
    let displayedText = $state('');
    let fullText = 'Timothy Erbert';
    let typingIndex = $state(0);
    let isTyping = $state(true);
    let isCompleted = $state(false);

    async function resetSocialsGifs (){
        socialsHoverMode = false;
        await tick()
        socialsHoverMode = true
    }

    // Typing effect function
    function typeText() {
        if (typingIndex < fullText.length) {
            displayedText += fullText[typingIndex];
            typingIndex++;
            setTimeout(typeText, 50); // Adjust speed here (100ms per character)
        } else {
            isTyping = false;
            // Start fade effect after a short delay
            setTimeout(() => {
                isCompleted = true;
            }, 0); // Wait 1 second before starting fade
        }
    }

    onMount(() => {
        // Start typing effect when component mounts
        setTimeout(typeText, 500); // Small delay before starting
    });

</script>

<div class="home-page">
    <div class="splash">
        <div style="width:0">
            <div class="splash-title-container">
                <div class="splash-titles">
                    <div class="splash-title">
                        {displayedText}<span class="cursor" class:blinking={isTyping} class:fading={isCompleted}>▮</span>
                    </div>
                    <div class="splash-subtitle">&ltdeveloper for software and web&gt</div>
                </div>
            </div>
        </div>
        <div class="splash-left">
            <div class="scroller"></div>
        </div>
        <div class="splash-right">
            <Carousel>
            </Carousel>
        </div>
    </div>
    <div class="page-section">
        <div class="about-section">
            <div class="about-title">
                About Me
            </div>
            <div class="about-text">
                <p>I’m a creative software developer with a lifelong background in visual art, which gives me a strong eye for design and user experience. I enjoy combining that creativity with technical skill to build clean, efficient, and visually appealing solutions.</p>
                <p>I have experience in full-stack development through projects like Magiquill, a web-based text adventure creation and sharing platform built with Vue, Express, and Node.js. My strengths include breaking down complex ideas into clear architectural structures, designing minimal and trend-conscious solutions, and creating lightweight, mobile-friendly components.</p>
                <p>On the technical side, I’m proficient in C++, C, Python, Java, and JavaScript, with a strong foundation in data structures and software design principles. I value clear communication, thoughtful design, and building tools that are both functional and intuitive.</p>

            </div>
        </div>
    </div>
    <div class="page-section">
        <div class="socials-section">
            <div style="display:flex; flex-wrap:wrap; background:white;">
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
                        <a class="socials-button" href="https://www.linkedin.com/in/tim-erbert-278969366/" on:mouseenter={resetSocialsGifs}>
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
    </div>      
    <div class="page-section" id="contact">
        <div class="contact-section">
            <div class="contact-half" style="align-items: center;">
                <div class="contact-title">
                    Reach Out To Me
                </div>
                <div class="contact-text">
                    If you would like to inquire about my services, or would to just plain say hi, just shoot me a message! I`d like to hear from you.
                </div>
                <img class="contact-mail-img" src={envelope} alt="envelope stock icon">
            </div>
            <div class="contact-half" style="background:rgb(109, 162, 176);">
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
    .about-section{
        display:flex;
        flex-direction: column;
        width:100%;
        background:#DBE7EA;
        margin-bottom:2rem;
        padding-left:2rem;
        padding-right:2rem;
    }
    .about-title{
        font-size:3rem;
        color:rgb(255, 255, 255);
        background:black;
        margin:5%;
        margin-bottom:0;
        font-family: "Meera Inimai", sans-serif;
    }
    .about-text{
        font-size:1.5rem;
        color:rgb(0, 0, 0);
        margin:5%;
        margin-top:1rem;
    }
    .about-text p{
        font-family: "Meera Inimai", sans-serif;
    }
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
        background:blue;
        width:24rem;
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
    .cursor {
        color: white;
        font-weight: normal;
    }
    .blinking {
        animation: blink 1s infinite;
    }
    .fading {
        animation: fadeOut 0.5s ease-in-out forwards;
    }
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
    @keyframes fadeOut {
        0% { opacity: 1; }
        100% { opacity: 0; }
    }
    .page-section{
        display:flex;
        height:min-content;
        width:100% !important;
    }
    .socials-section{
        background-image: radial-gradient(circle at 4px 8px, rgb(186, 204, 217) 4px, transparent 0);
        background-size: 40px 40px;
        width:100% !important;
        display:flex;
        flex-direction: row;
        flex-wrap:wrap;
        justify-content: center;
        align-content:stretch;
        font-family: "Meera Inimai", sans-serif;
    }
    .socials-bg-gradient-l{
        
    }
    .socials-title{
        width:fit-content;
        font-size:3.5rem;
        color:black;
        margin-bottom:1rem;
    }
    .socials-text{
        display:flex; justify-content:center; flex-direction:column; align-items:center; flex-grow:2;
        padding:2rem;
    }
    .socials-subtitle{
        width:fit-content;
        font-size:2.5rem;
        color:rgb(10, 100, 112);
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
        margin-top:1rem;
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
        justify-content: center;
    }
    .contact-title{
        color:rgb(0, 0, 0);
        background:white;
        font-family: "Rubik Iso", system-ui;
        font-size:3rem;
        margin:2rem;
        padding:0.5rem;
        width: max-content;
        box-shadow: 0.5rem 0.5rem rgb(207, 84, 207);
    }
    .contact-text{
        font-family: "Meera Inimai", sans-serif;
        font-size:1.5rem;
        color:rgb(0, 0, 0);
        background:#DBE7EA;
        padding:1rem;
        margin:2rem;
        margin-top:1rem;
        max-width:35rem;
    }
    .contact-mail-img{
        max-width: 30%;
        margin:2rem;
        filter: drop-shadow(-10px 10px 0px rgb(207, 84, 207));
        margin-top:0;
        margin-bottom:3rem;
    }
    .contact-field{
        font-family: "Meera Inimai", sans-serif;
        font-size:1.5rem;
        padding:0.5rem;
        resize: none;
        outline:none;
        background:#DBE7EA;
        border:none;
        border-radius: 0.2rem;
    }
    .contact-field:focus{
        background:white;
        outline:rgb(41, 35, 161) 3px double;
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

    /* Hide splash-left on small screens, let carousel take full width */
    @media (max-width: 768px) {
        .splash-left {
            display: none;
        }
        .splash-right {
            flex: 1;
            width: 100%;
        }
    }
</style>