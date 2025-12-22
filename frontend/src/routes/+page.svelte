<script lang="js">
    import { tick } from 'svelte';
    import Carousel from "./carousel.svelte";
    import githublogo from "../static/icons/githublogo.gif"
    import githublogo_hover from "../static/icons/githublogo_hover.gif"
    import linkedin_hover from "../static/icons/linkedin_hover.gif"
    import envelope from "../static/icons/envelope.png"
    import sendmailicon from "../static/icons/sendmailicon.png"

    let socialsHoverMode = $state(true);

    async function resetSocialsGifs (){
        socialsHoverMode = false;
        await tick()
        socialsHoverMode = true
    }


    let status = $state("");
    /** @param {Event} data */
    async function handleSubmit(data){
    status = 'Submitting...'
    const form = data.currentTarget;
    if (!(form instanceof HTMLFormElement)) {
        status = 'Error: Form not found';
        return;
    }
    const formData = new FormData(form)
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: json
    });
    
    console.log('Response status:', response.status, response.statusText);
    
    let result;
    result = await response.json();
    console.log('Response data:', result);

    if (result.success) {
        status = result.message || "Success"
    } else {
        status = result.message || "Failed to send message. Please try again."
    }
    }

</script>

<div class="home-page">
    <div class="splash">
        <div class="splash-left">
            <div class="about-section">
                <h1 class="about-title">
                    About Me
                </h1>
                <div class="about-text">
                    <p>I’m a creative software developer with a lifelong background in visual art, which gives me a strong eye for design and user experience. I enjoy combining that creativity with technical skill to build clean, efficient, and visually appealing solutions.</p>
                    <p>I have experience in full-stack development through projects like <a href="/projects/magiquill" style="color:aqua">Magiquill</a>, a web-based text adventure creation and sharing platform built with Vue, Express, and Node.js. My strengths include breaking down complex ideas into clear architectural structures, designing minimal and trend-conscious solutions, and creating lightweight, mobile-friendly components.</p>
                    <p>On the technical side, I’m proficient in C++, C, Python, Java, and JavaScript, with a strong foundation in data structures and software design principles. I value clear communication, thoughtful design, and building tools that are both functional and intuitive.</p>
                </div>
            </div>
        </div>
        <div class="splash-right">
            <Carousel>
            </Carousel>
        </div>
    </div>

    <div class="page-section">
        <div class="socials-section">
            <div style="display:flex; flex-wrap:wrap; position: relative; z-index: 2;">
                <!-- <div class="socials-text">
                    <div class="socials-title">
                        Want to see what I'm up to?
                    </div>
                    <div class="socials-subtitle">
                        Check out my LinkedIn or Github!
                    </div>
                    
                </div> -->
                <div class="socials">
                    <div class="socials-button-container" >
                        <a class="socials-button" href="https://github.com/timjerbert" on:mouseenter={resetSocialsGifs}>

                            <div style="padding:1rem;         box-sizing: border-box;
">
                            <div style="width=6rem;height=6rem;">
                                <img src={githublogo} class="unhidden" alt="github icon handdrawn">
                                <!-- {#if socialsHoverMode} -->
                                    <img src={githublogo_hover} class="hidden" alt="github icon handdrawn">
                                <!-- {/if} -->
                            </div>
                            <div>github</div>
                            </div>
                            <div class="socials-gradient">
                            </div>
                            <div class="socials-gradient2">
                            </div>
                        </a>
                    </div>
                    <div class="socials-button-container" >
                        <a class="socials-button" href="https://www.linkedin.com/in/tim-erbert-278969366/" on:mouseenter={resetSocialsGifs}>

                            <div style="padding:1rem;         box-sizing: border-box;
">
                            <div style="width=6rem;height=6rem;">
                                <img src={linkedin_hover} class="unhidden" alt="linkedin icon handdrawn">
                                <!-- {#if socialsHoverMode} -->
                                    <img src={linkedin_hover} class="hidden" alt="linkedin icon handdrawn">
                                <!-- {/if} -->
                            </div>
                            <div>LinkedIn</div>
                            </div>
                            <div class="socials-gradient">
                            </div>
                            <div class="socials-gradient2">
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>      
    <div class="page-section" id="contact">
        <div class="contact-section">
            <div class="contact-form-container">
                <img src={envelope} alt="" class="envelope-bg">
                <div class="contact-title">
                    Reach Out To Me
                </div>
                <div class="contact-content">
                    <div class="contact-text">
                        If you would like to inquire about my services, or would to just plain say hi, just shoot me a message! I'd like to hear from you.
                        <hr style="border:dashed white 1px;">
                        This is the means by which I am best accessed, and I usually respond within 1-3 days.
                    </div>
                    <form action="https://api.web3forms.com/submit" method="POST" class="contact-form" on:submit|preventDefault={handleSubmit}>
                        <input type="hidden" name="access_key" value="204b70f0-de58-4977-ba07-fab8e5abaf1c">
                        <div style="margin:1rem;">
                            <div class="field-group">
                                <div class="field-label">Name</div>
                                <input class="contact-field" placeholder="" type="text" name="name" required>
                            </div>
                            <div class="field-group">
                                <div class="field-label">Email</div>
                                <input class="contact-field" placeholder="example@mail.com" type="email" name="email" required>
                            </div>
                            <div class="field-group">
                                <div class="field-label">Message</div>
                                <textarea class="contact-field" rows="4" placeholder="Hello, I just wanted to contact you about..." name="message" required></textarea>
                            </div>
                            <div class="status-message">{status}</div>
                        </div>
                        <div class="submit-container">
                            <button class="submit-button" type="submit">Send Message <img src={sendmailicon} alt="" class="sendmail-icon"></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<style scoped>
    .status-message{
        color:#bd00f6;
    }
    .about-section{
        margin:2px 1rem;
        box-sizing: border-box;
        display:flex;
        flex-direction: column;
        outline: dotted 2px rgb(255, 255, 255);

    }
    .about-title{
        box-sizing: border-box;
        font-size:1rem;
        width:100%;
        border-bottom:dotted 2px rgb(255, 255, 255);
        color:rgb(255, 255, 255);
        margin: 0;
        padding:0.5rem;
        font-family: "Meera Inimai", sans-serif;
    }
    .about-text{
        font-size:1.1rem;
        line-height: 1.6rem;
        color:rgb(255, 255, 255);
    }
    .about-text p{
        font-family: "Meera Inimai", sans-serif;
        margin: 1rem;
    }
    .about-text a{
        color:rgb(255, 255, 255);
        text-decoration: underline;
        text-decoration-color: rgba(255, 255, 255, 0.5);
        transition: text-decoration-color 0.2s ease;
    }
    .about-text a:hover{
        text-decoration-color: rgb(255, 255, 255);
    }
    .home-page{
        display: flex;
        flex-direction: column;
    }
    .splash{
        display:flex;
        height:fit-content;
        background:black;
        overflow:hidden;

    }
    .splash-left{
        display:flex;
        width:30rem;
    }
    .splash-right{
        background:green;
        flex: 1;
        overflow: hidden;
    }
    .page-section{
        display:flex;
        height:min-content;
        width:100% !important;
    }
    .socials-section{
        background-size: 40px 40px;
        box-sizing: border-box;
        width:100% !important;
        display:flex;
        flex-direction: row;
        flex-wrap:wrap;
        justify-content: center;
        align-content:stretch;
        /* font-family: "Meera Inimai", sans-serif; */
        position: relative;
    }  
    
    /* background-image: radial-gradient(circle at 8px 24px, rgb(88, 98, 105) 2px, transparent 0); */
    /* .socials-section::before,
    .socials-section::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100px;
        z-index: 1;
        pointer-events: none;
    }
    .socials-section::before {
        left: 0;
        background: linear-gradient(to right, rgb(0, 0, 0), transparent);
    }
    .socials-section::after {
        right: 0;
        background: linear-gradient(to left, rgb(0, 0, 0), transparent);
    } */
    .socials-title{
        width:fit-content;
        font-size:3.5rem;
        color:rgb(255, 255, 255);
        margin-bottom:1rem;
    }
    .socials-gradient{
        background: radial-gradient(at center bottom, rgba(72, 87, 85, 0.697), #00000000);
        z-index:-1;
        height:100%;
        width:100%;
        border-bottom: rgba(43, 64, 64, 0.227) solid 2px;
        position:absolute;
        border-radius: 0.5rem;
        opacity: 1;
        transition: opacity 200ms ease-in-out;
    }
    .socials-button:hover .socials-gradient{
        opacity: 0;
    }
    .socials-gradient2{
        background: linear-gradient(0deg,rgba(0, 0, 0, 0),rgba(182, 221, 223, 0.135)) ;
        z-index:-1;
        height:15%;
        width:100%;
        position:absolute;
        border-radius: 0.5rem;
        opacity: 1;
        transition: opacity 200ms ease-in-out;
    }
    .socials-button:hover .socials-gradient2{
        opacity: 0;
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
        column-gap: 2rem;
        flex-direction: row;
        margin:1rem;
    }
    .socials-button-container{
        width:fit-content;
        height:fit-content;
        overflow: hidden;
        margin-bottom:1rem;
        border-radius: 0.55rem;
    }
    .socials-button{
        transition: transform 200ms ease-in-out, background-color 300ms;
        margin-top: 1rem;
        display:flex;
        flex-direction: column;
        box-shadow: 0 1rem rgb(33, 43, 47);
        border-radius: 0.5rem;
        background-color: rgba(0, 0, 0, 0);
        transform: translate(0, -0.6rem);
        text-decoration: none;
        z-index:1;
    }
    .socials-button img{
        width:8rem;
        height:8rem;
    }
    .socials-button div{
        font-size:1.5rem;
        color:transparent;
        width:100% !important;
        text-decoration: none;
        text-shadow: 0 0 1.5px rgb(255, 255, 255);
        text-align: center;
        z-index:3;

    }
    .socials-button:hover div{
        text-decoration: underline;
    }
    .socials-button:hover{
        transform: translate(0, 0);
        background-color: rgb(0, 0, 0);
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
        /* background: linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(109, 162, 176) 100%); */
        display:flex;
        flex-direction: column;
        width:100% !important;
        padding: 2rem;
        align-items: end;
        position: relative;
        overflow: hidden;
        will-change: auto;
        contain: layout style;

    }
    .contact-form-container {
        background: rgba(158, 244, 29, 0.98);
        padding: 0;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        z-index: 2;
        position: relative;
        align-items: stretch;
        max-width: 900px;
        width: 100%;
        will-change: auto;

        overflow: hidden;
    }
    .envelope-bg {
        position: absolute;
        top: 50%;
        right: 2rem;
        transform: translateY(-50%) translateX(20%);
        width: 500px;
        height: 500px;
        object-fit: contain;
        opacity: 0.6;
        filter:sepia(10%) hue-rotate(120deg) saturate(100%) brightness(1.1);
        z-index:0;
        pointer-events: none;
    }
    .contact-content {
        display: flex;
        align-items: stretch;
        position: relative;
        z-index: 1;
    }
    .contact-text {
        font-family: "Meera Inimai", sans-serif;
        font-size: 1.1rem;
        background:black;
        color: rgb(255, 255, 255);
        line-height: 1.6;
        width:15rem;
        padding:1rem;
    }
    .contact-form {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .contact-title{
        font-family: "BBH Sans Bartle", sans-serif;
        font-size:2.5rem;
        margin:0;
        width: 100%;
        color: rgb(0, 0, 0);
        background:white;
        position: relative;
        z-index: 1;
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
        font-size:1rem;
        padding:0.5rem;
        resize: none;
        outline:none;
        background: rgba(255, 255, 255, 0.9);
        border: 1px solid rgba(25, 0, 82, 0.586);
        border-radius: 0.5rem;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        will-change: auto;
        transform: translateZ(0);
    }
    .contact-field:focus{
        background: white;
        border-color: rgb(50, 0, 104);
    }
    .field-group{
        display: flex;
        margin-bottom:0.8rem;
        flex-direction: column;
    }
    .field-label{
        font-family: "Meera Inimai", sans-serif;
        font-size: 0.9rem;
        color: rgb(50, 0, 104);
        font-weight: 500;
        margin-left: 0.2rem;
    }
    .submit-container{
        display:flex;
        justify-content: right;
    }
    .submit-button{
        background:black;
        font-weight:800;
        font-size:1.2rem;
        color:rgb(255, 255, 255);
        padding:1rem 1rem;
        border-radius: 0;
        outline:none;
        border:none;
        font-family: "Meera Inimai", sans-serif;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(50, 0, 104, 0.3);
        text-transform: uppercase;
        letter-spacing: 1px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .submit-button:hover{
        background:rgb(16, 16, 16);
    }
    .submit-button:active{
        background:rgb(36, 36, 36);
    }
    .sendmail-icon {
        height: 1.25rem;
        width: auto;
        object-fit: contain;
        vertical-align: middle;
        filter:saturate(0) brightness(1.3);
    }
     .submit-button:hover .sendmail-icon{
        filter:saturate(0) brightness(1.5);
    }
    /* Hide splash-left on small screens, let carousel take full width */
    @media (max-width: 768px) {
        .splash{
            flex-direction: column-reverse;
        }
    }

    /* Contact section responsive behavior */
    
    @media (max-width: 768px) {
        .about-section{
            width:100% !important;
        }
        .splash-left{
            width:100%;
        }
        .contact-section {
            padding: 0;
            box-sizing: border-box;
            border:none;
        }
        .contact-form{
            width:90%;
            padding:1rem;
            box-sizing: border-box;
        }
        .contact-form-container{
            border:none;
        }
        .contact-text{
            width:fit-content;
            
        }
        .contact-title{
            font-size:2rem;
        }
        .contact-content {
            flex-direction: column;
            gap: 1.5rem;
        }
        .contact-form-container {
            width: 100%;
            border-radius:0;
            box-sizing: border-box;

        }
    }
</style>