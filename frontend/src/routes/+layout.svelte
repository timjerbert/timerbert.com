<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=BBH+Sans+Bartle&family=Lexend+Deca:wght@100..900&family=Meera+Inimai&family=Rubik+Iso&display=swap" rel="stylesheet">
<script lang="js">
    import { goto } from '$app/navigation';
    import { page } from '$app/state';
    import { onMount } from 'svelte';
    let {children} = $props();

    // Typing effect variables
    let displayedText = $state('');
    let fullText = 'Timothy Erbert';
    let typingIndex = $state(0);
    let isTyping = $state(true);
    let isCompleted = $state(false);

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

    let m = null
    // function navButtonHover(event) {
	// 	let r = event.currentTarget.getBoundingClientRect();
	// 	m = {x:event.clientX-r.left, y:event.clientY-r.top}
    // }

    onMount(() => {
        // Start typing effect when component mounts
        setTimeout(typeText, 500); // Small delay before starting
    });

</script>

    <div class="site-container">
        <nav class="navbar">
                <div class="navbar-title">
                    {displayedText}<span class="cursor" class:blinking={isTyping} class:fading={isCompleted}>▮</span>
                </div>
            <button class="navbar-button" onclick={() => goto('/')}>
                Home
            </button>
            <button class="navbar-button" onclick={() => goto('/projects')}>
                Projects
            </button>
            <button class="navbar-button hflex-last" onclick={() => goto('/#contact')}>
                Contact
            </button>
        </nav>
        <div class="page-container">{@render children()}</div>
    </div>


<style>
    .site-container{
        display:flex;
        flex-direction: column;
        overflow-y:auto;
        width:100dvw;
        height:100dvh;
        color:white;
        background:black;
    }
    .page-container{
        font-family: "Bahnschrift", sans-serif;
        display:flex;
        flex-direction: column;
        flex: 1;
        width:100%;
        min-height: 0;
    }
    .navbar{
      width:100%;
      display:flex;
      height:fit-content;
      padding: 0;
      display:flex;  
      align-items: center;
      background:#101212;
    }

    .navbar-title-section{
        color:white;
        padding: 1.6rem;
        display: flex;
        flex-direction: column;
    }

    .navbar-title{
        font-family: "Meera Inimai", sans-serif;
        padding:1rem;
        width:20rem;
        font-size:2.5rem;
    }

    .navbar-subtitle{
        font-size:1.5rem;
    }

    .cursor {
        color: white;
        font-weight: normal;
    }
    .blinking {
        animation: blink 1s infinite;
    }
    .fading {
        animation: fadeOut 0.1s ease-in-out forwards;
    }
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
    @keyframes fadeOut {
        0% { opacity: 1; }
        100% { opacity: 0; }
    }

    .navbar-button{
        font-family: "Meera Inimai", sans-serif;
        font-size:1.5rem;
        border:0;
        color:white;
        padding:1rem;
        background:none;
    }

    .navbar-button:hover{
      text-decoration: underline;
    }
    .navbar-button:active{
      text-decoration: underline;
    }
    .hflex-last{
        margin-left:auto;
    }

</style>