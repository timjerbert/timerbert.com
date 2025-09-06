<script lang="js">
    import { goto } from '$app/navigation';
    import navButtonPressed from "$lib/assets/navbar/pressed3d.png"
    import navButtonUnpressed from "$lib/assets/navbar/unpressed3d.png"
    let {children} = $props();


    let m = null
    // function navButtonHover(event) {
	// 	let r = event.currentTarget.getBoundingClientRect();
	// 	m = {x:event.clientX-r.left, y:event.clientY-r.top}
    // }

</script>

<nav>
    <div class="navbar">
        <button class="navbar-button" onclick={() => goto('/')}>
            <img class="pressed" src={navButtonPressed} alt="" />
            <img class="unpressed" src={navButtonUnpressed} alt="" />
        </button>
        <button class="navbar-button" onclick={() => goto('/projects')}>
            <img class="pressed" src={navButtonPressed} alt="" />
            <img class="unpressed" src={navButtonUnpressed} alt="" />
        </button>
        <button class="navbar-button" onclick={() => goto('/contact')}>
            <img class="pressed" src={navButtonPressed} alt="" />
            <img class="unpressed" src={navButtonUnpressed} alt="" />
        </button>

    </div>
</nav>

{@render children()}

<style scoped>
    .navbar{
      height:131px;
      width:100%;
      display:flex;
      height:fit-content;
      padding: 0px;
      display:flex;  
      background-image: url('../lib/assets/navbar/keyboardbg3d.png');
    }

    .navbar-button{
        padding:0px;
        margin:0px;
        border:0px;
        background:none;
    }
    .navbar-button img{
    }
    .navbar-button .pressed{
        display:none;
    }
    .navbar-button .unpressed{
        display:block;
    }
    .navbar-button:hover .pressed{
        display:block;
    }
    .navbar-button:hover .unpressed{
        display:none;
    }
</style>