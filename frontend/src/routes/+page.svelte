<script lang="js">
    import Carousel from "./carousel.svelte";
    import githubcat3dsmall from "../static/icons/githubcat3dsmall.png"
    import linkedin3d from "../static/icons/linkedin3d.png"
    import envelope from "../static/icons/envelope.png"
    import sendmailicon from "../static/icons/sendmailicon.png"
    import isaCardBg from "../lib/assets/home/bg-elements/isa-card-bg.svg"
    import unteagle from "../lib/assets/home/bg-elements/unteagle.png"
    import techstackbg from "../lib/assets/home/techstackbg.png"


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
    <div class="left-panel">
        <div class="about-section">
            <div class="about-text">
                <p>I'm a creative software developer with a lifelong background in visual art, which gives me a strong eye for design and user experience. I enjoy combining that creativity with technical skill to build clean, efficient, and visually appealing solutions.</p>
                <p>I have experience in full-stack development through projects like <a href="/projects/magiquill" style="color:aqua">Magiquill</a>, a web-based text adventure creation and sharing platform built with Vue, Express, and Node.js. My strengths include breaking down complex ideas into clear architectural structures, designing minimal and trend-conscious solutions, and creating lightweight, mobile-friendly components.</p>
                <p>On the technical side, I'm proficient in C++, C, Python, Java, and JavaScript, with a strong foundation in data structures and software design principles. I value clear communication, thoughtful design, and building tools that are both functional and intuitive.</p>
            </div>
        </div>
    </div>
    <div class="right-panel">
        <div class="carousel-section">
            <Carousel>
            </Carousel>
        </div>
        
        <div class="page-section industrial-section mobile-about-section">
            <h1 class="industrial-title">About Me</h1>
            <div class="industrial-container">
                <p>I'm a creative software developer with a lifelong background in visual art, which gives me a strong eye for design and user experience. I enjoy combining that creativity with technical skill to build clean, efficient, and visually appealing solutions.</p>
                <p>I have experience in full-stack development through projects like <a href="/projects/magiquill" style="color:aqua">MagiQuill</a>, a web-based text adventure creation and sharing platform built with Vue, Express, and Node.js. My strengths include breaking down complex ideas into clear architectural structures, designing minimal and trend-conscious solutions, and creating lightweight, mobile-friendly components.</p>
                <p>On the technical side, I'm proficient in C++, C, Python, Java, and JavaScript, with a strong foundation in data structures and software design principles. I value clear communication, thoughtful design, and building tools that are both functional and intuitive.</p>
            </div>
        </div>
        
        <div class="page-section industrial-section">
            <h1 class="industrial-title">Experience</h1>
            <div class="industrial-container">
                <h2 class="industrial-subtitle">Employment</h2>          
                <div class="industrial-card" style="border-left: 4px solid #BAD982;">
                    <img src={isaCardBg} alt="" class="isa-card-bg">
                    <div class="card-header">
                        <div class="card-title-group">
                            <h3 class="card-company">Innovative Signal Analysis</h3>
                            <h4 class="card-role">Software Development Intern</h4>
                        </div>
                        <time class="card-time">July 2021 - January 2024</time>
                    </div>
                    <p class="card-content">During my internship at Innovative Signal Analysis, I developed traceable, production-grade code across Java, C, C++, and Python, contributing directly to the reliability and scalability of core applications. I enhanced an existing system by implementing probabilistic modeling capabilities, introducing support for ten statistical distributions that enabled deeper analysis of time-frequency plots. Throughout my time there, I demonstrated strong agility in diagnosing and resolving bugs within ISA's proprietary software, improving workflow efficiency and preventing critical edge-case failures. I also managed dependency synchronization for internal libraries across the unclassified codebase, ensuring consistency and stability across development environments. In addition, I took initiative in analyzing and extensively documenting internal usage tools where prior documentation was limited, significantly improving knowledge accessibility and long-term maintainability through detailed Confluence contributions.</p>
                </div>
                <h2 class="industrial-subtitle">Education</h2>
                <div class="industrial-card unt-card">
                    <img src={unteagle} alt="" class="unt-eagle">
                    <div class="card-header">
                        <div class="card-title-group">
                            <h3 class="card-company">University of North Texas</h3>
                            <h4 class="card-role">Bachelor of Science in Computer Science</h4>
                        </div>
                        <time class="card-time">May 2025</time>
                    </div>
                </div>
                <h2 class="industrial-subtitle">Achievements</h2>
                <div class="industrial-card">
                    <div class="card-header">
                        <h3 class="card-company">HowdyHack 2021</h3>
                        <time class="card-time">September 2021</time>
                    </div>
                    <p class="card-content">I attended HowdyHack back in 2021. In the span of 24 hours, me and my team of 3 others created a bot, which we dubbed BeeBot, for the platform discord which scraped from Texas A&M's public data to pair students together if they were taking similar classes.</p>
                </div>
                <div class="industrial-card">
                    <div class="card-header">
                        <h3 class="card-company">MagiQuill</h3>
                        <time class="card-time">August 2024 - Today</time>
                    </div>
                    <p class="card-content">I attended HowdyHack back in 2021. In the span of 24 hours, me and my team of 3 others created a bot, which we dubbed BeeBot, for the platform discord which scraped from Texas A&M's public data to pair students together if they were taking similar classes.</p>
                </div>
            </div>
        </div>
        <div class="page-section industrial-section">
            <img src={techstackbg} alt="" class="techstack-bg">
            <h1 class="industrial-title">Tech Stack</h1>
            <div class="industrial-container">            
                <div class="tech-grid">
                    <div class="tech-category">
                        <h2 class="tech-category-title">Languages</h2>
                        <div class="tech-tags">
                            <span class="tech-tag">C++</span>
                            <span class="tech-tag">Java</span>
                            <span class="tech-tag">Rust</span>
                            <span class="tech-tag">Javascript</span>
                            <span class="tech-tag">C#</span>
                        </div>
                    </div>
                    <div class="tech-category">
                        <h2 class="tech-category-title">Data Visualization</h2>
                        <div class="tech-tags">
                            <span class="tech-tag">Rstudio</span>
                            <span class="tech-tag">Matlab</span>
                            <span class="tech-tag">matplotlib</span>
                            <span class="tech-tag">Excel</span>
                            <span class="tech-tag">Google Sheets</span>
                        </div>
                    </div>
                    <div class="tech-category">
                        <h2 class="tech-category-title">Web Development</h2>
                        <h3 class="tech-subcategory-title">Frontend</h3>
                        <div class="tech-tags">
                            <span class="tech-tag">Vue.js</span>
                            <span class="tech-tag">Svelte</span>
                            <span class="tech-tag">React</span>
                        </div>
                        
                        <h3 class="tech-subcategory-title">Database & Cloud</h3>
                        <div class="tech-tags">
                            <span class="tech-tag">MongoDB</span>
                            <span class="tech-tag">Google Cloud Platform</span>
                            <span class="tech-tag">AWS</span>
                            <span class="tech-tag">AWS Lambda Functions</span>
                        </div>
                    </div>
                    <div class="tech-category">
                        <h2 class="tech-category-title">Design</h2>
                            <h3 class="tech-subcategory-title">3D & CAD</h3>
                            <div class="tech-tags">
                                <span class="tech-tag">Blender</span>
                                <span class="tech-tag">Rhino3d</span>
                                <span class="tech-tag">Plasticity</span>
                            </div>                            
                            <h3 class="tech-subcategory-title">Adobe Creative Suite</h3>
                            <div class="tech-tags">
                                <span class="tech-tag">Photoshop</span>
                                <span class="tech-tag">Illustrator</span>
                                <span class="tech-tag">Premiere</span>
                                <span class="tech-tag">Animate</span>

                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-section">
            <div class="socials-section">
                <div style="display:flex; flex-wrap:wrap; position: relative; z-index: 2;">
                    <div class="socials">
                        <div class="socials-button-container" >
                            <img src={githubcat3dsmall} alt="github icon handdrawn" class="socials-image">
                            <div class="socials-text-label">github</div>
                            <a class="socials-button" href="https://github.com/timjerbert" aria-label="github">
                            </a>
                        </div>
                        <div class="socials-button-container" >
                            <img src={linkedin3d} alt="linkedin icon handdrawn" class="socials-image">
                            <div class="socials-text-label">LinkedIn</div>
                            <a class="socials-button" href="https://www.linkedin.com/in/tim-erbert-278969366/" aria-label="LinkedIn">
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
</div>

<style scoped>
    .status-message{
        color:#bd00f6;
    }
    .about-section{
        box-sizing: border-box;
        display:flex;
        flex-direction: column;
        height: 100%;
        overflow: scroll;
        position: relative;
    }
    .about-title{
        box-sizing: border-box;
        font-size:1.5rem;
        width:100%;
        border-bottom:dotted 2px rgb(255, 255, 255);
        color:rgb(255, 255, 255);
        margin: 0;
        padding:0.5rem;
        font-family: "Meera Inimai", sans-serif;
        position: relative;
        z-index: 1;
    }
    .about-text{
        font-size:1.2rem;
        line-height: 1.85rem;
        color:rgb(255, 255, 255);
        position: relative;
        z-index: 1;
    }
    .about-text p{
        font-family: "Meera Inimai", sans-serif;
        margin: 2rem;
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
        flex-direction: row;
        flex: 1;
        height: 100%;
        overflow: hidden;
    }
    .left-panel{
        width: 30rem;
        max-width: 40dvw;
        flex: 0 0 auto;
        display: flex;
        flex-direction: column;
        background: black;
        overflow: hidden;
    }
    .right-panel{
        flex: 1;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        background: rgba(0, 0, 0, 0.671);
    }
    .carousel-section{
        background: green;
        overflow: hidden;
    }
    .page-section{
        display:flex;
        height:min-content;
        width:100% !important;
    }
    .industrial-section {
        background: linear-gradient(to bottom, #101212, #000000);
        padding: 0 0 3rem 0;
        display: flex;
        flex-direction: column;
        position: relative;
    }
    .techstack-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.4;
        z-index: 0;
        pointer-events: none;
        mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%);
        -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%);
        image-rendering: pixelated;
        image-rendering: -moz-crisp-edges;
        image-rendering: crisp-edges;
    }
    .industrial-container {
        max-width: 900px;
        margin: 0 auto;
        width: 100%;
        padding: 3rem 2rem 0 2rem;
        box-sizing: border-box;
        position: relative;
        z-index: 1;
    }
    .industrial-title {
        font-family: "BBH Sans Bartle", sans-serif;
        font-size: 2.5rem;
        margin: 0;
        width: 100%;
        background: rgb(22, 0, 67);
        color: rgb(221, 240, 216);
        position: relative;
        z-index: 2;
        padding: 0.25rem 1rem;
        box-sizing: border-box;
        line-height: 1.2;
    }
    .industrial-subtitle {
        font-family: "Meera Inimai", sans-serif;
        font-size: 1.75rem;
        font-weight: 600;
        color: #e0e0e0;
        margin: 2.5rem 0 1.5rem 0;
        padding-left: 0.5rem;
        border-left: 4px solid #aaaaaa;
    }
    .industrial-container > p {
        font-family: "Meera Inimai", sans-serif;
        font-size: 1.1rem;
        line-height: 1.8;
        color: #d0d0d0;
        margin: 0 0 2rem 0;
        text-shadow: 1px 1px 0 rgb(17, 17, 17);
    }
    .industrial-container > p:first-child {
        margin-top: 0;
    }
    .industrial-container > p:last-child {
        margin-bottom: 0;
    }
    .industrial-card {
        background: #181818;
        border: 1px solid #333333;
        border-left: 4px solid #aaaaaa;
        padding: 1.75rem;
        margin-bottom: 1.5rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        transition: box-shadow 0.2s ease, border-left-color 0.2s ease;
        position: relative;
        overflow: hidden;
    }
    .unt-card {
        overflow: visible;
    }
    .industrial-card:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.7);
        border-left-color: #cccccc;
    }
    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1rem;
        flex-wrap: wrap;
        gap: 1rem;
        position: relative;
        z-index: 1;
    }
    .industrial-card:not(:has(.card-content)) .card-header {
        margin-bottom: 0;
    }
    .card-title-group {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }
    .card-company {
        font-family: "Meera Inimai", sans-serif;
        font-size: 1.5rem;
        font-weight: 600;
        color: #ffffff;
        margin: 0;
    }
    .card-role {
        font-family: "Meera Inimai", sans-serif;
        font-size: 1.1rem;
        font-weight: 400;
        color: #b0b0b0;
        margin: 0;
        font-style: italic;
    }
    .card-time {
        font-family: "Meera Inimai", sans-serif;
        font-size: 0.95rem;
        color: rgb(0, 0, 0);
        white-space: nowrap;
        padding: 0.3rem 0.6rem;
        background: #cfe298;
        transform: translate(6px,-6px);
    }
    .card-content {
        font-family: "Meera Inimai", sans-serif;
        font-size: 1rem;
        line-height: 1.7;
        color: #d0d0d0;
        text-shadow: 1px 1px 0 rgb(17, 17, 17);
        margin: 0;
        position: relative;
        z-index: 1;
    }
    .isa-card-bg {
        position: absolute;
        bottom: 0;
        right: 0;
        width: auto;
        height: 300px;
        object-fit: contain;
        opacity: 0.3;
        z-index: 0;
        pointer-events: none;
        filter:opacity(60%);
        transform: translate(20%, 20%);
    }
    .unt-eagle {
        position: absolute;
        top: 20%;
        left: -135px;
        width: auto;
        height: 75px;
        object-fit: contain;
        z-index: 2;
        pointer-events: none;
    }
    .tech-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
        margin-top: 1rem;
    }
    .tech-category {
        background: #1a1a1a;
        border: 1px solid #333333;
        padding: 1.5rem;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
    }
    .tech-category-title {
        font-family: "Meera Inimai", sans-serif;
        font-size: 1.25rem;
        font-weight: 600;
        color: #e0e0e0;
        margin: 0 0 1rem 0;
        padding-bottom: 0.5rem;
    }
    .tech-subcategory-title {
        font-family: "Meera Inimai", sans-serif;
        font-size: 1rem;
        font-weight: 500;
        color: #2a2a2a;
        width: fit-content;
        background:rgb(183, 189, 183);
        margin: 1.25rem 0 0.75rem 0;
        padding: 0.25rem;
    }
    .tech-subcategory-title:first-of-type {
        margin-top: 0;
    }
    .tech-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0;
    }
    .tech-tag {
        font-family: "Meera Inimai", sans-serif;
        font-size: 0.9rem;
        padding: 0.4rem 0.9rem;
        background: #2a2a2a;
        border: 1px solid #444444;
        color: #e0e0e0;
        display: inline-block;
        transition: background 0.2s ease, border-color 0.2s ease;
    }
    .tech-tag:hover {
        background: #333333;
        border-color: #aaaaaa;
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
        position: relative;
    }  
    .socials-title{
        width:fit-content;
        font-size:3.5rem;
        color:rgb(255, 255, 255);
        margin-bottom:1rem;
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
        margin-bottom:1rem;
        position: relative;
    }
    .socials-image{
        position: absolute;
        top: 12%;
        left: 50%;
        transform: translateX(-50%);
        width: 9.375rem;
        height: 9.375rem;
        pointer-events: none;
        z-index: 4;
    }
    .socials-button{
        transition: border-color 200ms ease-in-out;
        margin-top: 1rem;
        display:block;
        border-radius: 1.5rem;
        background-color: rgb(0, 0, 0);
        text-decoration: none;
        z-index: 3;
        width: 12.5rem;
        position: relative;
        height: 13rem;
        border: none;
    }
    .socials-button::before{
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        border-radius: 1.5rem;
        border: 1px solid rgba(128, 128, 128, 0.4);
        filter: blur(2px);
        z-index: -1;
        transition: border-color 200ms ease-in-out, filter 200ms ease-in-out;
    }
    .socials-text-label{
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
        font-size:2rem;
        width: 12.5rem;
        color:transparent;
        text-decoration: none;
        text-shadow: 0 0 1px rgb(255, 255, 255);
        text-align: center;
        z-index: 10;
        pointer-events: none;
        transition: text-decoration 200ms ease-in-out;
    }
    .socials-button-container:hover .socials-text-label{
        text-decoration: underline;
    }
    .socials-button:hover{
        cursor: pointer;
    }
    .socials-button:hover::before{
        border-color: rgb(245, 245, 245);
        filter: blur(0px);
    }
    .contact-section{
        margin-top:1rem;
        display:flex;
        flex-direction: column;
        width:100% !important;
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
        border-right:0;
        border-bottom:0;
        z-index: 2;
        position: relative;
        align-items: stretch;
        max-width: 900px;
        width: 100%;
        will-change: auto;
        margin-left: auto;
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
    .mobile-about-section {
        display: none;
    }
    .mobile-about-section a {
        color: aqua;
        text-decoration: underline;
        text-decoration-color: rgba(0, 255, 255, 0.5);
        transition: text-decoration-color 0.2s ease;
    }
    .mobile-about-section a:hover {
        text-decoration-color: aqua;
    }
    /* Responsive behavior */
    @media (max-width: 768px) {
        .home-page{
            flex-direction: column;
            height: auto;
        }
        .left-panel{
            display: none;
        }
        .right-panel{
            margin-left: 0;
            height: auto;
        }
        .mobile-about-section {
            display: flex;
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
        .industrial-section {
            padding: 0 0 2rem 0;
        }
        .industrial-container {
            padding: 2rem 1rem 0 1rem;
        }
        .industrial-title {
            font-size: 2rem;
        }
        .card-header {
            flex-direction: column;
        }
        .card-time {
            align-self: flex-start;
        }
        .tech-grid {
            grid-template-columns: 1fr;
        }
    }
</style>