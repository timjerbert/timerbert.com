<script>
    import { goto } from '$app/navigation';


</script>
<h1>Magiquill</h1>
<h3>Our Team</h3>
<p>Timothy Erbert, Dylan Snyder, Jean Affa, Carson Viator, Kyle Youngquist</p>
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
    <p>MagiQuill’s design places a high emphasis
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
<style scoped>
</style>