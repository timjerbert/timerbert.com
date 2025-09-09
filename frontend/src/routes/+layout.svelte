<script lang="js">
    import { goto } from '$app/navigation';
    import { page } from '$app/state';
    let {children} = $props();


    let m = null
    // function navButtonHover(event) {
	// 	let r = event.currentTarget.getBoundingClientRect();
	// 	m = {x:event.clientX-r.left, y:event.clientY-r.top}
    // }

</script>

    <div class="site-container">
        <nav class="navbar">
            <button class="navbar-button" onclick={() => goto('/')}>
                Home
            </button>
            <button class="navbar-button" onclick={() => goto('/projects')}>
                Projects
            </button>
            <button class="navbar-button" onclick={() => goto('/design')}>
                Design
            </button>
            <button class="navbar-button hflex-last" onclick={() => goto('/contact')}>
                Contact
            </button>
        </nav>
        <div class="page-container">{@render children()}</div>
    </div>


<style scoped>

    .site-container{
        display:flex;
        flex-direction: column;
        width:100dvw;
        height:100dvh;
        background:rgb(255, 255, 255)
    }
    .page-container{
        display:block;
        width:100%;
        height:100%;
    }
    .navbar{
      width:100%;
      display:flex;
      height:fit-content;
      padding: 0;
      display:flex;  
      background:#313131;
      overflow-y:auto;
    }

    .navbar-button{
        font-size:x-large;
        border:0;
        color:white;
        padding:16px;
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