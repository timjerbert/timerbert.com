<script>
    import { goto } from '$app/navigation';
    import editorExample from '../../../lib/assets/projects/magiquill/editor-example.png';

</script>
<div class="project-page">
    <div class="project-content">
        <img src={editorExample} alt="Magiquill Editor Example" class="editor-example">
        <div class="header-container">
            <h1>Magiquill</h1>
            <span class="creator-credits">A project developed by Tim Erbert, Dylan Snyder, Jean Affa, Carson Viator, Kyle Youngquist</span>
        </div>
        <p><a href="https://MagiQuill.netlify.app/">Magiquill.netlify.app</a></p>
        <p>Sponsored by Dr. Stephanie Ludi</p>
        <h2>Project Overview</h2>

        <p>Magiquill was created as a part of our two semester Senior Capstone course at the University of North Texas.</p>
        <p>We went out to create all in one hub
            to build, play and share
            text adventure games.
            We seek to modernize and
            simplify the process of
            making text adventures by
            providing simple yet robust
            tools all packaged in a free
            to use website.</p>

        <h2>Features</h2>
        <ul>
            <li>MagiQuill primarily consists of our self-built text adventure creation
                tool and engine, but that is not all.</li>
            <li>The site also possesses online community features. It is possible to
                publish user generated content to be experienced by other users
                of the site.</li>
            <li>Cloud saving is present for your creations, but they can also be
                exported and downloaded to your system.</li>
            <li>Games themselves can be exported as standalone titles for offline
                play if the developer desires.
                </li>
        </ul>
        <h2>Design</h2>
        <h3>Engine</h3>
        <p>While we were solely tasked with creating an online text adventure creator and player, we were ambitious
            and decided to implement a node scripting system. Our engine was heavily inspired by the block programming language Scratch.
            Scratch was of interest to us not only due to its user friendly interface and accessibility, but also to the depth of what can be created through such simple scripting blocks.</p>
        <p>MagiQuill's design places a high emphasis
            on modularity and ease of use. We chose
            to create a node based editor to visually
            represent the game flow, allowing users to
            drag, drop and connect nodes to
            represent the story path and game logic.</p>

        <p>We designed the system to minimize the clutter and allow
                users to scale complex stories without losing clarity.</p>
        <p>The nodes are differentiated mainly into 2 categories, object nodes
            and function nodes.</p>
        <h4>Function Nodes</h4>
        <p>These nodes are the building blocks of all Magiquill adventures. Function nodes often have both inputs and outputs, but there are sometimes exceptions. The flow of logic between function nodes runs in series.</p>
        <h4>Object Nodes</h4>
        <p>Object nodes are containers. You
            can not only script within them, but you can also nest additional object nodes.
        </p>
        <p>The position of the player relative to other object nodes affects whether or not certain logic is capable of running. We accomplish this through a scope system. The logic of an object will listen for a player's input if the player is:</p>
        <ul>
            <li>In the same room as the object</li>
            <li>Holding the object</li>
            <li>Is nested within the object</li>
        </ul>
        <p>There are many benefits to this scope system. Global interactions can be had by placing logic in the topmost object!</p>
    </div>
</div>
<style scoped>
    .project-page {
        background: rgba(0, 0, 0, 0.393);
        min-height: 100%;
        padding: 0;
        box-sizing: border-box;
    }
    .project-content {
        font-size: 1.2rem;
        line-height: 1.85rem;
        color: rgb(0, 0, 0);
        max-width: 900px;
        background-color: rgb(216, 234, 201);
        margin: 0 auto;
    }
    .project-content p {
        font-family: "Meera Inimai", sans-serif;
        margin: 2rem;
    }
    .project-content h1,
    .project-content h2,
    .project-content h3,
    .project-content h4 {
        font-family: "Meera Inimai", sans-serif;
        color: rgb(0, 0, 0);
        margin: 2rem;
    }
    .header-container {
        display: flex;
        align-items: baseline;

        width: 100%;
        background: rgb(0, 43, 4);
        padding: 0.25rem 1rem;
        box-sizing: border-box;
        margin-bottom: 2rem;
        flex-wrap: wrap;
    }
    .project-content h1 {
        font-family: "BBH Sans Bartle", sans-serif;
        font-size: 2.5rem;
        margin: 0;
        color: rgb(221, 240, 216);
        position: relative;
        z-index: 2;
        line-height: 1.2;
        flex-shrink: 0;
    }
    .creator-credits {
        font-family: "Courier New", "Consolas", monospace;
        font-size: 0.75rem;
        color: rgb(221, 240, 216);
        opacity: 0.8;
        white-space: nowrap;
        margin-bottom: 0.2rem;
    }
    .project-content h2 {
        font-size: 1.5rem;
    }
    .project-content h3 {
        font-size: 1.3rem;
    }
    .project-content h4 {
        font-size: 1.1rem;
    }
    .project-content ul {
        font-family: "Meera Inimai", sans-serif;
        color: rgb(0, 0, 0);
        margin: 2rem;
        padding-left: 2rem;
    }
    .project-content li {
        margin-bottom: 0.5rem;
    }
    .editor-example {
        width: 100%;
        max-width: 900px;
        height: auto;
        display: block;
        margin: 0;
    }
</style>